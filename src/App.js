
import './App.css';
import UserList from './components/UserList';
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Roooter from './components/Roooter';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={UserList} exact/>
        <Route path="/:id" render={(props)=> <Roooter {...props}/>} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
