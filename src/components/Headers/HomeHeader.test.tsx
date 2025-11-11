import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import {
  MESSAGES_NAVIGATOR,
  NOTIFICATION_SCREEN,
} from '@DevEx/constants/screenNames';
import { mockGoBack, mockNavigate } from '@DevEx/testing/setup-jest-tests';
import TestWrapper from '@DevEx/testing/TestWrapper';

import HomeHeader from './HomeHeader';

describe('Headers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('HomeHeader', () => {
    describe('isHomeScreen - true', () => {
      it('renders correctly', () => {
        const homeHeaderRender = render(
          <TestWrapper>
            <HomeHeader />
          </TestWrapper>,
        );

        expect(homeHeaderRender).toMatchSnapshot();
      });

      //* Change this when Notification Page is being built
      it('SHOULD navigate to the search navigator WHEN the bell icon is pressed', () => {
        const { getByTestId } = render(
          <TestWrapper>
            <HomeHeader />
          </TestWrapper>,
        );

        const bellIcon = getByTestId('notification-bell-icon');

        fireEvent.press(bellIcon);

        expect(mockNavigate).toHaveBeenCalledWith(NOTIFICATION_SCREEN);
      });

      it('SHOULD navigate to the Messgaes navigator WHEN the plane icon is pressed', () => {
        const { getByTestId } = render(
          <TestWrapper>
            <HomeHeader isHomeScreen={true} />,
          </TestWrapper>,
        );
        const messageIcon = getByTestId('messages-plane-icon');

        fireEvent.press(messageIcon);

        expect(mockNavigate).toHaveBeenCalledWith(MESSAGES_NAVIGATOR);
      });
    });
    describe('isHomeScreen - false', () => {
      it('Should match snapshot when isHomeScreen is set to false', () => {
        const tree = render(
          <TestWrapper>
            <HomeHeader isHomeScreen={false} title="TestScreen" />,
          </TestWrapper>,
        );
        expect(tree).toMatchSnapshot();
      });

      it('Should render a chevron along with the title of the screen', () => {
        const { getByTestId } = render(
          <TestWrapper>
            <HomeHeader isHomeScreen={false} title="TestScreen" />,
          </TestWrapper>,
        );
        const goBackChevron = getByTestId('go-back-chevron');

        expect(goBackChevron).toBeDefined();

        fireEvent.press(goBackChevron);

        expect(mockGoBack).toHaveBeenCalled();
      });
    });
  });
});
