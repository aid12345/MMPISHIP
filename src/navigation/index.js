import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraScreen from '../component/Camera';
import WebViewScreen from '../component/MyWebView';

const AppStack = createStackNavigator(
  {
    CameraScreen: {screen: CameraScreen},
    WebViewScreen: {screen: WebViewScreen},
  },
  {
    initialRouteName: 'WebViewScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppStack);
