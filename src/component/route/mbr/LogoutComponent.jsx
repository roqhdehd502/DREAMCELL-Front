import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
                <Redirect to="/main"/>
            </>
        )
    }
}

export default LogoutComponent