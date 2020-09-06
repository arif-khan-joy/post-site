import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Coment.css'

const Coment = (props) => {
    const title=props.post
    
   
    

    

    return (
           <div className="coment">
               <h3><strong>Name</strong> : {title.name}</h3>
               <h4>E-mail : {title.email}</h4>
                <p><strong>Coment</strong> : {title.body}</p>
        </div>
       
    );
};

export default Coment;