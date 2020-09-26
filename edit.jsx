import React, { Component } from 'react';

export default class Edit extends Component {
    render() {
        return (
            <button
            onClick={() => this.props.onAdd()}>
              Push Me!
            </button>
        );
    }
}
