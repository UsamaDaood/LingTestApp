// Global loader for whole application //

import React, {CSSProperties} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Color from '../../libs/Colors';
import {ImageSourcePropType} from 'react-native';
import {responsiveFontSize} from '../../libs/responsiveFont';
import {getExtensionOfFile} from '../../utils/regex';
import Colors from '../../libs/Colors';
// import {PRIMARY_FONT_REGULAR_WORK_SANS_400} from '../../utils/fonts';
interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  RightIcon?: ImageSourcePropType;
  RightFirstIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  callBackRightFirstImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  backgroundViewColor?: string;
  editable?: boolean;
  isPassword?: boolean;
  viewStyle?: ViewStyle;
  inputStyle?: TextInputProps;
}

const CustomInput = ({
  leftIcon,
  placeholder,
  RightIcon,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
  backgroundViewColor,
  editable,
  isPassword,
  viewStyle,
  inputStyle,
  RightFirstIcon,
  callBackRightFirstImage,
}: CustomInputProps) => {
  return (
    <View
      style={[
        styles.container,
        viewStyle,
        {
          backgroundColor: backgroundViewColor
            ? backgroundViewColor
            : Colors.colorGray,
        },
      ]}>
      {leftIcon && (
        <View style={{flex: 0.1, alignSelf: 'center', marginLeft: 5}}>
          <TouchableOpacity onPress={callBackLeftImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={leftIcon}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 0.9}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="grey"
          style={[inputStyle, {padding: 10}]}
          keyboardType={keyboardType ? keyboardType : 'default'}
          value={inputValue}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          selectTextOnFocus={false}
          secureTextEntry={isPassword}
        />
      </View>

      {RightFirstIcon && (
        <View style={{flex: 0.1, alignSelf: 'center'}}>
          <TouchableOpacity onPress={callBackRightFirstImage}>
            <Image
              style={[
                styles.cartIconStyle,
                // {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={RightFirstIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}

      {RightIcon && (
        <View
          style={{
            flex: 0.1,
            alignSelf: 'center',
            marginRight: 10,
            // borderWidth: 1,
          }}>
          <TouchableOpacity onPress={callBackRightImage}>
            <Image
              style={[
                styles.cartIconStyle,
                // {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorGray,
    borderRadius: 10,
    // borderWidth: 1,
    // marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: 10,
  },
  cartIconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    // marginRight: 10,
  },
});

export default CustomInput;
