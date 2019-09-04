import {
    GET_PROFILE_HERO,
    SET_PROFILE_HERO_ID,
    ADD_HERO_VALUE,
    SUBTRACT_HERO_VALUE,
    PATCH_PROFILE_HERO,
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
        case PATCH_PROFILE_HERO:
            return {
                ...initState,
            }
        case ADD_HERO_VALUE:
            const addType = action.data.typeValue.toLowerCase()
            if (state.AddPoint === 0) return state
            return {
                ...state,
                Data: {
                    ...state.Data,
                    [addType]: state.Data[addType] + 1,
                },
                AddPoint: state.AddPoint - 1,
            }

        case SUBTRACT_HERO_VALUE:
            const subtractType = action.data.typeValue.toLowerCase()
            if (state.Data[subtractType] === 0) return state
            return {
                ...state,
                Data: {
                    ...state.Data,
                    [subtractType]: state.Data[subtractType] - 1,
                },
                AddPoint: state.AddPoint + 1,
            }

        default:
            return state
    }
}
