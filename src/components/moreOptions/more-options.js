import React ,{useContext}from 'react';
import { PostData } from '../useContext';

function MoreOptions() {
  const {userdatum,setUserdatum,ExitMoreOptions} = useContext(PostData)
    return ( 
        <div class={`modal-overlay more-overlay ${
          userdatum.moreOptions ? ' open-modal': ''
        }`}>
        <div class="modal-container">
        <div class="moreO-div Alert">Report</div>
          <div class="moreO-div Alert">Unfollow</div>
          <div class="moreO-div">Add to favorites</div>
          <div class="moreO-div">Got to post</div>
          <div class="moreO-div">Share to...</div>
          <div class="moreO-div">Copy link</div>
          <div class="moreO-div">Embed</div>
          <div class="moreO-div ex" onClick={ExitMoreOptions}>Cancel</div>
        </div>
        <button className='close-btn' onClick={ExitMoreOptions}></button>
      </div>
     );
}

export default MoreOptions;