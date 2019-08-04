import React, { Component } from 'react';

// Components
import Button from '../../components/Button';

// Local Relatives
import styles from './style';

class App extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Hello World</h1>
                <Button
                    text={'Hiya!'}
                    style={styles.button}
                />
            </div>
        );
    }
}

export default App;
