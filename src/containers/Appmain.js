import React , { Component, useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary'
import './Appmain.css';

import Scroll from '../components/Scroll.js';

//STATE:-DESCRIPTION OF YOUR OBJECT....

class Appmain extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchfield:''
		}
	}


	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=> this.setState({robots:users}))
	
	}

	onSearchChange=(event)=>{
	this.setState( { searchfield : event.target.value })
	}

	render()
	{const { robots,searchfield } = this.state;
       const filteredrobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
    


 return  !robots.length ?
    <h1>loading</h1>:
     (
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<Searchbox searchchange={ this.onSearchChange }/>
		
        <Scroll>
        <ErrorBoundary>
		<CardList robots={ filteredrobots }/>
		</ErrorBoundary>
		</Scroll>
		</div>
		  );
       }


    }
		
	


export default Appmain;