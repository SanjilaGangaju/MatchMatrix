
export  const MovieCard = ({ movies })=>{
    
    return (
    <>
    <div className="movie-card">
     <h2>MovieCard</h2>
     <img src=""></img>
    <p className="movie-title">MovieTitle</p>
     <div className="movie-card--div1">
        <span className="movie-year">2000</span>
        <span className="duration">111</span>
        <span className="genre">Action</span>
     </div>
     <p className='rating'>three stars</p>
     <p className="description">thisis a movie</p>
    
    </div>
    
    </>);
}