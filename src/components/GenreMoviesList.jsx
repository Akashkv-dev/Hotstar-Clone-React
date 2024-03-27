import GenresList from "../constants/genresList"
import MoiveList from "./MovieList"

const GenreMovieList =()=>{
    return (
        <div>
            {GenresList.genere.map((item,index)=>index<=4&&(
                <div className="p-8 px-8 md:px-16" key={item.id}>
                    <h2 className="text-[20px] text-white 
                    font-bold">{item.name}</h2>
                    <MoiveList />
                </div>
            ))}
        </div>
    )
}

export default GenreMovieList