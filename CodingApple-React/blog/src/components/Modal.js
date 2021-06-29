import { useState } from 'react';

function Modal(props) {
    return (
        <>
        <div className="modal">
          <h2>{props.title}</h2>
          <p>날짜</p>
          <p>상세 내용</p>
        </div>
        </>
    );
}

export default Modal;