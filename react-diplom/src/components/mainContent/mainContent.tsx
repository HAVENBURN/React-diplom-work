import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../filmCard/filmCard"
import  styleMainContent  from "./mainContent.module.css";
import { featchFilmsCards } from "../../store/actions/fetchReducer";
import { useEffect } from "react";
import { InitialStateInt, filmsCardsInt, filmsCardsProps } from "../../interfases";

const MainContent =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(featchFilmsCards() as any)},[]);
    // const films = useSelector((state:InitialStateInt)=>state.filmCards); 
    const films = useSelector((state:InitialStateInt)=>state.filmsCard); 
    
    return(
        <div className={styleMainContent.MainContentLayout}>
            {/* кинопоиск */}
            {/* {films.map((item)=><FilmCard id={item.id} votes={item.votes.imdb} filmser={item.filmser.url} description={item.description} geners={'dramma'} filmName={item.name} />)} */}
            
            {/* OMDb API */}
            {films ? films.length && films.map((item)=><FilmCard Year={item.Year} Poster={item.Poster} Title={item.Title} Type={item.Type} imdbID={item.imdbID} favorite={false}/>):null}
        </div>
    )
}

export default MainContent