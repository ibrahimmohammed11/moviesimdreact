import React, { Component, Fragment } from 'react';
import getMovie from "../../Service/dataFromApi";
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import movieNight from "../../images/Movie-Night.gif";
import getTrending from '../../Service/apiData';
import TypeWriterEffect from 'react-typewriter-effect';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    state = {
        upcoming: [],
        top_rated: [],
        now_playing: [],
        popular: [],
        tv: [],
    };
    async componentDidMount() {
        let data1 = await getMovie("upcoming");
        let data2 = await getMovie("top_rated");
        let data3 = await getMovie("now_playing");
        let data4 = await getMovie("popular");
        let data5 = await getTrending("tv")

        this.setState({
            upcoming: data1.results,
            top_rated: data2.results,
            now_playing: data3.results,
            popular: data4.results,
            tv: data5.results,
        })
    }
    goToMovieDetails = (id) => {
        this.props.history.push(`/moviedetails/${id}`);
    }
    render() {
        return (
            <Fragment>
                <div className="ml-5 pr-5 mt-3">
                    <TypeWriterEffect
                        textStyle={{ color: '#a79344' }}
                        startDelay={100}
                        cursorColor="#a79344"
                        text={"Welcome to The Best Movie Website"}
                        loop={true}
                        nextTextDelay={1000}
                        typeSpeed={100}
                    />
                </div>
                <div className="row my-4">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-10 pb-4">
                        <div>
                            <div className="w-25 brbr mt-5"></div>
                            <h3 className="mb-2 py-3 mainColor">Upcoming<br />Movies<br />to Watch Right Now</h3>
                            <h6 className="my-4 secondFontColor">Most watched movies by days</h6>
                            <div className="w-100 brbr"></div>
                        </div>
                    </div>
                    {this.state.upcoming.slice(0, 4).map((value, index) => {
                        return <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3">
                            <div className="movie position-relative">
                                <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} className="w-100 brRadius overflow-hidden" alt=" " />
                                <div className="niew text-center py-5">
                                    <h3 className="mt-2 h6">{value.title}{value.name}</h3>
                                    <p className="p-2"><span className="clip-star"></span> {value.vote_average}</p>
                                    <button className="btn btnColor" onClick={() => this.goToMovieDetails(value.id)}>Movie Details</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="row my-4">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-10 pb-4">
                        <div>
                            <div className="w-25 brbr mt-5"></div>
                            <h3 className="mb-2 py-3 mainColor">Now Playing<br />Movies<br />to Watch Right Now</h3>
                            <h6 className="my-4 secondFontColor">Most watched movies by days</h6>
                            <div className="w-100 brbr"></div>
                        </div>
                    </div>
                    {this.state.now_playing.slice(0, 4).map((value, index) => {
                        return <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3">
                            <div className="movie position-relative">
                                <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} className="w-100 brRadius overflow-hidden" alt=" " />
                                <div className="niew text-center py-5">
                                    <h3 className="mt-2 h6">{value.title}{value.name}</h3>
                                    <p className="p-2"><span className="clip-star"></span> {value.vote_average}</p>
                                    <button className="btn btnColor" onClick={() => this.goToMovieDetails(value.id)}>Movie Details</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="row my-4">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-10 pb-4">
                        <div>
                            <div className="w-25 brbr mt-5"></div>
                            <h3 className="mb-2 py-3 mainColor">Top Rated<br />Movies<br />to Watch Right Now</h3>
                            <h6 className="my-4 secondFontColor">Most watched movies by days</h6>
                            <div className="w-100 brbr"></div>
                        </div>
                    </div>
                    {this.state.top_rated.slice(4, 8).map((value, index) => {
                        return <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3">
                            <div className="movie position-relative">
                                <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} className="w-100 brRadius overflow-hidden" alt=" " />
                                <div className="niew text-center py-5">
                                    <h3 className="mt-2 h6">{value.title}{value.name}</h3>
                                    <p className="p-2"><span className="clip-star"></span> {value.vote_average}</p>
                                    <button className="btn btnColor" onClick={() => this.goToMovieDetails(value.id)}>Movie Details</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="row my-4">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-10 pb-4">
                        <div>
                            <div className="w-25 brbr mt-5"></div>
                            <h3 className="mb-2 py-3 mainColor">Popular<br />Movies<br />to Watch Right Now</h3>
                            <h6 className="my-4 secondFontColor">Most watched movies by days</h6>
                            <div className="w-100 brbr"></div>
                        </div>
                    </div>
                    {this.state.popular.slice(0, 4).map((value, index) => {
                        return <div key={index} className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3">
                            <div className="movie position-relative">
                                <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} className="w-100 brRadius overflow-hidden" alt=" " />
                                <div className="niew text-center py-5">
                                    <h3 className="mt-2 h6">{value.title}{value.name}</h3>
                                    <p className="p-2"><span className="clip-star"></span> {value.vote_average}</p>
                                    <button className="btn btnColor" onClick={() => this.goToMovieDetails(value.id)}>Movie Details</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <h2 className="text-center mt-5 mainColor">Best Tv to Watch Right Now <i className="fas fa-tv mr-3"></i><i className="fas fa-award"></i></h2>
                <div className="row py-5">
                    <div className="col-xl-6 col-lg-6">
                        <div className="text-center">
                            <Carousel fade>
                                {this.state.tv.slice(0, 7).map((value, index) => {
                                    return <CarouselItem key={index} interval={2000}>
                                        <h3 className="mainColor">{value.title}{value.name}</h3>
                                        <p className="p-2"><span className="clip-star"></span> {value.vote_average}</p>
                                        <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} height="500px" className="brRadius w-75" alt=" " />
                                    </CarouselItem>
                                })}
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src={movieNight} alt=" " className="w-100"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}
