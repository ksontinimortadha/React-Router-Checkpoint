import MovieCard from "./MovieCard";

function MovieList({list}){
    return(
        <div className="MovieList" style={{ display: "flex", flexWrap: "wrap" , backgroundColor:'#8B0000',minHeight:'1000px'}}>{
        list.map( (ele,index)=>(
                <MovieCard key={index} ele={ele}  index={index} />
        ))
        }
        </div>
    );
}

export default MovieList;