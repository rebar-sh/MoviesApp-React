import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Movie } from './components/Movie';
import SearchBox from './components/SearchBox';
import HeadingList from './components/HeadingList';
import AddToWishList from './components/AddToWishList';
import DeleteFromWishList from './components/DeleteFromWishList';

function App() {

const [movies, setMovies] = useState([]);
const [searchInput, setSearchInput] = useState('');
const [wishes, setWishes] = useState([]);

//Request to getting data
const getMoveisFromApi = async (searchInput) =>{
  const url  =`http://www.omdbapi.com/?s=${searchInput} wars&apikey=6f25c795`;
  const res = await fetch(url);
  const resJson = await res.json(); 
  if (resJson.Search) {
      setMovies(resJson.Search);
  }
}

useEffect(()=>{
getMoveisFromApi(searchInput);
},[searchInput]);

// useEffect for local storage
useEffect(()=>{
const wishlisMovies = JSON.parse(localStorage.getItem('react-wishList-movies'));
setWishes(wishlisMovies);
},[]);

//  ADD TO LOCAL STORAGE
const addToLocalStorage = (items) =>{
localStorage.setItem('react-wishList-movies',JSON.stringify(items));
}

// ADD MOVIE TO WISH LIST
const addWishMovie = (movies) =>{
const newWishesList = [...wishes, movies];
setWishes(newWishesList);
addToLocalStorage(newWishesList);
}


// DELETE MOVIE FROM WISH LIST
const deleteMoviefromWishList = (movies) =>{
  const newWishesList = wishes.filter(
    (wishes) => wishes.imdbID !== movies.imdbID
  );
  setWishes(newWishesList);
  addToLocalStorage(newWishesList);
}


  return (

  <div className="container-fluid movie-app">


      <div className="row d-flex align-items-center mt-4 mb-4 fixed">
        <HeadingList heading='Movies'/>
        <SearchBox searchInput={searchInput} setSearchValue={setSearchInput}/>
      </div>

      <div className="row"> 
      <Movie 
      movies={movies} 
      wishcomponent={AddToWishList}
      handleWishClick={addWishMovie}
      />
     </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <HeadingList heading='Favourite Movies.. '/>
      </div>

      <div className="row"> 
        <Movie 
        movies={wishes} 
        wishcomponent={DeleteFromWishList}
        handleWishClick={deleteMoviefromWishList}
        />
     </div>

  </div>

  );
}

export default App;
