import React from 'react';
function MoreOptions({ExitMoreOptions}) {
    return ( 
        <div class="modal-overlay more-overlay">
        <div class="modal-container">
        <div class="moreO-div Alert">Report</div>
          <div class="moreO-div Alert">Unfollow</div>
          <div class="moreO-div">Add to favorites</div>
          <div class="moreO-div">Got to post</div>
          <div class="moreO-div">Share to...</div>
          <div class="moreO-div">Copy link</div>
          <div class="moreO-div">Embed</div>
          <div class="moreO-div ex">Cancel</div>
        </div>
        <button className='close-btn' onClick={ExitMoreOptions}></button>
      </div>
     );
}

export default MoreOptions;