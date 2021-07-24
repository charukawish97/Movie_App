import React, {Component} from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/create';
import Edit from './components/edit';
import Index from './components/index.component';

class App extends Component{

  render() {


    return( 
      
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbarbrand">React Crud examples</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                </ul>
                </div>
                </nav><br/>
                
               
                <h2>welcome to react by haritha</h2><br/>
                <Switch>
                  <Route exact path='/create' component={Create}/>
                  <Route exact path='/edit/:id' component={Edit}/>
                  <Route exact path='/index' component={Index}/>
                  </Switch>

                  </div>

                   
        
     

     

        </Router>
        



    );
  }


}

export default App;
