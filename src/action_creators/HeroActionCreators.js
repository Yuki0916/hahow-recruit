import {
    urlListHeroes,
    urlProfileHero,
    urlUpdateProfileHero,
} from './API_HeroList'
import { ErrorHandle, ShowLoading, HideLoading } from './GeneralActionCreators'
export const GET_LIST_HEROES = 'GET/LIST_HEROES'
export const GET_PROFILE_HERO = 'GET/PROFILE_HERO'
export const SET_PROFILE_HERO_ID = 'SET/PROFILE_HERO_ID'
export const PATCH_PROFILE_HERO = 'PATCH/PROFILE_HERO'
export const ADD_HERO_VALUE = 'ADD/HERO_VALUE'
export const SUBTRACT_HERO_VALUE = 'SUBTRACT/HERO_VALUE'

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

const patchProfileHeroSuccess = () => ({
    type: PATCH_PROFILE_HERO,
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

export const patchProfileHero = (
    heroID,
    heroData,
    replaceFN
) => async dispatch => {
    try {
        dispatch(ShowLoading())
        dispatch(setProfileHeroID(parseInt(heroID)))
        const response = await fetch(urlUpdateProfileHero(heroID), {
            body: JSON.stringify(heroData),
            headers: { 'content-type': 'application/json' },
            method: 'PATCH',
        })
        if (200 <= response.status && response.status < 300) {
            replaceFN('/heroes')
            dispatch(patchProfileHeroSuccess())
        }
        dispatch(HideLoading())
    } catch (error) {
        console.log(error)
        dispatch(HideLoading())
        dispatch(
            ErrorHandle({
                error: error,
                actionName: 'patchProfileHero',
            })
        )
    }
}

export const addHeroValue = typeValue => dispatch =>
    dispatch({
        type: ADD_HERO_VALUE,
        data: {
            typeValue,
        },
    })

export const subtractHeroValue = typeValue => dispatch =>
    dispatch({
        type: SUBTRACT_HERO_VALUE,
        data: {
            typeValue,
        },
    })
