import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react';
import SectionTitle from './../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('inicial');
    
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercio #01" />
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>
                    <button className="btn" 
                        onClick={() => {setCount(count + 1)}} >+1</button>
                    <button className="btn"
                        onClick={() => {setCount(count - 1)}} >-1</button>
                </div>
            </div>

            <SectionTitle title="Exercio #02" />
            <div className="">
                <input type="text" className='input' 
                value={name} onChange={e => { setName(e.target.value) }} />
                <h1> {name} </h1>
            </div>
        </div>
    )
}

export default UseState
