import React from 'react'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useState } from 'react';

const Custom = () => {
    const [body, setBody] = useState('');

    const handleChange = (e) => {
        console.log(e);
        setBody(e);
    }

    return (
        <div style={{height: "650px"}}>
            <ReactQuill
                style={{height: '100%'}}
                modules={Custom.modules}
                formats={Custom.formats}
                onChange={handleChange}
                value={body}
                />
        </div>
    )
}

Custom.modules = {
    toolbar: [
        [
            { header: '1' },
            { header: '2' },
            { header: [3, 4, 5, 6] },
            { font: [] },
        ],
        [
            {size: []},
        ],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [
            { 'list': 'ordered' },
            { 'list': 'bullet' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ],
}

Custom.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
]

export default Custom
