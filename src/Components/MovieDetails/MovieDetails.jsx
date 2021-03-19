import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Styles from "./MovieDetails.module.css"

export default class MovieDetails extends Component {
    state = {
        genres: [],
        title: '',
        overview: '',
        poster_path: '',
        vote_average: '',
        release_date: '',
        loading: false,
    };

    goToMovieDetails = async (id) => {
        this.setState({ loading: false })
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
        this.setState({
            genres: data.genres,
            title: data.original_title,
            overview: data.overview,
            poster_path: data.poster_path,
            vote_average: data.vote_average,
            release_date: data.release_date,
            loading: true,
        })
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        this.goToMovieDetails(id);
    }

    render() {
        if (this.state.loading) {
            return (
                <Fragment>
                    
                    <div className="row my-5">
                        <div className="col-lg-4 col-md-5 col-sm-10 col-11">
                            <div>
                                <img src={'https://image.tmdb.org/t/p/w500/' + this.state.poster_path} className={`${Styles.detailsBr} w-100`}  alt=" " />
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="py-5">
                                <h3><strong className="mainColor">Title: </strong>{this.state.title}</h3>
                                <p><strong className="mainColor h5">genres:</strong></p>
                                {this.state.genres.map((value, index) => {
                                    return <div key={index} >
                                        <li>{value.name}</li>
                                    </div>
                                })}
                                <p className="mt-4 h5"><strong className="mainColor">Overview:</strong> {this.state.overview}</p>
                                <p className="mt-4 h5"><strong className="mainColor">Vote Average:</strong> {this.state.vote_average}</p>
                                <p className="mt-4 h5"><strong className="mainColor">Release Date:</strong> {this.state.release_date}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <div className={Styles.loader}>Loading...</div>
                </Fragment>
            )
        }

    }
}
