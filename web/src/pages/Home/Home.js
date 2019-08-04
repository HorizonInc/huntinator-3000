import React, { Component } from 'react';

// Components
import Button from '../../components/Button';

// Local Relatives
import styles from './Home.style';

class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Hello World</h1>
                <h5>~ from the home screen!</h5>
                <Button
                    text={'Hiya!'}
                    style={styles.button}
                    onPress={() => alert('button pressed')}
                />
            </div>
        );
    }
}

export default Home;
