import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        if (nextID !== id) {
            getProfileHero(nextID)
            return false
        }
        return true
    }

    render() {
        const {
            match: {
                params: { id },
            },
            HeroProfile: {
                Data,
                Data: { agi, int, luk, str },
                AddPoint,
            },
            addHeroValue,
            subtractHeroValue,
            patchProfileHero,
            history: { replace },
        } = this.props

        return (
            <div style={styles.body} to="/heroes">
                <div>
                    <LineInfo
                        Name="STR"
                        Value={str}
                        Add={addHeroValue}
                        Subtract={subtractHeroValue}
                    />
                    <LineInfo
                        Name="INT"
                        Value={int}
                        Add={addHeroValue}
                        Subtract={subtractHeroValue}
                    />
                    <LineInfo
                        Name="AGI"
                        Value={agi}
                        Add={addHeroValue}
                        Subtract={subtractHeroValue}
                    />
                    <LineInfo
                        Name="LUK"
                        Value={luk}
                        Add={addHeroValue}
                        Subtract={subtractHeroValue}
                    />
                </div>

                <div style={styles.RightContainer}>
                    <div style={styles.AddPoint}>剩餘點數：{AddPoint}</div>
                    <Button
                        Title="儲存"
                        CallbackFN={() => patchProfileHero(id, Data, replace)}
                        Large
                    />
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
    withRouter,
    Radium
)
export default enhance(HeroProfile)
