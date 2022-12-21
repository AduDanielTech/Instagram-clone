import React ,{useContext}from 'react';
  import { GlobalData } from '../../../components/useContext';

function ExploreMoreOptions({ExitMoreOptions,state}) {
  const {linkNoWork,buttonNoWork,Link} = useContext(GlobalData)
    return ( 
        <div class={`modal-overlay more-overlay ${
          state.moreOptions ? ' open-modal': ''
        }`}>
        <div class="modal-container">
        <div onClick={linkNoWork} class="moreO-div Alert">Report</div>
          <div onClick={linkNoWork} class="moreO-div Alert">Unfollow</div>
          <div onClick={linkNoWork} class="moreO-div">Add to favorites</div>
          <div onClick={linkNoWork} class="moreO-div">Got to post</div>
          <div onClick={linkNoWork} class="moreO-div">Share to...</div>
          <div onClick={linkNoWork} class="moreO-div">Copy link</div>
          <div onClick={linkNoWork} class="moreO-div">Embed</div>
          <div class="moreO-div ex" onClick={ExitMoreOptions}>Cancel</div>
        </div>
        <button className='close-btn' onClick={ExitMoreOptions}></button>
      </div>
     );
}

export default ExploreMoreOptions;