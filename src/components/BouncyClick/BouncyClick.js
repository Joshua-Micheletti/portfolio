import React, { Component } from 'react';
import { motion } from 'framer-motion';

class BouncyClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let defaultHover = 1.02;
        let defaultTap = 0.98;

        return(
            <motion.div
                whileHover={{ scale: this.state.hover == null ? defaultHover : this.props.hover }}
                whileTap={{ scale: this.state.tap == null ? defaultTap : this.props.tap }}
                onClick={() => {this.props.onClick()}}
            >
                {this.props.children}
            </motion.div>
        );
    }
}

export default BouncyClick;