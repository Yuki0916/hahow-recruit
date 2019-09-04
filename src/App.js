import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Radium from 'radium'
import HeroList from './containers/HeroList'
import HeroProfile from './containers/HeroProfile'

const styles = {
    body: {
        width: '100%',
        height: '100vh',
    },
    Log: {
        margin: '50px 80px 0',
        border: '5px solid black',
        padding: '50px',
        display: 'block',
    },
}

const Heroes = props => {
    return <div style={styles.Log}>chosed one hero</div>
}

const NoMatch = props => {
    return (
        <Link style={styles.Log} to="/Heroes">
            no match {props.location.pathname} Back Home
        </Link>
    )
}

function App() {
    return (
        <div style={styles.body}>
            <HeroList />
            <Switch>
                <Redirect exact from="/" to="/heroes" />
                <Route exact path="/heroes" component={Heroes} />
                <Route exact path="/heroes/:id" component={HeroProfile} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default Radium(App)
