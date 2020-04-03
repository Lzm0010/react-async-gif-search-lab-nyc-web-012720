import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            gifs: []
        }
    }

    storeGifs = (gifs) => {
        const newGifs = gifs.map(gif => gif.images.original.url)
        console.log(newGifs)
        this.setState({
            gifs:newGifs
        })
    }

    handleSubmit = (searchValue) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=apikey&limit=3`)
            .then(res => res.json())
            .then(gifs => this.storeGifs(gifs.data))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch onHandleSubmit={this.handleSubmit}/>
            </div>
        )
    }

}

export default GifListContainer;








