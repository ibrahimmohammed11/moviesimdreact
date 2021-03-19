import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Joi from 'joi';
import SecureLS from 'secure-ls';
import Auth from '../../Auth';
import loginImg from "../../images/Email-campaign.gif";
var ls = new SecureLS({ encodingType: 'aes' });

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    validationLogin = () => {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')).required(),
        })
        let state = { ...this.state };
        delete state.error;
        return schema.validate(state, { abortEarly: false })
    };

    sendLoginData = async () => {
        let state = { ...this.state };
        delete state.error;
        let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', state)
        if (data.message === "success") {
            ls.set('CurrentUser', data.token);
            Auth.logIn(() => {
                this.props.history.replace("/home")
            })
        }
        else {
            //error
        }
    };
    loginformChange = (e) => {
        let state = { ...this.state }
        state[e.target.name] = e.target.value;
        this.setState(state)
    };
    loginformSubmit = (e) => {
        e.preventDefault();
        let validationResponse = this.validationLogin();
        if (validationResponse.error) {
            let state = { ...this.state };
            state.error = validationResponse.error.message.split(".");
            this.setState(state)
        }
        else {
            this.sendLoginData()
        }

    };
    render() {
        return (
            <Fragment>
                <h1 className="text-center mt-5">Login</h1>
                {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
                <div className="row">
                    <div className="col-lg-6 col-md-9 col-sm-8">
                        <div>
                            <img src={loginImg} alt=" " className="w-100" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-11 col-sm-11 col-11 my-4 py-4">
                        <div>
                            <h3 className="mainColor"><span className="text-white">Please Enter :</span><br/> Email: ibrahim9@gmail.com<br/>Password: 123456<br/><span className="text-white">to Enter The Website</span></h3>
                            <form onSubmit={this.loginformSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Enter your email" name="email" className="form-control" onChange={this.loginformChange} value={this.state.email} />
                                    {this.state.error && <div className="alert alert-danger">must include @</div>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter your password" name="password" className="form-control" onChange={this.loginformChange} value={this.state.password} />
                                    {this.state.error && <div className="alert alert-danger">must enter password</div>}
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn px-4 btn-light">login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
