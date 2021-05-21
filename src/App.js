import { useState } from 'react'
const marked = require("marked")

function App() {

  const [text, setText] = useState('')
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  let markdown = marked(text)

  return (
    <div className="App">
      <div className="editor-div">
        <textarea
          className="editor"
          id="editor"
          onChange={(e) => handleChange(e)}
          placeholder="Enter markdown here..."
        ></textarea>
      </div>
      <div className="preview-div">
        <div
          className="preview"
          type="text"
          dangerouslySetInnerHTML={{ __html: markdown }}
          readOnly
        ></div>
      </div>
    </div>
  );
}

export default App;
