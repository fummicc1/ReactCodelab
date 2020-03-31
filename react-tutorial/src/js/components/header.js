import React from 'react';
import Title from './header/title';

export default class Header extends React.Component {

    handleChange(event) {
        const title = event.target.value;
        this.props.changeTitle(title);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>  
        );
    }
}