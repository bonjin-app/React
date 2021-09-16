import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    //생성자
    constructor(props) {
        super(props);
        this.handleDec = this.handleDec.bind(this);
    }
    //상태변수를 포함하는 state 객체선언
    state = {
        value: 0,
        message: '',
        messages: ['Angular','React','Vue','Ember'],
        username: '',
        isValid: false,
    };
    //Event Handler 메서드 
    //handleDec = () => {
    handleDec() {    
        this.setState({
            value: this.state.value - 1
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleEnter = (e) => {
        const { messages, message } = this.state;
        //if(e.key === 'Enter') {
        if(e.keyCode === 13) {    
            this.setState({
                isValid: true,
                message: '',
                messages: [...messages, message],
                //username: message,
            });
            this.myUsername.focus();
        }
    };

    //lifecyle 메서드
    render() {
        //destructuring assignment
        const { name, age } = this.props;
        const { value, message, messages, username, isValid } = this.state;
        const { handleDec, handleChange, handleEnter } = this;
        const message_list = messages.map((msg, idx) => (<li key={idx}>{msg}</li>));

        return (
            <div>
                <h3>App(부모)컴포넌트에서 받은 값 = {name} / {age} </h3>
                <h4>상태변수 Value = {value}</h4>
                <button onClick={() => this.setState({
                    value: value + 1
                })}>증가</button>
                <button onClick={handleDec}>감소</button> <br/>
                <h4>Message = {message}</h4>
                <input type="text" name="message" value={message} onChange={handleChange} 
                    // onKeyPress={handleEnter}
                    onKeyDown={handleEnter}    
                />
                <ul>
                    {message_list}
                </ul>
                <h4>Username = {username}</h4>
                <input type="text" name="username" value={username} onChange={handleChange} 
                    className={isValid ? 'success' : 'failure'} 
                    ref={(ref) => this.myUsername = ref}
                />

            </div>
        );
    }
}//class
MyComponent.defaultProps = {
    name: 'React'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponent;