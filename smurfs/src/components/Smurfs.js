import React from 'react';


//get the list connected to the redux store.

const Smurfs = props => {
    console.log('smurfs', props.char.name)
    return (<>
    <h1>{props.char.name}</h1>
    </>
    )}

export default (Smurfs);