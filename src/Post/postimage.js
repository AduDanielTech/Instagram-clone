import React, { useState } from 'react';
import DropFileInput from './dragAndDrop/component/DragandDropinput'
import './dragAndDrop/App.css'
function PostImg({postImg,setpostimg}) {
    const[ postStates, setPostStates] = useState({
        nextClicked: false,
        commentAdded: '',
        fileDropped: false,
        commentAdded:false
    })
    function ExitMoreOptions() {
        setpostimg(false)
    }
    function nextpage() {
      setPostStates((pre => {
        return {
          ...pre,
          nextClicked: true,
        }
      }))
    }
    function prevpage() {
      setPostStates((pre => {
        return {
          ...pre,
          nextClicked: false,
        }
      }))
    }
 const onFileChange = files => {
   
  }
    return ( 
        <div class={`modal-overlay set-post-overlay ${
            postImg ?   'open-modal' : ''
           }`}>
           <div class="modal-container post-cont">
               <div className="setpost-header">
                <strong> Create new post</strong>
               </div>
              {
                postStates.nextClicked
                ?
              <div className="addacomment">
                <strong> Add a comment</strong>
                <input type="text" 

                value={postStates.commentAdded}
                onChange={e => setPostStates(pre => {
                  return{
                    ...pre,
                    commentAdded: e.target.value,
                  }
                })}
                 />
                  <button className='setpost-button' onClick={prevpage}>
                  back
                </button>
                 <button className='setpost-button' onClick={ExitMoreOptions}>
              Post image
               </button><br/>
           <strong>Note: </strong>Clicking this doesn't do anything
               
              </div>
                :
                <DropFileInput nextpage={nextpage}
                postStates={postStates}
                setPostStates={setPostStates}
                onFileChange={(files) => onFileChange(files)}
               />
              }
      
           </div>
           <button className='back-btn' onClick={ExitMoreOptions}>
           <svg aria-label="Close" class="x1lliihq x1n2onr6" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
           </button>
         </div>
     );
}
        
export default PostImg;