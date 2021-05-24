import { useState, useEffect} from 'react'
const marked = require("marked")

const initialText = "# Header \n## Subheader \n### Sub-subheader \n\nIn-line code, `<div></div>`, between 2 backticks. \n\n``` \n// this is a code block: \nfunction anotherExample(firstLine, lastLine) { \n  if (firstLine == '```' && lastLine == '```') {\n     return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZmV_XcNHA9rOtiy4DPL31AAAAA%26pid%3DApi&f=1)"

function App() {

  const [text, setText] = useState('')
  
  useEffect(() => {
    setText(initialText)
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <header className="header-top">
        <h2>Markdown Previewer</h2>
      </header>
      <div className="main">
        <div className="editor-div">
          <header className="header-editor">
            <h2>Markdown</h2>
          </header>
          <textarea
            className="editor"
            id="editor"
            onChange={(e) => handleChange(e)}
            placeholder="Enter markdown here..."
            value={text}
          ></textarea>
        </div>
        <div className="preview-div">
          <header className="header-preview">
            <h2>Preview</h2>
          </header>
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
