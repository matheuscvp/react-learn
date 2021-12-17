import {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = params => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    //  nome idade nerd
    function fornecerInformações(nomePR, idadePR, nerdPR) {
        setNome(nomePR)
        setIdade(idadePR)
        setNerd(nerdPR)
    };

    return (
       <div>
           <div>
               <span> {nome} </span>
               <span> {idade} </span>
               <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
           </div>

           <IndiretaFilho quandoClicar={fornecerInformações} ></IndiretaFilho>
       </div>
   );
}

export default IndiretaPai