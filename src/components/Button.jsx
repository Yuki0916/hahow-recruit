import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
    Button: {
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
        padding: '0px 11px',
        cursor: 'pointer',
        display: 'inline-block',
    },
    Large: {
        padding: '5px 40px',
    },
}

class Button extends Component {
    render() {
        const { Title, CallbackFN, Large } = this.props
        return (
            <span style={[styles.Button, Large && styles.Large]}>{Title}</span>
        )
    }
}

export default Radium(Button)
