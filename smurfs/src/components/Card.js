import React from 'react';

const Card = (props) =>{

    return(
        <div style={{display: 'inline-flex', margin: '20px'}}>
            <div>
           <h3>{props.smurf.name}</h3> 
           <p>Age: {props.smurf.age}</p>
           <p>Height: {props.smurf.height}</p>
           </div>
            <button style={{
                    background: 'red',
                    borderRadius: '50%',
                    height: '25px',
                    width: '25px',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer'
            }}>X</button>
        </div>
    )
}

export default Card;