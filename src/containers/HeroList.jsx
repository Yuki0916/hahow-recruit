import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import Radium from 'radium'
import * as HeroActionCreators from '../action_creators/HeroActionCreators'
import HeroCard from '../components/HeroList/HeroCard'

const styles = {
    HeroList: {
        border: '5px solid black',
        margin: '50px 80px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '0 20px 10px',
    },
}

class HeroList extends Component {
    componentDidMount() {
        const { getListHeroes } = this.props
        getListHeroes()
    }

    render() {
        const { Heroes, HeroID } = this.props
        return (
            <div style={styles.HeroList}>
                {Heroes.map((item, key) => (
                    <HeroCard
                        key={key}
                        Info={{
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            isActived:
                                HeroID === parseInt(item.id) ? true : false,
                        }}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Heroes: state.HeroList.HeroesInfo,
    HeroID: state.HeroProfile.HeroID,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(HeroActionCreators, dispatch)

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    Radium
)

export default enhance(HeroList)
