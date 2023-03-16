import { createReduxModule } from "hooks-for-redux"

const initialState = {
    number: 0
}

export const [number, { increase, decrease }] = createReduxModule('number', initialState, {

    increase: (state) => {
        return {
            number: state.number + 1
        }
    },
    decrease: (state) => {
        return {
            number: state.number - 1
        }

    },

}) 