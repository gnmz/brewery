import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

class MainPage extends Component {
    state = {
        breweryList: []
     }
    componentDidMount(){
        this.getBreweryList();
    }
    getBreweryList = () => {
        fetch('https://api.openbrewerydb.org/breweries')
        .then(res => res.json())
        .then(data => this.setState({breweryList: data}))
    }
    render(){
        const { breweryList } = this.state;
        return(
            <div className='main-page'>
                <div className='brewery-list'>
                    {breweryList.map((item) => ( 
                        <Link to={`/current/${item.id}` } className='brewery-list__link'  key={item.id}>
                    <div className='brewery-list__item'>
                        <h4 className='brewery-list__item-name'>{item.name}</h4>
                        <p className='brewery-list__item-city'>from: {item.city}</p>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        );
    }
}

export default MainPage;