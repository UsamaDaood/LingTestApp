// Global loader for whole application //

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ViewStyle,
} from 'react-native';
import Color from '../../libs/Colors';
import {ImageSourcePropType} from 'react-native';
import {responsiveFontSize} from '../../libs/responsiveFont';
import {getExtensionOfFile} from '../../utils/regex';
import {PRIMARY_FONT_REGULAR_WORK_SANS_400} from '../../utils/fonts';
interface HeaderProps {
  leftIcon?: ImageSourcePropType;
  headerTitle?: string;
  RightIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  containerStyle?: ViewStyle;
}

const CustomHeader = ({
  leftIcon,
  headerTitle,
  RightIcon,
  callBackLeftImage,
  callBackRightImage,
  containerStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.headerStyle, containerStyle]}>
      <View style={{flex: 0.1}}>
        {leftIcon && (
          <TouchableOpacity onPress={callBackLeftImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={leftIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={{flex: 0.7}}>
        <Text numberOfLines={1} style={styles.textStyle}>
          {headerTitle}
        </Text>
      </View>

      <View style={{flex: 0.1}}>
        {RightIcon && (
          <TouchableOpacity onPress={callBackRightImage}>
            <Image
              style={styles.cartIconStyle}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    paddingBottom: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontFamily: PRIMARY_FONT_REGULAR_WORK_SANS_400,
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    alignSelf: 'center',
    //flex: 0.5,
    color: Color.black,

    //width: '90%',
  },
  cartIconStyle: {
    width: responsiveFontSize(25),
    height: responsiveFontSize(25),
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});

export default CustomHeader;
