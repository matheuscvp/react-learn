import { useState } from "react";
import './Input.css'

const Input = params => {
    const [valor, setValor] = useState(params.valor)

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <div className="form">
                <h3> {params.valor} </h3>
                <input type="text" value={valor} onChange={quandoMudar} />
            </div>
        </div>
    )
}

export default Input;