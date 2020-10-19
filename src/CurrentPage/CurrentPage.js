import React, { Component } from 'react';
import './CurrentPage.css';

class CurrentPage extends Component {
    state = {
        currentBrewery: {}
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.getCurrentBrewery(id);
    }
    getCurrentBrewery = (id) => {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
        .then(res => res.json())
        .then(data => this.setState({currentBrewery: data}))
    }
    render(){
        const {name, city, country, state, website_url} = this.state.currentBrewery;
        return(
            <div className="current-page">
                <h2 className='current-page__title'>{name}</h2>
                <p>{city}, {state} ,{country}</p>
                <a href={website_url} target='_blank' rel="noopener noreferrer">{website_url} </a>
            </div>
        );
    }
}

export default CurrentPage;