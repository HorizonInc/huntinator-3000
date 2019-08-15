import React, { Component } from 'react';
import axios from 'axios';

// Components
import TextInput from '../../components/TextInput';

// Local Relatives
import styles from './Generation.style';

class Generation extends Component {
    constructor(props) {
        super(props);

        this.generatedGameId = 0;
        this.location = "";
        this.numberOfQuestions = 10;
        this.locationCoords = {
            lat: 0.0,
            lng: 0.0
        }
    }

    onChange(event) {
        this.setState({location: event.target.value});
    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.title}>Generate New Game</h1>
                <div style={styles.inputsContainer}>
                    <p style={styles.locationPrompt}>City/Town:</p>
                    <TextInput
                        placeHolder="London"
                        value={this.state.location}
                        onChange={this.onChange(event)}
                    />
                </div>

            </div>
        );
    }
}

export default Generation;
