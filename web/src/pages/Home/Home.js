import React, { Component } from 'react';
import axios from 'axios';

// Utilities
import config from '../../utils/config'; 

// Components
import Button from '../../components/Button';

// Local Relatives
import styles from './Home.style';

class Home extends Component {
    onChangeText(gameId) {
        if (gameId.length >= 5) {
            const query = `game_id=${gameId}`;
            const joinGameURL = `${config.apiDomain}/joinGame?${query}`;

            axios.get(joinGameURL)
                .then(response => {
                    console.log('process.env: ', process.env.SRV_PASS)
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        const maxGameCodeLength = '5';

        return (
            <div style={styles.container}>
                <div style={styles.headingContainer}>
                    <h1 style={styles.headingText}>Huntinator</h1>
                    <h1 style={styles.headingText}>3000</h1>
                </div>

                <div style={styles.gameCodeContainer}>
                    <span style={styles.enterGameCodeText}>enter game code</span>
                    <input
                        type='number'
                        name='game_code'
                        style={styles.gameCodeInput}
                        maxLength={maxGameCodeLength}
                        onChange={(event) => this.onChangeText(event.target.value)}
                    />
                </div>

                <div style={styles.generateBtnContainer}>
                    <Button
                        text={'Generate New Game'}
                        style={styles.generateBtn}
                        onPress={() => alert('button pressed')}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
