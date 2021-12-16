import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="App">
            <h1> Fundamentos React </h1>
            <div className="Cards">
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