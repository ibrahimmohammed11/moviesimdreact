import React, { Component, Fragment } from 'react'
import getMovie from "../../Service/dataFromApi"
export default class Upcoming extends Component {
    state = {
        movie: [],
        search: '',
    };

    async componentDidMount() {
        let data = await getMovie('upcoming')
        this.setState({
            movie: data.results
        })
    }

    updateSearch = (e) => {
        this.setState({ search: e.target.value })
    }
    goToMovieDetails=(id)=>{
        this.props.history.push(`/moviedetails/${id}`);
    }
    render() {
        let filerData = this.state.movie.filter(
            (value) => {
                return value.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-6 text-center m-auto">
                        <input type="text" onChange={this.updateSearch.bind(this)} value={this.state.search} placeholder='Serach by Movie' className='form-control my-5 text-center' />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 pb-4">
                        <div>
                            <div className="w-25 brbr mt-5"></div>
                            <h3 className="mb-3 py-3 mainColor">Best<br />Upcoming Movies<br />to Watch Right Now</h3>
                            <p className="my-2 secondFontColor">Most watched movies by days</p>
                            <div className="w-100 brbr"></div>
                        </div>
                    </div>
                    {filerData.map((value, index) => {
                        return <div key={index} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 my-3">
                            <div className="movie position-relative">
                                <img src={'https://image.tmdb.org/t/p/w500/' + value.poster_path} className="w-100 brRadius overflow-hidden" alt=" "/>
                                <div className="niew text-center py-5">
                                    <h3 className="h6">{value.title}{value.name}</h3>
                                    <p className="p-1"><span className="clip-star"></span> {value.vote_average}</p>
                                    <p>{value.release_date}</p>
                                    <button className="btn btnColor" onClick={()=>this.goToMovieDetails(value.id)}>Movie Details</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </Fragment>
        )
    }
}
