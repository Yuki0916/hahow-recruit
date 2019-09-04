import React, { Component } from 'react'
import Radium from 'radium'
import Button from '../Button'

const styles = {
    Body: {
        margin: '20px 0',
        lineHeight: 2,
    },
    Name: {
        width: '60px',
        display: 'inline-block',
    },
    Value: {
        width: '40px',
        display: 'inline-block',
        textAlign: 'center',
    },
}

class LineInfo extends Component {
    render() {
        const { Name, Value, Add, Subtract } = this.props
        return (
            <div style={styles.Body}>
                <span style={styles.Name}>{Name}</span>
                <Button Title="+" CallbackFN={() => Add(Name)} />
                <span style={styles.Value}>{Value}</span>
                <Button Title="-" CallbackFN={() => Subtract(Name)} />
            </div>
        )
    }
}

export default Radium(LineInfo)
