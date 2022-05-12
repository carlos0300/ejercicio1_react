import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
//import TaskListComponent from './components/container/task.list';
//import A from './components/pure/A';
import B from './components/pure/B';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="CARLOS"></Greeting> */}
        {/* <Greetingf name='Carlos'></Greetingf> */}
        {/* Componente listado de tareas */}
        <B></B>
      </header>
    </div>
  );
}

export default App;
