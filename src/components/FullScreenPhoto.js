import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { photoTaken } from '../actions';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

class FullScreenPhoto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePhoto: {}
    };
  }

  componentDidMount() {

    // let photo = _.find(this.props.currentAcv.photos, { id: this.props.photoId });
    const id = this.props.photoId;
    const photo = this.props.currentAcv.photos[id];
    this.setState({ activePhoto: photo });

  }


  render() {
    // console.log("this.camera: ");
    // console.log(this.camera);
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          } }
          captureTarget={Camera.constants.CaptureTarget.disk}
          captureQuality={Camera.constants.CaptureQuality.medium}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    if (this.camera) {
      this.camera.capture()
        .then((data) => {
          // this.setState({ activePhoto: data });
          this.props.photoTaken({ photoId: this.props.photoId, path: data.path, currentPhoto: this.state.activePhoto });
          Actions.acvPhotoReview({ photoId: this.props.photoId });
        })
        .catch(err => console.error(err));
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

const mapStateToProps = ({acv}) => {
  const currentAcv = acv.currentAcv;
  return { currentAcv };
}

export default connect(mapStateToProps, { photoTaken })(FullScreenPhoto);