import React, { Component } from 'react';

class TechList extends Component {

    state = {
        techs: [
            'Node.js',
            'ReactJS',
            'React Native'
        ]
    };

    render() {
        return (
            <ul>
            {techs.map(tech => this.tech)}    
                <li>tech[0]</li>
                <li>tech[1]</li>
                <li>tech[2]</li>
            </ul>
        );
    }
}

export default TechList;