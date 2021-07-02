import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CameraScreenStorage from '../component/CameraStorage';
import CameraScreenHandover from '../component/CameraHandover';
import CameraScreenBuyConfirm from '../component/CameraBuyConfirm';
import CameraScreenDocument from '../component/CameraDocument';


import WebViewScreen from '../component/MyWebView';

const AppStack = createStackNavigator(
  {
    CameraScreenStorage: {screen: CameraScreenStorage},
    CameraScreenHandover: {screen: CameraScreenHandover},
    CameraScreenBuyConfirm: {screen: CameraScreenBuyConfirm},
    CameraScreenDocument: {screen: CameraScreenDocument},
    WebViewScreen: {screen: WebViewScreen},
  },
  {
    initialRouteName: 'WebViewScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppStack);
