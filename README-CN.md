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
  <a href="README.md">English</a> | 简体中文
</p>

## 目标

`react-media-previewer` 目的是打造一个能够兼容各种媒体文件的预览器。该项目使用 React 和 Typescript 开发，为了能够一键查看像图片、音频、视频等文件，我们创造了它。

## 安装

```
npm install react-media-previewer
```

or

```
yarn add react-media-previewer
```

## 使用

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

## 样例

[试试 CodeSandbox 上的样例](https://codesandbox.io/s/react-media-previewer-9teg9p)

## API

| 属性       | 类型     | 描述               |
| :--------- | :------- | :----------------- |
| visible    | bollean  | 预览器是否可见     |
| setVisible | function | 控制预览器可见性   |
| url        | string   | 媒体文件的链接地址 |
| name       | string   | 媒体文件的名称     |

## 许可

MIT © [ruilisi](https://github.com/ruilisi)
