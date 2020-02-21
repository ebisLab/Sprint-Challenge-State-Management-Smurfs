import React, {useState} from 'react';
import {connect} from 'react-redux' //connects react to redux

import{postSmurfs} from '../actions'


const Form = (props) => {
    const [smurf, setSmurf] =useState({
        name: '',
    age: '',
    height: '',
    })

    const changeHandler = e =>{
        console.log(e.target.value)
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log('submitted', smurf)
        // setSmurf(smurf)
        props.postSmurfs(smurf)
    }

    return(
        <div>
<form onSubmit={submitHandler}>
<label htmlFor="name">Name</label>
<input 
placeholder="Name"
type="text"
name="name"
label="name"
value={props.name}
onChange={changeHandler}
/>
<label htmlFor="name">Age</label>
<input 
placeholder="Age"
type="text"
name="age"
label="age"
value={props.age}
onChange={changeHandler}
/>
<label htmlFor="name">Height</label>
<input 
placeholder="Height"
type="text"
name="height"
label="height"
value={props.height}
onChange={changeHandler}
/>
<button>Submit</button>

</form>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return { 
    smurfs: state.smurfs,
      isPosting: state.isPosting,
      errors: state.errors}
  
  }
  
  export default connect(mapStateToProps, {postSmurfs})(Form);