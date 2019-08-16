import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner' 
import Smurfs from './Smurfs'

//get the list connected to the redux store.

const List = props => {
    return (<>
    <h1>Look at these Smurfs</h1>
    <h1>{props.test}
    </h1>
    <button onClick={props.test}>
        {props.isLoading ?
        <Loader
        type="Puff"
        color="#00BFFF"
        height="100"
        width="100" /> : 'Get info'
        }
        </button>
        {props.webcams && props.chars.map(info => (
            <Smurfs key={info.name} char={info} />
        ))}
    
    </>
    )}

//connecting to the redux store
const mapStateToProps = state => {
    return {
        test: state.test
    };
  } ;
  

export default connect(mapStateToProps,{})(List);