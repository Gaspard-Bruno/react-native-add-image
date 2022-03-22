# react-native-add-image

Pops up a dialog with the upload option or take photo, and cancel as well. Under the hood we are using the react-native-image-picker package and its two main functions: launchCamera and launchImageLibrary.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install react-native-add-image

## Usage

```js
import useAddImage from "react-native-add-image"

const {handleShowImagePicker} = useAddImage();

handleShowImagePicker((response) => {
    // DO THINGS
})
```

## See the code base here

See [Code page](https://github.com/olserra/react-native-add-image).


## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/olserra/react-native-add-image/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/olserra](https://github.com/olserra)

## License

MIT © olserra

