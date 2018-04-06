import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    onFormSubmit(event) {
        event.preventDefault();
        // We need to go and fetch weather data.
    }
    render() {
        return (
            <div>
                <form className='input-group' onSubmit={this.onFormSubmit}>
                    <input className='form-control'
                    placeholder='get a five day forecast in your favorite cities'
                           value={this.state.term}
                           onChange={this.onInputChange}
                    />
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secondary'>Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}