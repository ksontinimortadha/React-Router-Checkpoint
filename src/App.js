import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from "./Components/AddMovie";
import "./app.css";
import MovieList from './Components/MovieList';
import Filtring from './Components/Filtring';
import Description from './Components/Description';
import 'bootstrap/dist/css/bootstrap.min.css';

const info = [
  { 
    title: 'Inception',
      description: '2010 - Sci-fi/Action',
      img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 7.5,
      trailer: 'https://www.youtube.com/embed/8hP9D6kZseM',
  },
  { 
    title: 'Interstellar',
      description: '2013 - Sci-fi/Adventure',
      img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      rating: 8,
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E?si=qiXrSBS8l1rWYzQr',
  },
  { 
    title: 'Oppenheimer',
      description: '2023 - Thriller/Thriller',
      img: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
      rating: 8.5,
      trailer: 'https://www.youtube.com/embed/uYPbbksJxIg?si=5KVzw1Yyov7dAB7Y'
  },
  { 
    title: 'The Godfather',
      description: '1972 - Crime/Mystery',
      img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      rating: 9,
      trailer: 'https://www.youtube.com/embed/UaVTIH8mujA?si=2kIXXUT5eMvo8eVR',
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filteredList, setFilteredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.trailer) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    
    setFilteredList(
      list.filter((element) =>
        element.title.toLowerCase().includes(key.toLowerCase()) &&
        (!rate  || element.rating === rate)
      )
    );
  }
  

  useEffect(()=>{ filter(keyword,rate); }, [list]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filtring filter={filter} />
                <MovieList list={filteredList} />
                <AddMovie adding={adding} />
              </>
            }
          />
          <Route path="/:id" element={<Description list={list} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
