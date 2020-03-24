import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { COLORS } from '~/constants';
import createRootNavigator from '~/routes';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const Routes = createRootNavigator();

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <>
        <StatusBar
          backgroundColor={COLORS.BACKGROUND_COLOR}
          translucent
          barStyle="light-content"
        />
        <Routes />
      </>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'opensans-regular': require('~/assets/fonts/OpenSans-Regular.ttf'),
      'opensans-bold': require('~/assets/fonts/OpenSans-Bold.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
