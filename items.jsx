import React, { Component } from 'react';
import Item from './item';
import Edit from './edit'


export default class Items extends Component {
    state = {
        identifier: 5,
        items: [
            {id:1},
            {id:2},
            {id:3},
            {id:4}
            ]
    };
    
    createNew = () => {
        //Creates a copy of items list
        //Create a new item using identifier
        //Increment identifier
        //Adds new item to list copy
        //Sets state
        var items = [...this.state.items];
        var identifier = this.state.identifier;
        identifier += 1;
        items.push({id:identifier})
        this.setState({ items });
        this.setState({ identifier });
    }
    
    render() {
        return (
            //Have a component that is a button and pass createNew as an attribute to it
            <div>
                <Edit onAdd={this.createNew} />
                {this.state.items.map(item => <Item key={item.id} />)};
            </div>
            );
    }
}

