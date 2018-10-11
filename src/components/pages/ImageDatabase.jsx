import React, { Component } from 'react';
import InputBar from '../utils/InputBar';
import axios from 'axios';
import config from '../../config/config.json';

class ImageDatabase extends Component {
    state = {
        searchValue: '',
        initImage: ''
    };

    // async componentDidMount() {

    // }

    handleSearch = (event) => {
        this.setState({ searchValue: event.target.value });
    };

    // get request when button pressed
    handleNasaQuery = async () => {
        const url = `https://images-api.nasa.gov/search?q=${
            this.state.searchValue
        }&media_type=image`;
        const { data } = await axios.get(url);
        this.setState({ initImage: data.collection.items[0].links[0].href });
    };

    render() {
        return (
            <div className="main-content">
                <div className="container">
                    <div id="image-database" className="page">
                        <div className="row text-center">
                            <h1>Image Database</h1>
                        </div>
                        <div className="row">
                            <div className="col-4" />
                            <div className="col-4">
                                <InputBar
                                    searchValue={this.state.searchValue}
                                    onSearch={this.handleSearch}
                                    onNasaQuery={this.handleNasaQuery}
                                />
                            </div>
                            <div className="col-4" />
                        </div>
                        <div className="row mt-5" id="image-showcase">
                            {this.state.searchValue ? (
                                <div className="col-md-6 offset-md-3 col-sm-12 text-center">
                                    <h2>Image Results</h2>
                                    <div className="output mt-5 mb-5">
                                        {(
                                            <img
                                                src={this.state.initImage}
                                                alt=""
                                            />
                                        ) || (
                                            <p className="bg-warning">
                                                There are no results. Please
                                                refine your search.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageDatabase;
