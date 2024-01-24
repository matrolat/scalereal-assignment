import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../../Components/HomeComponents/MovieList";
import MovieDescription from "../../Components/HomeComponents/MovieDescription";
import { getMovieData } from "../../Services/Api";
import { AltRoute, Movie } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "89.5vh",
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column",
      width:"100vw",
      overflow:"scroll",
      height:"auto"
    },
  },
  left: {
    width: "50%",
    height: "100%",
    border: 0,
    borderRight: "solid 1px rgb(208, 215, 222)",
    zIndex:1,
    [theme.breakpoints.down('sm')]: {
      width:"100vw",
      marginBottom:30
    },
  },
  right: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
      width:"100vw",
      height:"50vh"
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [movieData, SetMovieData] = useState([]);
  const [MovieDescId, SetMovieDescId] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [sortParam, setSortParam] = React.useState('');


  const handleSort = (event) => {
    const selectedSortParam = event.target.value;
    setSortParam(selectedSortParam);
    if(event.target.value==="")
    {
          const filteredMovies = movieData.filter((movie) =>           
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovie(filteredMovies);
        
    }
    else{

        console.log(selectedSortParam);
      
        setSortParam(selectedSortParam);
    
        const sortedMovies = sortingHelper(selectedSortParam);
        
        console.log("after");
        console.log(sortedMovies);
        setFilteredMovie(sortedMovies);
    }
  };

  const sortingHelper=(selectedSortParam)=>{
    return [...filteredMovie].sort((a, b) => {
      if (selectedSortParam === 'release_date') {
        return new Date(a.release_date) - new Date(b.release_date);
      } else if (selectedSortParam === 'episode_id') {
        return a.episode_id - b.episode_id;
      }
      return 0;
    });
  }
  
  const handleFilter = async(e) => {
    setSortParam("");
    setSearchTerm(e.target.value);
    if(e.target.value==="")
    {
      setFilteredMovie(movieData)
    }
    else{
        const filteredMovies = movieData.filter((movie) =>
        
          movie.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredMovie(filteredMovies);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const res = await getMovieData();

      const updatedMovieData = [...res.data.results];
      SetMovieData(updatedMovieData);
        setSearchTerm("");
        setSortParam("");
        SetMovieDescId(-1);
      
        setFilteredMovie(updatedMovieData);
      
      console.log(updatedMovieData);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };




  const handleMovieDetails =(key)=>{
    SetMovieDescId(key);
  }

  return (
    <div>
      <Navbar handleFilter={handleFilter} searchTerm={searchTerm} handleSort={handleSort} sortParam={sortParam} />
      <div className={classes.container}>
        <div className={classes.left}>
          {filteredMovie &&
            filteredMovie.map((data, index) => {
              return <MovieList id={index} data={data} onClickMovie={handleMovieDetails} selected={data.episode_id===MovieDescId}/>;
            })}
        </div>
        <div className={classes.right}>
          
          {
            MovieDescId!==-1 ? <MovieDescription data={movieData} episodeId={MovieDescId}/> : "No movie selected"
          }
          
          </div>
      </div>
    </div>
  );
}
