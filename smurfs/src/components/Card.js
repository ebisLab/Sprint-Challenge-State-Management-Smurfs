import React from 'react';

const Card = (props) =>{
console.log('inside card', props)
    return(
        <div>

            <h2>Hello from Smurf Card</h2>
            {props.smurf.name}
        </div>
    )
}

export default Card;