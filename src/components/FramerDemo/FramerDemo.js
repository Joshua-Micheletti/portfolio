import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './FramerDemo.css';
import TestAlert from '../TestAlert/TestAlert'

const variants = {
    left:  {"x": "-100px",
            "background-color": "#B4CBF0",
            "variation": "danger"},
    right: {"x": "100px",
            "background-color": "#FFD6E1",
            "variation": "success"}, 
};

class FramerDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
    }

    render() {
        return(
            <motion.div
                animate={ this.state.toggle ? 'left' : 'right' }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, opacity: 0.7 }}
                variants={variants}
                className='testSquare'
                onClick={() => {
                    this.setState({toggle: !this.state.toggle});
                }}
            >
                <TestAlert
                    variant={this.state.toggle ? variants.left.variation : variants.right.variation}
                    text={this.state.toggle ? variants.left.variation : variants.right.variation}
                >
                </TestAlert>
            </motion.div>
        );
    }

}

export default FramerDemo;