import React, {useEffect,useState,useRef}from 'react';

import useSingleAndDoubleClick from './like/doubleclicked';
import MoreOptions from './moreOptions/more-options';
import CommentOverlay from './comments/coment-overlay';
import  { useContext } from "react";
import { UserDetails } from './useContext';
import { userData } from './useContext';
import Posts from './main2';
import {nanoid} from 'nanoid'
import { StoryData } from './useContext';


function Main({delay = 7000}) {
    const {users} = useContext(UserDetails)
    const {story} = useContext(UserDetails)
  




    return ( 
         <main key={nanoid()}>
   <div className="main">
      <div className="main-top main1">
        <div className="stories">
        {story.map((user) =>{
     
       
            const {name:{first},
            location:{postcode,street:{number}},
            login:{uuid,username},
            picture:{large},
            registered:{age}
        } = user
        
                /* returned each post as an article */
             return (
                 <StoryData.Provider value={{
                    first,
                    postcode,
                    number,
                    uuid,   
                    username,
                    age,
                    large
                 }}>
                    
              <div className="story">
                  <div className="line">
                      <img src={large} alt="story" className="story-img"/>
                  </div>
                  <p className="story-name">{username}</p>
              </div>
             
             </StoryData.Provider>
          
          )
        })}
         
        </div>
      </div>
            <div className="main-bottom ">









          {/* mapped through the api */}
        {users.map((user) =>{
       
        let articles = document.querySelectorAll('.post')
        const root = document.querySelector('.root')

        function clickedArticle(e) {
        let returnedArt =  articles.forEach((article) =>{
            const likebtn =  article.querySelector('.like-logo')
            root.addEventListener('DomContentLoaded' , () =>{
                likebtn.addEventListener('click', )
            })
        })
         return returnedArt
        } 
            const {name:{first},
            location:{postcode,street:{number}},
            login:{uuid,username},
            picture:{large},
            registered:{age}
        } = user
        
                /* returned each post as an article */
             return (
                 <userData.Provider value={{
                    first,
                    postcode,
                    number,
                    uuid,
                    username,
                    age,
                    large
                 }}>
                <Posts/>
             </userData.Provider>
          
                )
            })}



























           
      </div>
   </div>
  </main>
     );
}

export default Main;