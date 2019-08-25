import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';

// Local Relatives
import styles from './Generation.style';

class Generation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: "",
            inputValue: "",
            generatedGameId: 0,
            location: "",
            numberOfQuestions: 10,
            ocationCoords: {
                lat: 0.0,
                lng: 0.0
            },
            huntId: '',
            redirect: false
        }
    }

    onLocationChange(text_event) {
        this.setState({city: text_event.target.value});
    }

    onNumberChange(number_event) {
        this.setState({numberOfQuestions: number_event.target.value})
    }

    onGenerate() {
        let postObject = {
            number_of_questions: this.state.numberOfQuestions
        }

        axios.post('http://192.168.1.218:3001/newGame', postObject)
            .then((response) => {
                this.setState({huntId: '/' + response.data.new_game_object.huntId, redirect: true});
            }).catch(e => {
                console.log(e);
            })
    }

    render() {
        if(this.state.redirect) {
            return ( <Redirect to={this.state.huntId} /> );
        }

        return (
            <div style={styles.container}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>Generate New Game</h1>
                </div>
                <div style={styles.inputsContainer}>
                    <div style={styles.inputContainer}>
                        <p style={styles.locationPrompt}>City/Town:</p>
                        <Input
                            style={styles.locationInput}
                            type='text'
                            placeHolder='London'
                            value={this.state.city}
                            onChange={(text_event) => this.onLocationChange(text_event)}
                        />
                    </div>

                    <div style={styles.inputContainer}>
                        <p style={styles.locationPrompt}>Number of questions:</p>
                        <Input
                            style={styles.locationInput}
                            type='number'
                            placeHolder='10'
                            value={this.state.numberOfQuestions}
                            onChange={(number_event) => this.onNumberChange(number_event)}
                        />
                    </div>
                </div>
                <div style={styles.generateButtonContainer}>
                    <Button
                        style={styles.generateButton}
                        onPress={() => this.onGenerate()}
                        text="Generate!"
                    />
                </div>
            </div>
        );
    }
}

export default Generation;
