import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import TodoList from './TodoList';

const textState = atom({
    key: 'textState',
    default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text;
  }
})

function Home() {
  return (
    <div>
      <TextInput/>
      <CharacterCount/>

      <TodoList/>
    </div>
  )
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count.length}</>;
}

export default Home;