<h1 align="center">React Media Previewer - Less is More</h1>

## Installation

```
npm install react-media-previewer
```
## Usage

```js
import MediaPreviewer from 'react-media-previewer'
import 'react-media-previewer/dist/index.css'

const Demo = () => {
    return <MediaPreviewer visible={visible} setVisible={setVisible} url={url} type={type} name={name} />
}

export default Demo
```