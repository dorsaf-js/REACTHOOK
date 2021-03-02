import React, { useSate, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import {movieslist} from './assets/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie  from './components/AddMovie';
import {BrowserRouter, Route} from 'react-router-dom'
import Description from './components/Description';

function App() {
    const [movieList, setMovieList] = useState(movieslist)
    const addmovie=(title,poterUrl,description,rate)=>{
      setMovieList([...movieList,{title:title,poterUrl:poterUrl,description:description,rate:rate}])
    }
    return (
    <div className="container-fluid">
      <BrowserRouter>
     <Route exact path='/' render={(props)=><MovieList movieList={movieList} {...props} />} />
     <Route exact path='/' render={(props)=><AddMovie addmovie={addmovie } {...props} />} />
     <Route exact path='/description/:title' render={(props)=><Description movieList={movieList } {...props} />} />
     </BrowserRouter>
    </div>
  );
}

export default App;
