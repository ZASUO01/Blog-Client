import {useState} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Users from './pages/Users';



const  App = () => {
    const userFound = JSON.parse(localStorage.getItem('user')) 
                    ? JSON.parse(localStorage.getItem('user')).user 
                    : null; 
    const [actUser, setActUser] = useState(userFound);

return (
      <HashRouter basename="/">
          <Header user={actUser} setUser={setActUser}/>
          <Switch>
              <Route exact path="/">
                  <Home user={actUser} setUser={setActUser}/>
              </Route>
              <Route exact path="/posts">
                  <Posts />
              </Route>
              <Route exact path="/posts/:id">
                  <PostDetail actUser={actUser}/>
              </Route>
              <Route exact path="/users">
                    <Users />
              </Route>
              <Route exact path="/log-in">
                  <Login setUser={setActUser} />
              </Route>
              <Route exact path="/sign-up">
                    <SignUp setUser={setActUser}/>
              </Route>
          </Switch>
      </HashRouter>
  );
}

export default App;
