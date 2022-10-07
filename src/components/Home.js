import styled from "styled-components";

import React from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trendings from "./Trendings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {db} from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/users/userSlice";
import { collection, getDocs } from "firebase/firestore/lite";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  async function getData(){
    const movies=collection(db,'movies');
    const movieSnapshot=await getDocs(movies);
    movieSnapshot.docs.map((doc)=>{
      
      if(doc.data().type==='recommend'){ 
        recommends.push({
          id:doc.id,...doc.data()
        })
      }else if(doc.data().type==='new'){
        newDisneys.push({
          id:doc.id,...doc.data()
        })
      }else if(doc.data().type==='original'){
        originals.push({
          id:doc.id,...doc.data()
        })
      }else if(doc.data().type==='trending'){
        trending.push({
          id:doc.id,...doc.data()
        })
      }
    
    });
    // console.log("recommned = ",recommends)
    // console.log("new = ",newDisneys)
    // console.log("original = ",originals)
    // console.log("trending = ",trending)
    // console.log('movies = ',movieList);
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    )
  }



useEffect(()=>{
getData();

},[])
    // db.collection("movies").onSnapshot((snapshot) => {
    //   snapshot.docs.map((doc) => {
    //     console.log(recommends);
    //     switch (doc.data().type) {
    //       case "recommend":
    //         recommends = [...recommends, { id: doc.id, ...doc.data() }];
    //         break;

    //       case "new":
    //         newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
    //         break;

    //       case "original":
    //         originals = [...originals, { id: doc.id, ...doc.data() }];
    //         break;

    //       case "trending":
    //         trending = [...trending, { id: doc.id, ...doc.data() }];
    //         break;
    //     }
    //   });

    //   dispatch(
    //     setMovies({
    //       recommend: recommends,
    //       newDisney: newDisneys,
    //       original: originals,
    //       trending: trending,
    //     })
    //   );
    // });
 

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;