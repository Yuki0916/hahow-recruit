import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const styles = {
    HeroCard: {
        border: '2px solid black',
        width: '100px',
        margin: '10px auto 0',
        cursor: 'pointer',
    },
    HeroImage: {
        maxWidth: '100%',
    },
    HeroName: {
        height: '50px',
        width: '100%',
        textAlign: 'center',
        lineHeight: '50px',
    },
}

class HeroCard extends Component {
    render() {
        const {
            Info: { id, name, image },
        } = this.props
        return (
            <Link to={`${id}`} style={styles.HeroCard}>
                <img style={styles.HeroImage} src={image} alt="hero_image" />
                <div style={styles.HeroName}>{name}</div>
            </Link>
        )
    }
}

export default Radium(HeroCard)
