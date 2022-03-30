<h1 align="center">React Media Previewer</h1>

## Purpose

`react-media-previewer` is a media previewer component built with React. In order to preview media files such as images, video and audio, we made it. 
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
        type="image"
      />
    </div>
  );
}

render(<App />, document.getElementById("app"));
```

![image.png](https://assets.ruilisi.com/attachment-8de9464b-d286-43a9-b18e-f8a984bf8623.jpg)
## Demo
[Try Demo on CodeSandbox](https://codesandbox.io/s/react-media-previewer-9teg9p)
# API

| Property        |  Type     | Description                                                                       |
| :-------------- | :-------- | :-------------------------------------------------------------------------------- |
| visible         | bollean   | whether the previewer is visible or not                                           |
| setVisible      | function  | function called to close the previewer when previewer is opened                   |
| url             | string    | media file url                                                                    |
| type            | string    | media file type                                                                   |
| name            | string    | media file name                                                                   |

