import React, { Component } from 'react';
import axios from 'axios';

// Components
import TextInput from '../../components/TextInput';

// Local Relatives
import styles from './Generation.style';

class Generation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            generatedGameId: 0,
            location: "",
            numberOfQuestions: 10,
            ocationCoords: {
                lat: 0.0,
                lng: 0.0
            }
        }
    }

    onChange(e) {
        console.log(e)
        // this.setState(inputValue, )
    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.title}>Generate New Game</h1>
                <div style={styles.inputsContainer}>
                    <p style={styles.locationPrompt}>City/Town:</p>
                    <TextInput
                        placeHolder="London"
                        value=''
                        onChange={() => this.onChange)}
                    />
                </div>

            </div>
        );
    }
}

export default Generation;
