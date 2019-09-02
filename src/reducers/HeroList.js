import { GET_LIST_HEROES } from '../action_creators/HeroActionCreators'

const initState = {
    HeroesInfo: [
        {
            id: 0,
            name: 'NULL',
            image: '#',
        },
    ],
}

export default (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_HEROES:
            return {
                ...state,
                HeroesInfo: [...action.data],
            }
        default:
            return state
    }
}
