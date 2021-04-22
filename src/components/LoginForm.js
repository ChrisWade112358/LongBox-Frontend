import React from 'react;'
import { connect } from 'react-redux';


const LoginForm = () => {
    state = {
        email: '',
        password: '',
    }

    const handleChange = event => {
        const { name, value } =  event.target;
        this.setState({[name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();


    }
    return(
        <div className="login">
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <input id="email-login-input" type="text" name="email" value="this.state.email" placeholder="email@email.com" />
                <password id="password-login-input" type="password" value="this.state.password" placeholder="password" />
                <button id="login-btn" class="btn-default">Log in</button>
            </form>
        </div>
    )
}

export default connect(null, )(LoginForm)
