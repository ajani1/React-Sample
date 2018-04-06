import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''}
    }
    onInputChange(event) {
        console.log("changing", event.target.value);
    }
    render() {
        return (
            <div>
                <form className='input-group'>
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