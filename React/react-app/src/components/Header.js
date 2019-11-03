import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.go(-1);
                }}>&lt;</button>
                <h2>首页</h2>
            </div>
        );
    }
}

export default withRouter(Header);