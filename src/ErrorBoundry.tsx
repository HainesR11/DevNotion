import React from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';
import RNRestart from 'react-native-restart';

import { ErrorLayout } from './components/layouts';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error: ', error, errorInfo);
  }

  handleRestart = async () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorLayout
          bodyText="There has been a problem processing the request. Please try again "
          onPress={() => RNRestart.Restart()}
        />
      );
    }
    return children;
  }
}

export default ErrorBoundary;
