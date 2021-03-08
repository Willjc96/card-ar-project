import React, { Component } from 'react';
import { Camera } from 'expo-camera';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default class CameraToolbar extends Component {
  state = {};

  render() {
    console.log(this.props.scan);

    return (
      <SafeAreaView>
        <Grid style={styles.bottomToolbar}>
          <Row>
            <Col style={styles.alignCenter}>
              <TouchableOpacity onPress={this.props.handleFlashMode}>
                <Ionicons
                  name={
                    this.props.flashMode === Camera.Constants.FlashMode.on
                      ? 'md-flash'
                      : 'md-flash-off'
                  }
                  color="white"
                  size={30}
                />
              </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
              {this.props.scan && (
                <TouchableWithoutFeedback onPress={this.props.handleRecording}>
                  <View
                    style={[
                      styles.captureBtn,
                      this.props.recording && styles.captureBtnActive,
                    ]}
                  >
                    {this.props.recording && (
                      <View style={styles.captureBtnInternal} />
                    )}
                  </View>
                </TouchableWithoutFeedback>
              )}
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity onPress={this.props.handleType}>
                <Ionicons name="md-camera-reverse" color="white" size={30} />
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomToolbar: {
    width: winWidth,
    position: 'absolute',
    height: 100,
    bottom: -800,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: '#FFFFFF',
  },
  captureBtnActive: {
    width: 80,
    height: 80,
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: 'red',
    borderColor: 'transparent',
  },
});
