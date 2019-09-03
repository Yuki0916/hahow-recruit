import { combineReducers } from 'redux'
import HeroList from './HeroList'
import HeroProfile from './HeroProfile'

const rootReducer = combineReducers({
    HeroList,
    HeroProfile,
})

export default rootReducer
