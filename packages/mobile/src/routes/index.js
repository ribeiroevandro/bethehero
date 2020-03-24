import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/screens/Home';

const createRootNavigator = () =>
  createAppContainer(createStackNavigator({ Home }));

export default createRootNavigator;
