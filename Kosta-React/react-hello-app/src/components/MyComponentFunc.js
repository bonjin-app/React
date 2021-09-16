import React, { useState, useRef } from 'react';
import './MyComponent.css';

const MyComponentFunc = ({name, children}) => {
    //useState() 사용해서 상태변수와 setter 메서드 선언
    const [value, setValue] = useState(0);
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    const [inputs, setInputs] = useState({
        message:'',
        username:''
    });
    const { message, username } = inputs;
    
    const [ valid, setValid ] = useState(false);
    const [ messages, setMessages ] = useState(['Angular','React','Vue','Ember']);
    const message_list = messages.map((msg, idx) => (<li key={idx}>{msg}</li>));
    
    //useRef() 사용해서 ref 변수 선언
    const myUsername = useRef(null);

    //Event Handler 메서드 선언
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            setValid(true);
            setMessages(messages.concat(message));
            setInputs({...inputs, message: ''});
            myUsername.current.focus();
        }
    };

    return (
        <div>
            <h3>App(부모)컴포넌트에서 받은 name 값 = {name}</h3>
            <div>
               App(부모)컴포넌트에서 받은 {children}   
            </div>
            <h4>상태변수 Value = {value}</h4>
            <button onClick={() => setValue(value + 1)}>증가</button>
            <button onClick={() => setValue(value - 1)}>감소</button> <br/>
            <h4>Message = {message}</h4>
            <input type="text" name="message" value={message} onChange={handleChange} 
                onKeyPress={handleEnter} 
            /><br/>
            <ul>
                {message_list}
            </ul>            
            <h4>Username = {username}</h4>
            <input type="text" name="username" value={username} onChange={handleChange} 
                className={valid ? 'success' : 'failure'}
                ref = {myUsername}
            /><br/>

        </div>
    );
};

export default MyComponentFunc;