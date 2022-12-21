import React, { useRef,useContext } from "react";
import { GlobalData } from "../../components/useContext";
function FileUpdate() {
  const {setAskForUsername} = useContext(GlobalData)
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
    <div>
      <input type="file" ref={fileInput} onChange={handleFileChange} />
      <br />
      <img ref={preview} 
      style={{
        width:'100px',
        aspectRatio:'1',
      }}/>
      <br />
     
    </div>
  );
}

export default FileUpdate;
