import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';

class TestButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Button variant={this.props.variant}>{this.props.text}</Button>
        );
    }
}

export default TestButton;