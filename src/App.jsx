import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Movies from './Components/Movies/Movies';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Tv from './Components/Tv/Tv';
import ProtectedRoute from './ProtectedRoute';
import TopRated from './Components/TopRated/TopRated';
import NowPlaying from './Components/NowPlaying/NowPlaying';
import Popular from './Components/Popular/Popular';
import Upcoming from './Components/Upcoming/Upcoming';
import MovieDetails from './Components/MovieDetails/MovieDetails';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        
        <Navbar/>
        <div className="container">

        <Switch>
          <ProtectedRoute path="/home" component={Home}/>
          <ProtectedRoute path="/movies" component={Movies}/>
          <ProtectedRoute path="/tv" component={Tv}/>
          <ProtectedRoute path="/top_rated" component={TopRated}/>
          <ProtectedRoute path="/now_playing" component={NowPlaying}/>
          <ProtectedRoute path="/popular" component={Popular}/>
          <ProtectedRoute path="/upcoming" component={Upcoming}/>
          <Route path="/moviedetails/:id" component={MovieDetails}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/notfound" component={NotFound}/>
          <Redirect from="/" exact to="/login"/>
          <Redirect to="/notfound"/>
        </Switch>
        </div>

      </Fragment>
    )
  }
}
