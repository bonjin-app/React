import './App.css';
import ReactQuill from 'react-quill';
import "../node_modules/react-quill/dist/quill.snow.css";
import { useState } from 'react';

function App() {

  const [body, setBody] = useState('');

  return (
    <div className="App">
      <ReactQuill
        theme="snow"
        modules={App.modules}
        formats={App.formats}>
      </ReactQuill>
    </div>
  );
}

App.modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

App.formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

export default App;
