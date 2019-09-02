import { urlListHeroes } from './API_HeroList'
import { ErrorHandle, ShowLoading, HideLoading } from './GeneralActionCreators'
export const GET_LIST_HEROES = 'GET/LIST_HEROES'

const getListHeroesSuccess = response => ({
    type: GET_LIST_HEROES,
    data: response,
})

export const getListHeroes = input => async dispatch => {
    try {
        dispatch(ShowLoading())
        const response = await fetch(urlListHeroes)
        dispatch(getListHeroesSuccess(await response.json()))
        dispatch(HideLoading())
    } catch (error) {
        dispatch(HideLoading())
        dispatch(
            ErrorHandle({
                error: error,
                actionName: 'getListHeroes',
            })
        )
    }
}
