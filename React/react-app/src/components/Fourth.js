import React, { Component } from 'react';
import Store from '../store';
import {Add,Reduce} from '../action'
import {connect} from 'react-redux'
class Fourth extends Component {
    render() {
        return (
            <div>
                <div>Router-Fourth</div>
                <h1>{this.props.state}</h1>
                <button onClick={()=>{
                    Store.dispatch(Add(2));
                }}>click+1</button>
                <button onClick={()=>{
                    Store.dispatch(Reduce(2));
                }}>click-1</button>
            </div>
        );
    }
}
let mapStateToProps=(state)=>({
    num:state.num1
})
export default connect(mapStateToProps)(Fourth);