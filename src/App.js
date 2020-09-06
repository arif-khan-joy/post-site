import React from 'react';
import './App.css';
import Home from './component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import NoMach from './component/NoMatch/NoMach';
import PostDetail from './component/PostDetail/PostDetail';
import Coment from './component/Coment/Coment';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/post/:postId">
              <PostDetail/>
          </Route>
          <Route path="/coments/:comentId">
            <Coment/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="*">
              <NoMach/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
