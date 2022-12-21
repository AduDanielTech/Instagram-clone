import React, {useEffect,useState,useRef}from 'react';

import useSingleAndDoubleClick from './like/doubleclicked';
import MoreOptions from './moreOptions/more-options';
import CommentOverlay from './comments/coment-overlay';
import  { useContext } from "react";
import { UserDetails,GlobalData } from './useContext';
import { userData } from './useContext';
import { nanoid } from 'nanoid';
import Posts from './main2';

import { StoryData } from './useContext';
import './main.css'

function Main({delay = 7000}) {
    const {users} = useContext(UserDetails)
    const {story} = useContext(UserDetails)
    const {desktopView,askforusername,linkNoWork,buttonNoWork,} = useContext(GlobalData)
  




    return ( 
        <div className="main">
         <main key={nanoid()}>
           
      <div className="main-top main1"  key={nanoid()}>
        <div className="stories"  key={nanoid()}>
        {story.map((user) =>{
     
       
            const {name:{first},
            location:{postcode,street:{number}},
            login:{uuid,username},
            picture:{large},
            registered:{age}
        } = user
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
                    
              <div className="story" onClick={linkNoWork}  key={nanoid()}>
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
       </main>
        {
            desktopView
            ?
            <>
            <div className="space"></div>
            <div className='suggestions-for-you-cont'>
               <div className="suggestions-for-you">
               <div className="suggestion-for-you-divs">
            <div className="suggestion-for-you-header">
                    <div className="">
                    <img src={askforusername.userimg} alt="pfp" className="story-img post-profile-search large-screen-pfp"/>
                    </div>
                    <div className="">
                        <div className="userprofiledetails-texts">{askforusername.username}</div>
                        <div className="userprofiledetails-texts">{askforusername.othername}</div>
                    </div>
            </div>
            <div className="suggestion-for-you-header hovered" onClick={linkNoWork}>
            Switch  
            </div>
           </div>
           <div className="suggestion-for-you-divs ">
            <div>
                <div >
                    suggestions for you
                </div>
                <div  className='hovered' onClick={linkNoWork}>
                    see all
                </div>
            </div>
            <div>
        <div className="follow-suggest-div">
             <div className="suggestion-for-you-header follow-suggest">
                                <div className="" onClick={linkNoWork}>
                                <img src="https://deadline.com/wp-content/uploads/2022/09/jenna-ortega-e1663611583425.jpg?w=1024" alt="pfp" className="story-img post-profile-search suggest-large-screen-pfp"/>
                                </div>
                                <div className=".hovered">
                                    <div className="userprofiledetails-texts">jenna_ortega</div>
                                    <div className="userprofiledetails-texts">follows you</div>
                                </div>
                        </div>
                        <div className='hovered'>
                            Follow
                        </div>
        </div>
       </div>
           </div>
           <div className="suggestion-for-you-divs">
            <div className="links" onClick={linkNoWork}>
                 <a href="http://">About</a>
                 <a href="http://">Help</a>
                 <a href="http://">Press</a>
                 <a href="http://">API</a>
                 <a href="http://">Jobs</a>
                 <a href="http://">Privacy</a>
                 <a href="http://">Location</a>
                 <a href="http://">Terms</a>
                 <a href="http://">Language</a>
            </div>
            <div className="suggest-footer">
            © 2022 INSTAGRAM CLONE FROM ADU DANIEL
                </div>
           </div>
               </div></div></>
            :
            <></>
        }
           </div>
 
     );
}

export default Main;