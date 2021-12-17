import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comuncacao/DiretaPai'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="App">
            <h1> Fundamentos React </h1>
            <div className="Cards">
                <Card titulo="Comunicação" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="Condicional" color="#982395">
                    <ParOuImpar numero={19}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: 'Fernando'}} />
                    <UsuarioInfo usuario={{email: 'Fernando@gmail.com'}} />
                    <UsuarioInfo />
                </Card>
                
                <Card titulo="Produtos" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="Repetição" color="black">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="Exemplo" color="#FA6900">
                    <Aleatorio max={60} min={1} />
                </Card>

                <Card titulo="Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="Componente" color="#E8B71A">
                    <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
                </Card>

                <Card titulo="Primeiro" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )

}