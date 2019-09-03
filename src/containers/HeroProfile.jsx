import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import Radium from 'radium'
import * as HeroActionCreators from '../action_creators/HeroActionCreators'
import LineInfo from '../components/HeroProfile/LineInfo'
import Button from '../components/Button'

const styles = {
    body: {
        margin: '50px 80px 0',
        display: 'flex',
        border: '5px solid black',
        padding: '50px',
        justifyContent: 'space-between',
    },
    AddPoint: {
        padding: '0px 0px 30px',
    },
    RightContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
}

class HeroProfile extends Component {
    componentDidMount() {
        const {
            match: {
                params: { id },
            },
            getProfileHero,
        } = this.props
        console.log(`componentDidMount ${id}`)
        getProfileHero(id)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const nextID = nextProps.match.params.id,
            {
                match: {
                    params: { id },
                },
                getProfileHero,
            } = this.props
        console.log(`shouldComponentUpdate ${nextID} ${id}`)
        if (nextID !== id) {
            getProfileHero(nextID)
            return false
        }
        return true
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    render() {
        const {
            match: {
                params: { id },
            },
            HeroProfile: {
                Data: { agi, int, luk, str },
                AddPoint,
            },
        } = this.props

        return (
            <div style={styles.body} to="/heroes">
                <div>
                    <LineInfo Name="STR" Value={str} />
                    <LineInfo Name="INT" Value={int} />
                    <LineInfo Name="AGI" Value={agi} />
                    <LineInfo Name="LUK" Value={luk} />
                </div>

                <div style={styles.RightContainer}>
                    <Link to="/heroes">回首頁</Link>
                    <div style={styles.AddPoint}>剩餘點數：{AddPoint}</div>
                    <Button Title="儲存" Large />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    HeroProfile: state.HeroProfile,
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
export default enhance(HeroProfile)
