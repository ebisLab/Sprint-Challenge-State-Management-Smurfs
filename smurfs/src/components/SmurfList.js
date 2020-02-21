import React, {useEffect} from 'react';
import Card from './Card'
import {connect} from 'react-redux' //connects react to redux

import {fetchSmurfs} from '../actions'
const SmurfList = (props) =>{
    console.log(props, 'from smurf list')

    useEffect(() => {
       props.fetchSmurfs()
        
    }, [])

    return(
        <div>
            {props.smurfs.map(smurf => (
            <Card key={smurf.id} smurf={smurf} />
            ))}
            {/* <Card /> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
  return { smurfs: state.smurfs,
    isFetching: state.isFetching,
    errors: state.errors}

}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);