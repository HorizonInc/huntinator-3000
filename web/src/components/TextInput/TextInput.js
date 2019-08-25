import React, { Component } from 'react';

// Local relatives
import styles from './TextInput.style';

class TextInput extends Component {
    constructor(props) {
        super(props);

        this.state = { message: "Hello World" };
    }

    render() {
        const { placeHolder, value, style = {}, onChange} = this.props;

        return(
            <input style={{...styles.textInput, ...style}} 
                   type="text" 
                   placeholder={placeHolder}
                   value={value}
                   onChange={onChange} 
            />
        )
    }
}

export default TextInput;