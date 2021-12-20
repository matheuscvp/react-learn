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
import IndiretaPai from './components/comuncacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="App">
            <h1> Fundamentos React </h1>
            <div className="Cards">
                
                <Card titulo="Mega" color="#B9006E">
                    <Mega qtde={6} ></Mega>
                </Card>

                <Card titulo="Contador classe" color="#E45F56">
                    <Contador numeroInicial={100}></Contador>
                </Card>

                <Card titulo="Component controlado (Input)" color="#E45F56">
                    <Input valor="Nome"></Input>
                    <Input valor="Idade"></Input>
                    <Input valor="Sexo"></Input>
                    <Input valor="Profissão"></Input>
                </Card>

                <Card titulo="Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="Comunicação Direta" color="#59323C">
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