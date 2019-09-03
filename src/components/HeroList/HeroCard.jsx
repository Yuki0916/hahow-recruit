import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const styles = {
    HeroCard: {
        border: '3px solid black',
        width: '100px',
        margin: '10px auto 0',
        cursor: 'pointer',
        textDecoration: 'none',
        ':active': {
            color: 'black',
        },
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
    Actived: {
        borderColor: 'red',
    },
}

class HeroCard extends Component {
    render() {
        const {
            Info: { id, name, image, isActived },
        } = this.props
        return (
            <Link
                to={`/heroes/${id}`}
                style={Object.assign(
                    {},
                    styles.HeroCard,
                    isActived && styles.Actived
                )}
            >
                <img style={styles.HeroImage} src={image} alt="hero_image" />
                <div style={styles.HeroName}>{name}</div>
            </Link>
        )
    }
}

export default Radium(HeroCard)
