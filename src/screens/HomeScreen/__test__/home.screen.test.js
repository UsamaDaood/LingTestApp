import React from 'react';
import HomeScreen from '..';
import {render} from '@testing-library/react-native';

describe('Home screen', () => {
  it('should go to home screen', () => {
    const page = render(<HomeScreen />);
    const searchButton = page.getAllByTestId('searchButton');
  });
});
