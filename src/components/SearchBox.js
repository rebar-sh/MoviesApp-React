import React from 'react';

const SearchBox = (props) => {
  return (

      <div className='col-md-6 col-sm-12'>
         <input className='form-control' placeholder='Search for your movie..' value={props.value} onChange ={(event)=> props.setSearchValue(event.target.value)}/>
      </div>
   
  )
}
export default SearchBox;
