<p align="center">
  <img src="logo.png" align="center" width="150px" height="150px" />
</p>
<h1 align="center">React Media Previewer</h1>
<p align="center">
  <a href="https://drone.ruilisi.com/ruilisi/react-media-previewer" title="Build Status">
    <img src="https://drone.ruilisi.com/api/badges/ruilisi/react-media-previewer/status.svg?ref=refs/heads/master">
  </a>
</p>

<p align="center">
  <a href="README-CN.md">简体中文</a> | English
</p>

## Purpose

`react-media-previewer` is to create a previewer that is compatible with viewing various media files by one click. It is a component built with React and Typescript. In order to preview media files such as images, video and audio, we made it.

## Installation

```
npm install react-media-previewer
```

or

```
yarn add react-media-previewer
```

## Usage

```js
import { render } from "react-dom";
import PreviewModal from "react-media-previewer";
import "react-media-previewer/dist/index.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setVisible(true)}>view media</button>
      <PreviewModal
        visible={visible}
        name="image.png"
        setVisible={setVisible}
        url="https://assets.ruilisi.com/attachment-8de9464b-d286-43a9-b18e-f8a984bf8623.jpg"
      />
    </div>
  );
}

render(<App />, document.getElementById("app"));
```

<img src="example.png" />

## Demo

[Try Demo on CodeSandbox](https://codesandbox.io/s/react-media-previewer-9teg9p)

## Props

| Property   | Type     | Description                                                     |
| :--------- | :------- | :-------------------------------------------------------------- |
| visible    | bollean  | whether the previewer is visible or not                         |
| setVisible | function | function called to close the previewer when previewer is opened |
| url        | string   | media file url                                                  |
| name       | string   | media file name                                                 |

## License

MIT © [ruilisi](https://github.com/ruilisi)
