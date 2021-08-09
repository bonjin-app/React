import React from 'react'
import ReactQuill from 'react-quill';
import "../../node_modules/react-quill/dist/quill.snow.css";
import { useState } from 'react';

const Basic = () => {
    const [body, setBody] = useState('');

    return (
        <ReactQuill
            theme="snow"
            modules={Basic.modules}
            formats={Basic.formats}>
        </ReactQuill>
    )
}

Basic.modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

Basic.formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export default Basic
