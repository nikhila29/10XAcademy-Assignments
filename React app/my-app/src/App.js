import './App.css';
import React from 'react';
import LandingPage from './Components/LandingPage/Landing_page';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import PostView from './Components/PostView/Post_view';

class App extends React.Component{
  constructor(props){
  super(props);
  }
 
  render(){
    return(
      <Router>
        <div>
          <hr/>
          <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/postview' component={PostView}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;