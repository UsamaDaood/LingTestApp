import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './navigation/appNavigator';
import {Provider} from 'react-redux';
import {createStore} from './config/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Text, LogBox} from 'react-native';
import Loader from './common/loader';
import Toast from 'react-native-toast-message';
import {persistStore} from 'redux-persist';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const trackAutomaticEvents = true;

export const {store} = createStore();
let persistor = persistStore(store);
const MyTheme = {
  colors: {
    background: '#fff',
  },
};
function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <SafeAreaProvider style={{backgroundColor: Colors.whiteColor}}>
      <SafeAreaView
        edges={['top']}
        style={{
          flex: 1,
        }}>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator />
              <Loader />
              <Toast position="top" topOffset={50} />
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
