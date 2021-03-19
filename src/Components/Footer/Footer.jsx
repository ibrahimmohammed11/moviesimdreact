import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="card text-center secondBgColor rounded-pill">
                    <div className="card-body">
                        <h5 className="card-title text-white">© 2021 <strong>Ibrahim Mohamed</strong> All rights reserved.
                            <a href="https://www.linkedin.com/in/ibrahim-mohammed-306134209/" target="_blank" rel="noreferrer" className="text-white"><i className="fab fa-linkedin-in fa-lg mx-2 icon"></i></a>
                            <a href="https://github.com/ibrahimmohammed11" target="_blank" rel="noreferrer" className="text-white"><i className="fab fa-github fa-lg mr-2 icon"></i></a>
                            <i className="fab fa-dribbble fa-lg mr-3 icon"></i>
                        </h5>
                        <i className="fas fa-tv mr-3 fa-lg text-white icon"></i>
                        <i className="fas fa-award text-white fa-lg icon"></i>
                    </div>
                </div>
            </Fragment>
        )
    }
}

