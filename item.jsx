import React, { Component } from 'react';

export default class Item extends Component {
    alertSize = {
        width:500
    };
    
    render() {
        return (
            <div class="alert alert-warning alert-dismissible" role="alert" style={this.alertSize}>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span class="glyphicon glyphicon-trash">&times;</span>
            </button>
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>
        );
    }
}

