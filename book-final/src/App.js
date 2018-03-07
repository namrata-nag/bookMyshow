import React, { Component } from 'react';
//import ViewBooks from './component/viewBook';
import ViewMovies from './component/viewMovie';
import Header from './component/header';
//import {BrowserRouter} from 'react-router-dom';
import history from './hist';
import {Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './component/login';
import RegisterForm from './component/register';
import Cart from './component/cart';
import AddBook from './component/addBook';
import AddMovie from './component/addMovie'
import DetailBook from './component/detail';
class App extends Component {
  render() {
    return (
    
     <Router history={history}>
      <div className="App">
      <Header />
       <Route path="/" exact component={ViewMovies}/>
       <Route path="/addBook" exact component={AddMovie} />
       <Route path="/login" exact component={Login}/>
       <Route path="/register" exact component={RegisterForm}/>
       <Route path="/cart" exact component={Cart}/>
       <Route path="/add" exact component={AddBook}/>
       <Route path="/detail/:id" exact component={DetailBook}/>
      </div>
      </Router>
     
    );
  }
}

export default App;
