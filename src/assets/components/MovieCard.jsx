import '../components/moviecard.css';
export  const MovieCard = ({ movies })=>{
      console.log(movies)
    return (
    <>
    <div className="movie-card--container">
        <h2>Match Movies With Your Mood....</h2>
    
    <div className="movie-card--wrapper">
       
     {movies.map((movie)=>
     
        <div className="movie-card--elements" key={movie.id}>
            <img src={movie.image}></img>
           <p className="movie-title">{movie.title}</p>
          <div className="movie-card--div1">
           <span className="movie-year">{movie.year}</span>
          <span className="duration">{movie.duration}</span>
          <span className="genre">{movie['genres'].map(currGenre => <span>{currGenre}</span>)}</span>
         </div>
        <p className='rating'>{movie.rating}</p>
        <p className="mood">{movie.mood}</p>
        </div>
  
    )}
     
    
    
    </div>
    </div>
    
    
    </>);
}