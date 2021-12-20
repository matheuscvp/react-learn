import './Mega.css'
import { useState } from 'react'

export default function Mega(props) {
    function gerarNumeros(qtde) {
        let aleatorios = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums);
            return [ ...nums, novoNumero] ;
        }, []).sort((n1, n2) => n1 -n2);
    
        return aleatorios;
    }
    
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min;
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array):
            aleatorio;
    }

    const numerosIniciais = Array(props.qtde || 6).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais);
    const [qtde, setQtde] = useState(props.qtde || 6)

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3> {numeros.join(' ')} </h3>
            <div>
                <label htmlFor="">Qtde de Números</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}> Gerar Números </button>
        </div>
    );
};