import React, { Component } from 'react';

export default class Item extends Component {
    alertSize = {
        width:500
    };
    
    render() {
        return (
            <div className="alert alert-warning alert-dismissible" role="alert" style={this.alertSize}>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.props.onDelete(this.props.id)}>
                <span className="glyphicon glyphicon-trash">&times;</span>
            </button>
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>
        );
    }
}

