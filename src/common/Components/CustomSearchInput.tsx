// Global loader for whole application //

import React from 'react';
import {ImageSourcePropType} from 'react-native';
import Color from '../../libs/Colors';
import {IC_CANCEL, IC_SEARCH} from '../../utils/ImageSource';
import CustomInput from './CustomInput';
interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  callBackLeftImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  callBackRightImage?: any;
}

const CustomSearchInput = ({
  leftIcon,
  placeholder,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
}: CustomInputProps) => {
  const deleteSearch = () => {
    onChangeText('');
    callBackRightImage();
  };
  return (
    <CustomInput
      leftIcon={leftIcon}
      placeholder={placeholder}
      backgroundViewColor={Color.colorGray}
      RightIcon={inputValue == '' ? IC_SEARCH : IC_CANCEL}
      callBackLeftImage={callBackLeftImage}
      callBackRightImage={deleteSearch}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      inputValue={inputValue}
    />
  );
};

export default CustomSearchInput;
