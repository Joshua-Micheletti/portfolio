import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class TestAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Alert variant={this.props.variant}>
                {this.props.text}
            </Alert>
        );
    }
}

export default TestAlert;