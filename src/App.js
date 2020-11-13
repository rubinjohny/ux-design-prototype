import { BrowserRouter as Router } from "react-router-dom"
import {Routes} from './components/Routes';
import {Header} from "./components/Header"
import 'antd/dist/antd.css'
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
