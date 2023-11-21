import { useState, useEffect, useReducer } from 'react'
import { getAbilities, getOneAbility } from '../services/getAbility'

const useAbilities = () => {
  const ABILITY_PAGE = window.localStorage.getItem('abilityPage') ?? 0

  const initialState = {
    abilities: [],
    abilityPage: ABILITY_PAGE,
    loading: false,
    inputValue: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'set_abilities': {
        return {
          ...state,
          abilities: action.newAbilities
        }
      }
      case 'set_abilityPage': {
        return {
          ...state,
          abilityPage: action.page
        }
      }
      case 'chnage_value': {
        return {
          ...state,
          inputValue: action.value
        }
      }
      case 'change_loading': {
        return {
          ...state,
          loading: action.loadindState
        }
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'change_loading', loadindState: true })
    Promise.resolve(getAbilities({ page: state.abilityPage }))
      .then(resposne => {
        Promise.all(resposne)
          .then(response => {
            dispatch({ type: 'set_abilities', newAbilities: response })
            dispatch({ type: 'change_loading', loadindState: false })
          })
      })
  }, [state.abilityPage])

  const handleAbilityPage = (event) => {
    if (event.target.textContent === 'Previous Page' && state.abilityPage !== 0) {
      window.localStorage.setItem('abilityPage', Number(ABILITY_PAGE) - 1)
      return Number(ABILITY_PAGE) - 1
    }
    if (event.target.textContent === 'Next Page' && state.abilityPage < 11) {
      window.localStorage.setItem('abilityPage', Number(ABILITY_PAGE) + 1)
      return Number(ABILITY_PAGE) + 1
    }
  }

  return { handleAbilityPage, state, dispatch }
}

export default useAbilities

export const useSingleAbility = (abilityName) => {
  const [singleAbility, setSingleAbility] = useState()

  useEffect(() => {
    Promise.resolve(getOneAbility({ name: abilityName }))
      .then(response => {
        setSingleAbility(response)
      })
  }, [])

  return { singleAbility }
}
