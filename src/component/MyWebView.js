import React from 'react';
import {WebView} from 'react-native-webview';

export default class MyWebView extends React.Component {
  render() {
    const {navigation} = this.props;
    let barCodeData = "";         //카메라에서 넘어온 파라메타값
    let uritext = "";             //WebView 이동경로
    let appreport = "";           //카메라 페이지 이동경로
    let cameraparamsplit = "";    //바코드 스캔시 파라메타값
    let cameraparamsplit_QR = ""; //QR코드 스캔시 파라메타값
    let texturl = ""  //카메라 스캔 후 이동URL
   


    if (navigation.state.params == undefined){
      barCodeData = ""
      uritext = "http://scm-ship.mmpint.com/Main_Contents.asp";
    }else{
      barCodeData = navigation.state.params.barCodeData;
      cameraparamsplit = barCodeData.split('&&');     
      cameraparamsplit_QR = cameraparamsplit[0].split('=');
      
      switch(cameraparamsplit[1]) {
        case 'storage' :             
          texturl = "http://scm-ship.mmpint.com/ship/ViewStorageDate.asp?barCodeData="
          break;
        case 'handover' :      
          texturl = "http://scm-ship.mmpint.com/ship/ViewHandover.asp?barCodeData="       
          break;
        case 'buyconfirm' :             
          texturl = "http://scm-ship.mmpint.com/ship/ViewBuyConfirm.asp?barCodeData="
          break;
        case 'document' :             
          texturl = "http://scm-ship.mmpint.com/ship/ViewDocument.asp?barCodeData="
          break;
      }          

      //바코드 QR 구분처리
      if (barCodeData.indexOf("http") !== -1){
        uritext = texturl + cameraparamsplit_QR[1]
      }else{
        uritext = texturl + cameraparamsplit[0]
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
          appreport = e.nativeEvent.data;

          switch(appreport) {
            case 'MoveStorage' :             
              navigation.navigate('CameraScreenStorage', {siteparam:"Storage"});
              break;
            case 'MoveHandover' :             
              navigation.navigate('CameraScreenHandover', {});
              break;
            case 'MoveBuyConfirm' :             
              navigation.navigate('CameraScreenBuyConfirm', {});
              break;
            case 'MoveDocument' :             
              navigation.navigate('CameraScreenDocument', {});
              break;
          }          
          /*          
          if (e.nativeEvent.data === 'MoveCamera') {
            navigation.navigate('CameraScreen', {});
            console.log("1");
          }
          */
        }}
      />
    );
  }
}
