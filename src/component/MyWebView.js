import React from 'react';
import {WebView} from 'react-native-webview';

export default class MyWebView extends React.Component {
  render() {
    const {navigation} = this.props;
    let barCodeData = "";
    let uritext = "";

    barCodeData = navigation.state.params;

    if (navigation.state.params == undefined){
      barCodeData = ""
      uritext = "http://mmpi-ship.mmpint.com/Main_Contents.asp";
    }else{
      barCodeData = navigation.state.params.barCodeData;
      if (barCodeData.indexOf("http") !== -1){
        uritext = barCodeData
      }else{
        uritext = 'http://mmpi-ship.mmpint.com/ship/ViewOrderPrint.asp?barCodeData=' + barCodeData
      }     
    }
//    console.log(uritext);
    return (

      <WebView
        useWebKit={true} // IOS 에서는 webkit을 사용 하도록 설정
        javaScriptEnabled={true}
        originWhitelist={['*']}
          
        source={{
          uri: uritext,
        }}

        onMessage={e => {
          if (e.nativeEvent.data === 'MoveCamera') {
            navigation.navigate('CameraScreen', {});
          }
        }}
      />
    );
  }
}
