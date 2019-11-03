import React, { Component } from 'react';

class First extends Component {
    render() {
        return (
            <div>
                <div>Router First</div>
                <button onClick={()=>{
                    this.props.history.push('/');
                }}>跳转首页</button>
            </div>
        );
    }
}

export default First;