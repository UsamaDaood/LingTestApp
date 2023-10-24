import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../../libs/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {IC_APP_ICON} from '../../utils/ImageSource';
import leaderBoardJson from '../../utils/leaderboard.json';
import {handleLeaderBoard} from '../../features/transaction/leaderBoardSlice';

interface SplashProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashProps> = ({navigation}) => {
  const {leaderBoard} = useSelector((state: {leaderBoard: any}) => state);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    console.log(leaderBoardJson);
    if (leaderBoard?.leaderBoard.length == 0) {
      // save into Redux
      // If Redux is Empty then saved into Redux for further usage.
      const newArr: any = [];
      for (const [key, value] of Object.entries(leaderBoardJson)) {
        const data = value;
        var newObj: any = {...value, isPresent: false};
        newArr.push(newObj);
      }
      console.log('Arr : ' + JSON.stringify(newArr.length));
      var oo = [...newArr].sort((a, b) => b.bananas - a.bananas);
      console.log('Sorted Arr ==> ' + JSON.stringify(oo));
      dispatch(handleLeaderBoard(oo));
    } else {
      console.log('From Redux ' + JSON.stringify(leaderBoard));
    }

    handlingSplash();
  }, []);

  // Handling Splash Screen
  const handlingSplash = () => {
    setTimeout(async () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'HomeScreen',
          },
        ],
      });
    }, 2500);
  };

  return (
    <View style={styles.centered}>
      <Image
        source={IC_APP_ICON}
        style={{width: 300, height: 250}}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>Ling App Test</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
  },
  title: {
    fontSize: 38,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
});

export default SplashScreen;
