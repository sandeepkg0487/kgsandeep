import React from "react";
import "./Contact.scss";

const Contact = () => {
    const formcontroll = (event) => {
      
    }
    const submitMsg =(event) => {
      
    }
    
    
  return (
    <div className="main-container">
      <div className="left-container mg-25">
        <div className="form-container mg-25">
              <form action="">
                <div className="input-wrap">
                    <input type="text" placeholder="Enter Name" onChange={formcontroll}  />
                </div>
                <div className="input-wrap">
                <input type="text" placeholder="Enter Name" onChange={formcontroll}  />
                </div>
             <div class="custom-text-area">
              <textarea rows="10" cols="40" placeholder="Enter your text here..."></textarea>
            </div>
             <button onClick={submitMsg}>Submit</button>
        </form>
        </div>
        
      
       
      </div>
      <div className="right-container">
        <div className="contact-img-container">
        <img src="./image/contact.png" alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
