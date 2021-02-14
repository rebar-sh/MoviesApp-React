import React, { Fragment } from 'react';

export const Movie = (props) => {
  const WishComponent = props.wishcomponent;
  return (
    <Fragment>
       {props.movies.map((movie, index)=>
          <div  key={index} className="image-container d-flex justify-content-start m-2 shadow-box-style ">
              <div onClick={()=> props.handleWishClick(movie)} className="overlay-top d-flex align-items-center justify-content-center">
                <WishComponent/>
              </div>
              <img src={movie.Poster} alt="Movie" className=""></img>
              <div className="overlay d-flex align-items-center justify-content-center">
                 <p>{movie.Title} - {movie.Year}</p>
                 
              </div>
          </div>
       )}
    </Fragment>
  )
}
