import React from 'react';

class GifList extends React.Component{
    renderGifs = () => {
        return this.props.gifs.map((gif, index) => {
            return <li key={index}><img src={gif}/></li>
        })
    }

    render(){
        return(
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}

export default GifList;