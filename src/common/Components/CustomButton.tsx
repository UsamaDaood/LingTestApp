// Global loader for whole application //

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Color from '../../libs/Colors';
import {PRIMARY_FONT_MEDIUM_WORK_SANS_500} from '../../utils/fonts';

interface ButtonProps {
  btnString: string;
  onClick: any;
  btnStyle: ViewStyle;
  titleStyle: TextStyle;
}

const CustomButton = ({
  btnString,
  onClick,
  btnStyle,
  titleStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, btnStyle]} onPress={onClick}>
      <Text style={[styles.btnTextStyle, titleStyle]}>{btnString}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  btnStyle: {
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 7,
  },
  btnTextStyle: {
    color: Color.whiteColor,
    alignSelf: 'center',
    fontFamily: PRIMARY_FONT_MEDIUM_WORK_SANS_500,
    alignContent: 'center',
    textAlignVertical: 'center',
  },
});

export default CustomButton;
