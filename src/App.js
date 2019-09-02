import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Radium from 'radium'
import HeroList from './containers/HeroList'

const styles = {
    body: {
        width: '100%',
        height: '100vh',
    },
}

const Heroes = props => {
    return <div>choosed one heroe</div>
}

const HeroesProfile = props => {
    return <div>HeroesProfile No {props.match.params.id}</div>
}

const NoMatch = props => {
    return <div>no match {props.location.pathname}</div>
}

function App() {
    return (
        <div style={styles.body}>
            <HeroList />
            <Switch>
                <Redirect exact from="/" to="/heroes" />
                <Route exact path="/heroes" component={Heroes} />
                <Route exact path="/heroes/:id" component={HeroesProfile} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default Radium(App)
