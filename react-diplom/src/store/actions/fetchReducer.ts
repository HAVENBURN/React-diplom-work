import { store } from "../..";
import { filmsCardsInt } from "../../interfases";
import filmIdFinder from "../../pages/activeFilmCard/idFinder";
import apiSearchFilms from "../../pages/header/filmsSearch";

export const getFilmsCards = (films: filmsCardsInt[])=>({
  type: 'SHOW_FILM_CARDS',
  payload: films
})


export const featchFilmsCards = (tenFilms1:string) => async (dispatch: typeof store.dispatch)=>{
  let localStorageMasivLeight = localStorage.getItem('massLenght')
  const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'KZQBXH4-DRJ4JMQ-P29RH66-FYG0S14'}
  };  

  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms1||localStorageMasivLeight}`,options);
        
  const data = await response.json();

  console.log('я ответ с сервера',data.docs);
  
  dispatch(getFilmsCards(data.docs))     
}


export const getTrendsFilmsCards = (hiRaitingFilms: filmsCardsInt[])=>({
  type: 'SHOW_TRENDS_FILM_CARDS',
  payload: hiRaitingFilms
})


export const featchHightRaitingFilms = (tenFilms:string) => async (dispatch: typeof store.dispatch)=>{
  const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'KZQBXH4-DRJ4JMQ-P29RH66-FYG0S14'}
  }; 

  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${tenFilms}&rating.imdb=9-10`,options);
      
  const data = await response.json();
    
  dispatch(getTrendsFilmsCards(data.docs)); 
}


export const showSearchPost=(post:filmsCardsInt[])=>({
  type:'SEARCH_POST',
  payload: post
})

export const searchPosts = (searchText:string) => async(dispatch: typeof store.dispatch)=>{
  const data = await apiSearchFilms(searchText);
  dispatch(showSearchPost(data))
}


export const showFilmOnId=(post:filmsCardsInt[])=>({
  type:'SEARCH_FILIM_ID',
  payload: post
})

export const searchFilmId = (id:string) => async(dispatch: typeof store.dispatch)=>{
  const data = await filmIdFinder(id);
  dispatch(showFilmOnId(data))
}

