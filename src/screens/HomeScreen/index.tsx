import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import Colors from '../../libs/Colors';
import {IC_CANCEL, IC_FORWARD, IC_SEARCH} from '../../utils/ImageSource';
import {toastShow} from '../../libs/toast';
import {useSelector} from 'react-redux';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const [searchKey, setSearchKey] = useState<string>('Luana Souza');
  const [sortedArr, setSortedArr] = useState<any[]>();
  const [searchedRank, setSearchedRank] = useState<number>();
  const {leaderBoard} = useSelector((state: {leaderBoard: any}) => state);

  useEffect(() => {
    console.log('From Redux ' + JSON.stringify(leaderBoard));
    setSortedArr(leaderBoard?.leaderBoard);
  }, [leaderBoard]);

  // render Flat List
  const renderFlatList = () => {
    return (
      <View style={{flex: 1, marginHorizontal: 10, marginTop: 20}}>
        <FlatList
          data={sortedArr?.slice(0, 10)}
          ListHeaderComponent={
            <View style={styles.titleViewStyle}>
              <Text style={styles.tableHeaderTitle}>Name</Text>
              <Text style={styles.tableHeaderTitle}>Rank</Text>
              <Text style={styles.tableHeaderTitle}>Bananas</Text>
              <Text style={styles.tableHeaderTitle}>Presence</Text>
            </View>
          }
          keyExtractor={item => item.uid.toString()}
          key={item => item.uid}
          renderItem={({item, index}) => (
            <View style={styles.listItemStyle}>
              {/* name */}
              <View style={styles.itemCellStyle}>
                <Text>{item?.name}</Text>
              </View>
              {/* Render Rank */}
              <View style={styles.itemCellStyle}>
                <Text
                  style={{
                    color:
                      searchKey.trim().length > 0 &&
                      item?.name.includes(searchKey)
                        ? Colors.primaryColor
                        : Colors.black,
                  }}>
                  {searchKey.trim().length > 0 && item?.name.includes(searchKey)
                    ? searchedRank && searchedRank
                    : index + 1}
                </Text>
              </View>
              {/* Bananas */}
              <View style={{}}>
                <Text>{item?.bananas}</Text>
              </View>
              {/* Is Searvhed user */}
              <View style={styles.itemCellStyle}>
                <Text
                  style={{
                    color:
                      searchKey.trim().length > 0 &&
                      item?.name.includes(searchKey)
                        ? Colors.primaryColor
                        : Colors.black,
                  }}>
                  {searchKey.trim().length > 0 && item?.name.includes(searchKey)
                    ? 'yes'
                    : 'no'}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  };

  // getting result
  const gettingResult = () => {
    if (searchKey?.trim().length == 0) {
      toastShow('error', 'Please enter name first.');
    } else {
      if (sortedArr) {
        let filteredData = sortedArr.filter(x => x.name.includes(searchKey));
        console.log(filteredData);

        // If User is not present
        if (filteredData.length == 0) {
          Alert.alert(
            'Information',
            'This user name does not exist! Please specify an existing user name!',
          );
          return;
        } else {
          // If user found.
          const searchedIndex = sortedArr.indexOf(filteredData[0]);
          console.log('index obj ' + searchedIndex);
          setSearchedRank(searchedIndex + 1);
          if (searchedIndex > 9) {
            var newArr = [...sortedArr];
            newArr[9] = filteredData[0];
            setSortedArr(newArr);
          }
        }
      }
    }
  };

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Ling Test</Text>
      <View style={styles.searchedViewStyle}>
        {/* inout Text */}
        <View style={styles.inputViewStyle}>
          <Image
            source={IC_SEARCH}
            style={{width: 25, height: 25, flex: 0.1}}
            resizeMode={'contain'}
          />
          <TextInput
            placeholder="Search Names"
            style={{flex: 0.8}}
            value={searchKey}
            onChangeText={(text: string) => {
              setSearchKey(text);
            }}
          />
          {searchKey && searchKey.trim().length > 0 && (
            <TouchableOpacity
              style={{flex: 0.1}}
              onPress={() => {
                setSearchKey('');
              }}>
              <Image
                source={IC_CANCEL}
                style={{width: 20, height: 20}}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Button to search */}

        <TouchableOpacity
          testID="searchButton"
          onPress={() => {
            // do Search As desc
            gettingResult();
          }}>
          <View style={styles.buttonStyle}>
            <Image
              source={IC_FORWARD}
              style={{width: 30, height: 30}}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* render Resulted Flat List */}
      {renderFlatList()}
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  britainTextStyle: {
    color: Colors.primaryColor,
  },
  title: {
    fontSize: 38,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  inputViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 0.3,
    borderColor: Colors.darkGray,
    backgroundColor: Colors.backGroundLowWhiteColor,
    borderRadius: 10,
    flex: 1,
  },
  itemCellStyle: {
    flex: 0.25,
    alignItems: 'center',
  },
  tableHeaderTitle: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
  listItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    padding: 10,
  },
  titleViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    paddingVertical: 10,
  },
  buttonStyle: {
    padding: 6,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  searchedViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default HomeScreen;
