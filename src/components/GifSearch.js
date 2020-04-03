import React from 'react';

class GifSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onHandleSubmit(this.state.search)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input onChange={this.handleChange} type="text" name="search" value={this.state.search}/>
            </form>
        )
    }
}

export default GifSearch;