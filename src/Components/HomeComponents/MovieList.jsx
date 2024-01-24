import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

   
    container:{
        height:60,
      display:"flex",
      alignItems:"center",
      width:"100%",
        // backgroundColor:"red",
        borderBottom: 'solid 1px rgb(208, 215, 222)',
        cursor:"pointer",
        zIndex:1,
    
        

    },
    episode_no:{
        width:"20%",
        color:"gray",
        border:0,
        [theme.breakpoints.down('sm')]: {
          // backgroundColor:"red",
          fontSize:14
        },
    },
    episode_title:{
        width:"65%",
        fontSize:16,
        fontWeight:"500",
        textAlign:"left",
        // paddingLeft:20,
        background:"",
        [theme.breakpoints.down('sm')]: {
          // backgroundColor:"red",
          fontWeight:"500",
          fontSize:14
        },

        // height:"100%",
        // border:0,
        // borderRight: 'solid 1px rgb(208, 215, 222)',
    },
    episode_date:{

      [theme.breakpoints.down('sm')]: {
        // backgroundColor:"red",

        fontSize:14
      },
        // width:"10%",
        // height:"100%",
    
    }
  
  }));


export default function MovieList({ data, onClickMovie, id,selected  }) {
    const classes = useStyles();
  return (
    <div className={classes.container} onClick={()=>{onClickMovie(data.episode_id)}} style={{background:selected?"rgb(246, 248, 260)":""}} >
        <div className={classes.episode_no}>Episode {data.episode_id}</div>
        <div className={classes.episode_title}>Episode {data.episode_id}: {data.title}</div>
        <div className={classes.episode_date}>{data.release_date}</div>
    </div>
  )
}
