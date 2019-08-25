import React, { Component } from 'react';

// Local relatives
import styles from './Input.style';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { message: "Hello World" };
    }

    render() {
        const { placeHolder, value, style = {}, onChange, type} = this.props;

        return(
            <input style={{...styles.textInput, ...style}}
                   type={type} 
                   placeholder={placeHolder}
                   value={value}
                   onChange={onChange} 
            />
        )
    }
}

export default Input;