import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { relativeTimeRounding } from 'moment/moment';
import React, { useState,useContext,useEffect } from 'react';
import { UserDetails,PostData , StoryData,GlobalData } from '../../useContext';
import {nanoid} from 'nanoid'


function ForwardPost() {
    const {story} = useContext(UserDetails)
    const {linkNoWork,buttonNoWork,Link} = useContext(GlobalData)
    const {
        userdatum,
        setUserdatum,
       
    } = useContext(PostData)
       
        function removeClicked(e) {
            let parentElement = e.target.parentElement.parentElement
              parentElement.remove()
        }
         function closeShare() {
            setUserdatum(pre =>{
                return{
                    ...pre,
                    showShare: false,
                }
            })
         }
      
    return ( 
        <div class={`modal-overlay share-overlay ${userdatum.showShare ? 'open-modal' : ''}`}>
        <div class="modal-container share-cont ">
       <div className="shareDivs share-header" >
        <p >Share</p>
        <button className='closee-btn' onClick={closeShare} >
        <svg aria-label="Close" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line></svg>
        </button>
       </div>
       <div className="shareDivs share-to ">
       <div className="p-header">
       to: 
       </div>
       <div className="p-contt">
      </div>
       <input type="text" placeholder='Search...'/>

       </div>
       <div className="shareDivs share-suggestions" key={nanoid()}>
         <p>Suggested</p>  
         <div className='friends'  >
         {story.map((user) =>{
     
       
     const {name:{first},
     location:{postcode,street:{number}},
     login:{uuid,username},
     picture:{large},
     registered:{age}
 } = user
 const [shareDetails , setShareDetails] = useState({
    personClicked:false,
    creteEl:false
 })
 function checkBtn() {
    let appended = document.querySelector('.p-contt')
    let personAppended = document.createElement('div')
    personAppended.className = 'person'
    personAppended.innerHTML = `          
    <div className='pc-p'>${username}</div>
     <div className="clear-btn"  onClick={removeClicked}>
    <svg aria-label="Delete Item" class="_ab6-" color="#0095f6" fill="#0095f6" height="12" role="img" viewBox="0 0 24 24" width="12"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
    </div> `
    personAppended.addEventListener('click', removeClicked )
   if (!shareDetails.creteEl) {
    appended.append(personAppended)

   }else{
    let appendee = document.querySelector('.a')
   }
       shareDetails.creteEl
       ? 
       setShareDetails(pre => {
        return {
            ...pre,
            creteEl : false,
        }
    }):
    setShareDetails(pre => {
        return {
            ...pre,
            creteEl : true,
        }
    })

    
    }

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
             
             <div className="friend"  key={nanoid()}>
            <div className="details1 " >
            <img src={large}
            className='story-img share-pfp-img' alt='pfp-img  '/>
            </div>
            <div className="details2 username"  >
               {username}
            </div>
            <div className="details3" >
                {first}
            </div>
            <div className="details4"  onClick={checkBtn}>
                {
                    shareDetails.creteEl 
                    ?
                    <svg aria-label="Toggle selection" class="_ab6-  checkmark" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5.706 9.21-6.5 6.495a1 1 0 0 1-1.414-.001l-3.5-3.503a1 1 0 1 1 1.414-1.414l2.794 2.796L16.293 8.3a1 1 0 0 1 1.414 1.415Z"></path></svg>
                    :
                <svg aria-label="Toggle selection" class="_ab6-  checkmark" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.008" cy="12" fill="none" r="11.25" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"></circle></svg> 
                }
           
            











            </div>
        </div>
      
      </StoryData.Provider>
   
   )
 })}
     
         </div>
        </div>
       <div className="send">
        <input type="text"
        placeholder='write a  message..'
         />
       <button className='send-share ' onClick={linkNoWork}>
            Send
        </button>
       </div>
        </div>
      </div>
     );
}

export default ForwardPost;