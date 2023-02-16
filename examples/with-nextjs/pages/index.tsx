import React, { useState } from "react";
import PreviewModal from "react-media-previewer";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <button onClick={() => setVisible(true)}>view media</button>
      </div>
      <PreviewModal
        visible={visible}
        setVisible={setVisible}
        urls={[
          "https://assets.ruilisi.com/attachment-8de9464b-d286-43a9-b18e-f8a984bf8623.jpg",
          "https://www.google.com/favicon.ico",
          "https://baidu.com/favicon.ico",
        ]}
      />
    </div>
  );
};
export default App;
