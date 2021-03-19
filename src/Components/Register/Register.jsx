import axios from 'axios';
import Joi from 'joi';
import React, { Component, Fragment } from 'react';
import loginImg from "../../images/Add-User.gif";
import Styles from "./Register.module.css"

export default class Register extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        age: "",
        password: "",
        error: ""
    }

    validationRegister = () => {
        const schema = Joi.object({
            first_name: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,10}$')).required(),
            last_name: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,10}$')).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            age: Joi.number().integer().min(18).max(80).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')).required(),
        })
        let state = { ...this.state };
        delete state.error;
        return schema.validate(state, { abortEarly: false })
    }

    sendRegisterData = async () => {
        let state = { ...this.state };
        delete state.error;
        let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', state)
        if (data.message === "success") {
            this.props.history.replace("/login")
        }
        else {
            //error
        }
    }
    registerformChange = (e) => {
        let state = { ...this.state }
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    registerformSubmit = (e) => {
        e.preventDefault();
        //this.sendRegisterData()
        // this.setState({
        //     first_name: "",
        //     last_name: "",
        //     email: "",
        //     age: "",
        //     password: ""
        // })
        let validationResponse = this.validationRegister();
        if (validationResponse.error) {
            let state = { ...this.state };
            state.error = validationResponse.error.message.split(".");
            this.setState(state)
        }
        else {
            this.sendRegisterData()

        }

    }
    render() {
        return (
            <Fragment>
                <h1 className="text-center mt-5">Register</h1>
                {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
                <div className="row">
                    <div className="col-lg-6 col-md-11 col-sm-11 col-11">
                        <div>
                            <form onSubmit={this.registerformSubmit}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="first_name" placeholder="Enter your First Name" className="form-control" onChange={this.registerformChange} value={this.state.first_name} />
                                    {/* {this.state.error && <div className="alert alert-danger">{this.state.error[0]}</div>} */}
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="last_name" placeholder="Enter your Last Name" className="form-control" onChange={this.registerformChange} value={this.state.last_name} />
                                    {/* {this.state.error && <div className="alert alert-danger">{this.state.error[1]}</div>} */}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Enter your Email" className="form-control" onChange={this.registerformChange} value={this.state.email} />
                                    {/* {this.state.error && <div className="alert alert-danger">{this.state.error[2]}</div>} */}
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" name="age" placeholder="Enter your Age" className="form-control" onChange={this.registerformChange} value={this.state.age} />
                                    {/* {this.state.error && <div className="alert alert-danger">{this.state.error[3]}</div>} */}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Enter your Password" className="form-control" onChange={this.registerformChange} value={this.state.password} />
                                    {/* {this.state.error && <div className="alert alert-danger">{this.state.error[4]}</div>} */}
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className={`btn px-4 ${Styles.submitColor}`}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-sm-8">
                        <div>
                            <img src={loginImg} alt=" " className="w-100"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
