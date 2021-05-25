import { useState, useEffect} from 'react'
const marked = require("marked")

marked.setOptions({breaks: true})

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZmV_XcNHA9rOtiy4DPL31AAAAA%26pid%3DApi&f=1)`

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
        <h1>Markdown Previewer</h1>
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
