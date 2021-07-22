import React from 'react';
//import { Component } from 'react';

export default class MyClassComponent extends React.Component {

    render() {
        return(
            <div>
                <img src="https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt="BigCo Inc. logo"/>
                <b><h1 style = {{color: `blue`}}>{this.props.page.name}</h1></b>
                <label for = "LOCATION"> location:</label>
                <b><p>{this.props.page.location}</p></b>
                <label for = "foodType"> food Type:</label>
                <b><p>{this.props.page.foodType}</p></b>
                <label for = "age">Age:</label>
                <b><p>{this.props.page.age}</p></b>
                <label for = "likes"> likes:</label>
                <b><p>{this.props.page.likes}</p></b>
                <label for = "twitterUsername"> Twitter Username:</label>
                <b><p>{this.props.page.twitterUsername}</p></b>
                </div>
    
        );
    }

    componentDidMount() {
        alert("Component did mount");
    }

    componentWillUnmount() {
        alert("Component will unmount");
    }
}