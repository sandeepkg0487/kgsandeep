import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../Image/Linkedin.png"


const Left = () => {
  const downloadCV = (event) => {
   
     
      const fileURL = 'https://drive.usercontent.google.com/download?id=1ipe82iq3XXkd9JYBhOJk2Mb28i5tcdv5&export=download&authuser=0&confirm=t&uuid=58f155b5-e0c4-4e25-82ec-c1d74099f131&at=APZUnTW7SXqz0D_-3w_Oxy1qU_4j:1697619719610'; // Replace with the actual file URL
  
      // Create an invisible link element
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = 'dow.png'; // Set the filename for the downloaded file
  
     
      link.click();
   
  };

  return (
    <div className="bigfont">
      <h1>Hi There</h1>

      <h1>
        I'm <span>Sandeep K G</span>
      </h1>
      <h3>React js Developer</h3>
      
      <button onClick={downloadCV} className="button"><span>download CV </span></button>
      <br />
      <div className="icon-pack">
      <Link to="https://www.linkedin.com/in/kgsandeep/" target="_blank" rel="noopener noreferrer" >
        <div className="icon-image">
        
           <img  className="icon" src={linkedin}  alt="linked in" />
    
         
        </div>
        </Link>
        <div className="icon-image">
          <img className="icon" src={linkedin} alt="linked in" />
        </div>
        
        
       
      </div>
    </div>
  );
};

export default Left;
