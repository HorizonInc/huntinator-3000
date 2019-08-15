import React, { Component } from 'react';

// Local relatives
import styles from './TextInput.style';

class TextInput extends Component {

    render() {
        const { placeHolder, value, style = {}} = this.props;

        return(
            <input style={{...styles.textInput, ...style}} 
                   type="text" 
                   placeholder={placeHolder}
                   value={value}
                   onChange={onChange(event)} 
            />
        )
    }
}

export default TextInput;