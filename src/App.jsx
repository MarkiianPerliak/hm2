import './App.css';
import {Greeting} from './Greeting.jsx';

const name = "MyName";

export const App = () => {
  return (
    <div className='App'>
      <Greeting name={name}/>
      <p>Hello World</p>
    </div>
  )
}