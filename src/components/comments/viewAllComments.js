import React, {useEffect,useState,useRef,useContext}from 'react';
import { userData , UserDetails,PostData ,StoryData} from '../useContext';
import Daata from './commentsData';




function ViewAllComments() {
    const {story} = useContext(UserDetails)
    const { username} = useContext(userData)
    const {
        userdatum,
        setUserdatum,
    } = useContext(PostData)
    const {comments} = useContext(UserDetails)

    function DontShowComments() {
        setUserdatum(pre =>{
            return{
                ...pre,
                showComments: false,
            }
        })
     }


    
    return ( 
        <div class={`modal-overlay postComments-overlay ${userdatum.showComments ? 'open-modal' : ''}`}>
        <div class="modal-container comment-cont " style={{position:'relative'}}>
        
       <div className="commentDiv share-header" style={{position:'fixed',backgroundColor:'white'}}>
        <p >Comments</p>
        <button className='closee-btn com'  >
        <svg aria-label="Close" onClick={DontShowComments} class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line></svg>
        </button>
       </div>
      
       <div className=" comments-suggestions" style={{paddingTop:'2rem'}}>
        
        {story.map(datum => {
              const {name:{first},
              location:{postcode,street:{number}},
              login:{uuid,username},
              picture:{large},
              registered:{age}
          } = datum
             const [Data, setData] = useState({
                comment: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, neque magnam illum vitae aperiam iure? Reiciendis velit adipi`,
                profilepic:large,
                username:username,
               })
               return(
                <div className="commen">
                
            <img src={Data.profilepic} alt="img" className='story-img comment-pfp-img' />
           <div className="com-username">{Data.username}</div>
           <p className="comment">{Data.comment}</p>
               
           </div>
               )

             
        })}
      

        </div>
        </div>
       
      </div>
     );
}

export default ViewAllComments;