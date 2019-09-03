import { urlListHeroes, urlProfileHero } from './API_HeroList'
import { ErrorHandle, ShowLoading, HideLoading } from './GeneralActionCreators'
export const GET_LIST_HEROES = 'GET/LIST_HEROES'
export const GET_PROFILE_HERO = 'GET/PROFILE_HERO'
export const SET_PROFILE_HERO_ID = 'SET/PROFILE_HERO_ID'

const getListHeroesSuccess = response => ({
    type: GET_LIST_HEROES,
    data: response,
})

const getProfileHeroSuccess = response => ({
    type: GET_PROFILE_HERO,
    data: response,
})

const setProfileHeroID = heroID => ({
    type: SET_PROFILE_HERO_ID,
    data: {
        heroID,
    },
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

export const getProfileHero = heroID => async dispatch => {
    try {
        dispatch(ShowLoading())
        dispatch(setProfileHeroID(parseInt(heroID)))
        const response = await fetch(urlProfileHero(heroID))
        dispatch(getProfileHeroSuccess(await response.json()))
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
