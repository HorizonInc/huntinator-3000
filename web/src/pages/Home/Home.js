import React, { Component } from 'react';

// Components
import Button from '../../components/Button';

// Local Relatives
import styles from './Home.style';

class Home extends Component {
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
                        type="number"
                        name="game_code"
                        style={styles.gameCodeInput}
                        maxLength={maxGameCodeLength}
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
