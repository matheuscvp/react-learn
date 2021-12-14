export default function Aleatorio(params) {
    const aleatorio = parseInt((Math.random() * (params.max - params.min)) + params.min);
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong> Valor Mínimo: </strong> {params.min}
            </p>
            <p>
                <strong> Valor Máximo: </strong> {params.max}
            </p>
            <p>
                <strong> Valor Escolhido: </strong> {aleatorio}
            </p>
        </div>
    )
}