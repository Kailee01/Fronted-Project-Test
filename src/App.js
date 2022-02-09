import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from "axios";
import ShowDetails from "./components/ShowDetails";
const API_BASE_URL = "https://www.omdbapi.com";

// &apikey=aa660442
function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isPossible, setIsPossible] = useState(true);

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=ae85ff77"
      );

      if (response.data.Response === "False") {
        setIsPossible(false);
      }
      // console.log(response);
      console.log(response.data.Response);
      setMovies(response.data.Search);
      setIsLoading(false);
      // console.log(response.data.Search);
    }
  };

  if (isPossible === false)
    return (
      <h2 className="No-movie">
        {" "}
        Sorry No Move Found <br></br>
        Please Referesh
      </h2>
    );

  return (
    <>
      <Navbar
        search={search}
        setInputValue={setInputValue}
        setIsLoading={setIsLoading}
      />
      <ShowDetails
        movies={movies}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default App;

/*
Project documentation-

Folder Structure:
I used the same folder structure as the project template.
Components folder is for all the components that i am going to use for the project so I can fix bugs easily and understand the Code Flow.
Navbar component is mainlyu for the search bar where user can enter the movie.
ShowDetails  and movieCard component  is for Movie Details that would Rendered in the UI.
Styles Folder is for the css styling of the project.
App.js is the main file where the project starts.



Project Working:
1. This project is a movie search app Build using React.
2. I have used OMDB API to fetch the data.
3. React Hooks is used to store the state of the data that is Fetched from the API.
        a. inputvalue is used to store the value of the input field. that is entered by the user in search  bar.
        b. isLoading is used to show the loading gif while the data is being fetched from the API.
        c. movies is used to store the data fetched from the API.
4. search function is used to fetch the data from the API which is called when the user presses the enter key.
5. setInputValue is used to store the value of the input field which is initialised with empty string.
6. when the user enters the value in the search bar the value is stored in the inputValue state and the search function is called where 
the data is fetched from the API and isLoaded is set to true and the movies state is set to the data fetched from the API.
7. when I called component ShowDetails I passed the movies state to the ShowDetails component where
I Itereated over the movies state and rendered the MovieCard component for each movie.





*/
