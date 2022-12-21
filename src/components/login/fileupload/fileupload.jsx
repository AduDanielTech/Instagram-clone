import React, { useRef } from "react";

function FileInput({setAskForUsername}) {
  const fileInput = useRef(null);
  const preview = useRef(null);

  const handleFileChange = () => {
    const file = fileInput.current.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      preview.current.src = event.target.result;
      setAskForUsername(pre => {
        return {
            ...pre,
            userimg: event.target.result,
        }
      })
    };
    reader.readAsDataURL(file);
  };

  
  return (
    <div className="file-cont">
      <label for="upload-photo" className="file_field">Click to add a profile image</label>
      <input type="file" id="upload-photo" ref={fileInput} placeholder='choose a profile img' onChange={handleFileChange} className='file_field'/>
      <img ref={preview} 
      style={{
        width:'100px',
        border:'none',
      }}/>
      <br />
     
    </div>
  );
}

export default FileInput;
