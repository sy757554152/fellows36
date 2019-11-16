import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'

class Jump extends Component {
    render() {
        return (
            <Route path={this.props.to} children={({match})=>{
                return(
                    <div>
                        <Link to={this.props.to}>{match && "<"}{this.props.children}</Link>
                    </div>
                )
            }}>
            </Route>
        );
    }
}

export default Jump;