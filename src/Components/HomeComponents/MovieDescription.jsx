import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({

   
    container:{
       height:"100%",
       width:"100%",
       paddingLeft:40,
       paddingRight:40,
       background:"",
       display:"flex",
       flexDirection:"column",
       alignItems:"flex-start",
       textAlign:"left",
       [theme.breakpoints.down('sm')]: {
    
        height:"auto",
      },
    },
    descp:{

    }
    
  
  }));


export default function MovieDescription({data,episodeId}) {
    const classes = useStyles();

    const [movieData,setMovieData] = useState({episodeId:"",title:"",opening_crawl:"",director:""});

    useEffect(() => {
      
      filterDetails();

    }, [episodeId]);
    

    const filterDetails = () => {
      if (data && episodeId) {
        const filteredMovie = data.filter((movie) => movie.episode_id === episodeId);
        setMovieData(filteredMovie[0]); // Assuming there is only one movie with the provided episodeId
      }
    };
  


  return (
    <div className={classes.container}>
       
       <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' },color:"black",marginTop:3,fontWeight:400, }}
          >
            Episode {movieData.episode_id}: {movieData.title}
          </Typography>

          <p className={classes.descp}>
           {
            movieData.opening_crawl
           }
           
           </p>
          <p className={classes.descp}>
            Directed By : {movieData.director}
          </p>

    </div>
  )
}
