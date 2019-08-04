import React, { Component } from 'react';

// Local Relatives
import styles from './Button.style';

class Home extends Component {
    render() {
        const { text, onPress, style = {} } = this.props;

        return (
            <button
                onClick={() => onPress()}
                style={{ ...styles.button, ...style }}
            >
                {text}
            </button>
        );
    }
}

export default Home;
