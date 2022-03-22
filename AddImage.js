
import { useCallback, useMemo } from 'react';

import { ActionSheetIOS, Dimensions } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const windowSize = Dimensions.get('window');

export const useAddImage = (navigation) => {

  const options = useMemo(() => ({
    mediaType: 'photo',
    maxWidth: windowSize.width,
    maxHeight: windowSize.height,
    selectionLimit: 0,
  }), []);

  const imageLibrary = useCallback((callBack) => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled launch image library');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response);
        callback(response);
      }
    });
  }, [navigation, options]);

  const takePhoto = useCallback((callback) => {
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response);
        callback(response);
      }
    });
  }, [navigation, options]);


  const handleShowImagePicker = useCallback((callback) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Choose from Library...', 'Take a Photo...', 'Cancel'],
        cancelButtonIndex: 2
      },
      (buttonIndex) => {
        if (buttonIndex === 2) {
          return;
        } else if (buttonIndex === 0) {
          imageLibrary(callback);
        } else if (buttonIndex === 1) {
          takePhoto(callback);
        }
      }
    );
  }, [imageLibrary, takePhoto]);

  return {
    showImagePicker: handleShowImagePicker,
  };
};