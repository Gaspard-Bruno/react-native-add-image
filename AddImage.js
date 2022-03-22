
import { useCallback, useMemo } from 'react';

import { ActionSheetIOS, Dimensions } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import get from 'lodash/get';

const windowSize = Dimensions.get('window');

export const AddImage = (navigation) => {

  const options = useMemo(() => ({
    mediaType: 'photo',
    maxWidth: windowSize.width,
    maxHeight: windowSize.height,
    selectionLimit: 0,
  }), []);

  const imageLibrary = useCallback(() => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled launch image library');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response);
        const uri = get(response, 'assets[0].uri');
        const height = get(response, 'assets[0].height');
        const width = get(response, 'assets[0].width');

        if (!uri || !height || !width) {
          console.log('Missing props in response.');
          return;
        }
        return navigation.push('VisualSearch', { image: uri, ratio: height / width });
      }
    });
  }, [navigation, options]);

  const takePhoto = useCallback(() => {
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response);
        const uri = get(response, 'assets[0].uri');
        const height = get(response, 'assets[0].height');
        const width = get(response, 'assets[0].width');

        if (!uri || !height || !width) {
          console.log('Missing props in response.');
          return;
        }
        return navigation.push('VisualSearch', { image: uri, ratio: height / width });
      }
    });
  }, [navigation, options]);


  const handleShowImagePicker = useCallback(() => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Choose from Library...', 'Take a Photo...', 'Cancel'],
        cancelButtonIndex: 2
      },
      (buttonIndex) => {
        if (buttonIndex === 2) {
          return;
        } else if (buttonIndex === 0) {
          imageLibrary();
        } else if (buttonIndex === 1) {
          takePhoto();
        }
      }
    );
  }, [imageLibrary, takePhoto]);

  return {
    showImagePicker: handleShowImagePicker,
  };
};