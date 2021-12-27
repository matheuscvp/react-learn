import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 };
        case 'numberSub2':
            return { ...state, number: state.number - 2 };
        case 'numberMulti7':
            return { ...state, number: state.number * 7 };
        case 'numberDiv25':
            return { ...state, number: state.number / 25 };
        case 'numberInt':
            return { ...state, number: parseInt(state.number) };
        case 'numberAddN':
            return { ...state, number: state.number + action.payload };
        case 'login':
            return { ...state, user: { name: action.payload } };
        default:
            return state;
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                {state.user
                    ? <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>}

                <span className="text">{state.number}</span>
                <button className="btn"
                    onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>login</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberSub2' })}>-2</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberMulti7' })}>*7</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberDiv25' })}>/25</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberInt' })}>Int</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'numberAddN', payload: 5 })}>+5</button>
            </div>
        </div>
    )
}

export default UseReducer
