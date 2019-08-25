import React, { Component } from 'react'

// Style imports
import styles from '../../components/Button/Button.style';

class Lobby extends Component {
    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.lobbyTitle}>Hunt Lobby</h1>
                </div>
                <div style={styles.huntIdContainer} >
                    <p style={styles.huntIdLabel}>Game Code:</p>
                    <span style={styles.gameCode}></span>
                </div>
            </div>
        )
    }
}

export default Lobby;