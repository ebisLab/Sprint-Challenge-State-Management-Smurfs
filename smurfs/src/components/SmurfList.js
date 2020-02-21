import React from 'react';
import Card from './Card'
import {connect} from 'react-redux' //connects react to redux


const SmurfList = (props) =>{

    return(
        <div>
            <Card />
        </div>
    )
}

const mapStateToProps = (state) =>{
  return { smurfs: state.smurfs,
    isFetching: state.isFetching,
    errors: state.errors}

}

export default connect(mapStateToProps, {})(SmurfList);