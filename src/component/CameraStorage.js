import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

class Camera extends React.Component {
  onBarCodeRead = scanResult => {
    //console.log(scanResult);
    // scanResult.data will contain your scanned data
  };
  onGetItemPress = () => {
    // do something with button press
  };
  handleChange = () => {
    // handle user input
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <RNCamera
          onBarCodeRead={scanResult => {
            const resultData = scanResult.data;
            //console.log(scanResult);
            if (resultData) {
              navigation.navigate('WebViewScreen', {
                barCodeData: resultData + "&&storage",
              });
            }
          }}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}>
          <BarcodeMask width={300} height={300} showAnimatedLine={true} />
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default Camera;
