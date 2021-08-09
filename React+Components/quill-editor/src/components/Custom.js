import React from 'react'
import ReactQuill from 'react-quill';
import "../../node_modules/react-quill/dist/quill.snow.css";
import { useState } from 'react';

const Custom = () => {
    const [body, setBody] = useState('');

    return (
        <ReactQuill
            theme="snow"
            modules={Basic.modules}
            formats={Basic.formats}>
        </ReactQuill>
    )
}

export default Custom
