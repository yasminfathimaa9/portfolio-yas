import {Route,Switch} from 'react-router-dom'
import React from 'react';
import About from './About';
import Skills from './Skills';
import Header from './Header';
import Contact from './Contact'
import Home from './Home';
import ProjectCard from './ProjectCard';
function App() {
  return (
    <div>

<Header />
      <Switch>
       <Route path='/Project' component={ProjectCard} /> 

      <Route path='/Contact' component={Contact} />
        
      <Route path='/skills' component={Skills} />
      <Route path='/about' component={About} /> 
      <Route path='/' component={Home} /> 

      
      </Switch>
      
      
    </div>
  );
}

export default App;
