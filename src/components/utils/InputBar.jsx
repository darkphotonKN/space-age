import React, { Component } from 'react';
import config from '../../config/config.json';

class InputBar extends Component {
    // state = {
    //     searchValue: ''
    // };

    // handleInput = (event) => {
    //     this.setState({ searchValue: event.target.value });
    // };

    render() {
        // destructure the props
        const { onNasaQuery, searchValue, onSearch } = this.props;

        return (
            <div className="database-search input-group mb-3">
                <input
                    value={searchValue}
                    onChange={onSearch}
                    type="text"
                    className="form-control database-search-inp"
                    placeholder="Search Database"
                    aria-label="Search Database"
                    aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                    {/* Query Nasa Api Based on Search Term */}
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={onNasaQuery}
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default InputBar;
