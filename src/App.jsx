import './App.css';
import {Greeting} from './Greeting.jsx';
import {Message} from './Message.jsx';
import {Button} from './Button.jsx';

const name = "MyName";
const message = "I like react.jsx and i am exited to learn typescript"



export const App = () => {
  return (
    <div className='App'>
      <Greeting name={name}/>
      <Message text={message}/>
      <Button message={"hi there"}/>
      <p>Hello World</p>
    </div>
  )
}