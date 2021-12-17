import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default function TabelaProdutos(params) {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 === 0 ? "Par" : "Impar"}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
};