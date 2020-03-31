import React from 'react';

export default class Title extends React.Component {

    constructor() {
        super();
        this.title = "Title";
    }

    render() {
        return (
        <h1>{this.title}</h1>
        );
    }
}