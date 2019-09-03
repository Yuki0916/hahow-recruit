import {
    GET_PROFILE_HERO,
    SET_PROFILE_HERO_ID,
} from '../action_creators/HeroActionCreators'

const initState = {
    HeroID: null,
    Data: {
        agi: 0,
        int: 0,
        luk: 0,
        str: 0,
    },
    AddPoint: 0,
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_PROFILE_HERO_ID:
            return {
                ...state,
                HeroID: action.data.heroID,
            }
        case GET_PROFILE_HERO:
            return {
                ...state,
                Data: { ...action.data },
            }
        default:
            return state
    }
}
