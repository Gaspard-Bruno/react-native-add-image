# React Native Add Image

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui)](https://github.com/Gaspard-Bruno/react-native-add-image/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/Gaspard-Bruno/react-native-add-image)](https://github.com/Gaspard-Bruno/react-native-add-image/graphs/commit-activity)

React Native package that adds a pops up a dialog with the upload option or take photo, and cancel as well. Under the hood we are using the [react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker) package and its two main functions: launchCamera and launchImageLibrary.

## Getting Started

### Requirements

#### react-native-image-picker
[react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker) is a peer dependency for this package that you'll need to add to your project.

To install these dependencies run the following command:

```sh
yarn add react-native-image-picker

```
or
```sh
npm install react-native-image-picker
```

### Install
```sh
yarn add react-native-add-image
```
or
```sh
npm install react-native-add-image
```

### Usage

### Constants
```javascript
import useAddImage from 'react-native-add-image'

const { handleShowImagePicker } = useAddImage()

handleShowImagePicker((response) => {
  // Your code goes here
})
```

## Roadmap

There is nothing currently in the roadmap but any suggestions are welcome!

## Contributing
Pull requests are welcome! Feel free to open issues and submit PRs, we will review them and answer back as fast as possible.

## 🚀 Authors

- [@olserra](https://www.github.com/olserra)
