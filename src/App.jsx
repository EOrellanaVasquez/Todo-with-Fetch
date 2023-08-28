import './App.css'
import logo from './img/logo.png';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className='App'>
      <div className='todolist-logo-container'>
        <img src={logo}
        alt=''
        className='todolist-logo' 
        />
      </div>
      <div className='todos-list-container'>
        <h1>My todo's</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
