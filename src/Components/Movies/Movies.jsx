import React, { Component, Fragment } from 'react'
import getTrending from '../../Service/apiData';

export default class Movies extends Component {
    state = {
        movies: [],
      };

      async componentDidMount() {
        let data=await getTrending('movies')
        this.setState({
            movies: data.results
        })
      }
    render() {        
        return (
            <Fragment>
                <div className="row my-4">
                    <div className="col-xl-4 col-lg-3 col-md-4 col-sm-8 col-10 pb-4">
                        <div>
                            <div className="w-25 brbr mt-5"></div>
                            <h3 className="my-2 py-2 mainColor">Trending<br />Movies<br />to Watch Right Now</h3>
                            <p className="my-2 secondFontColor">Most watched movies by days</p>
                            <div className="w-100 brbr"></div>
                        </div>
                    </div>
                    {this.state.movies.map((value, index) => {
                        return <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 my-3">
                            <div className="movie position-relative">
                                <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} className="w-100 brRadius overflow-hidden" alt=" "/>
                                <div className="niew text-center py-5">
                                    <h3 className="mt-4 h6">{value.title}{value.name}</h3>
                                    <p className="p-2"><span className="clip-star"></span> {value.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
 
            </Fragment>
        )
    }
}
