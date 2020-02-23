import React from 'react';
import {connect} from 'react-redux' //connects react to redux

import{deleteSmurfs} from '../actions'


const Card = (props) =>{
    console.log(props, "inside card")

    const deleteHandle = smurfsId =>{
        console.log('Dont stop me now')
        console.log('inside delete handle', smurfsId)
        props.deleteSmurfs(smurfsId)
    }

    console.log(props.smurfs, '<---props.smurfs')
    console.log(props.smurf, '<---1 smurf')

    return(
        <div style={{display: 'inline-flex', margin: '20px'}}>
            <div>
           <h3>{props.smurf.name}</h3> 
           <p>Age: {props.smurf.age}</p>
           <p>Height: {props.smurf.height}</p>
           </div>
            <button 
                        // onClick={removeHandle}

            onClick={ (e) => {
                e.preventDefault()
                props.deleteSmurfs(props.smurf.id) //id coming from SmurfList's map
            }}
            style={{
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

const mapStateToProps = (state) =>{
    return { 
    // smurfs: state.smurfs,
      isPosting: state.isPosting,
      isDeleting: state.isDeleting,
      errors: state.errors}
  
  }


//   export default (Card);
  export default connect(mapStateToProps, {deleteSmurfs})(Card);