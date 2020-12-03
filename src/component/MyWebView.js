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
      uritext = "http://scm-ship.mmpint.com/Main_Contents.asp";
    }else{
      barCodeData = navigation.state.params.barCodeData;
      if (barCodeData.indexOf("http") !== -1){
        uritext = barCodeData
      }else{
        uritext = 'http://scm-ship.mmpint.com/ship/ViewOrderPrint.asp?barCodeData=' + barCodeData
      }     
    }
//    console.log(uritext);
    return (

      <WebView
        useWebKit={true} // IOS 에서는 webkit을 사용 하도록 설정
        javaScriptEnabled={true}
        originWhitelist={['*']}
        ref={ref => this.WEBVIEW_REF = ref}
        style={{ justifyContent: 'center',alignItems: 'center',width:'100%',height:'100%',}}          
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
