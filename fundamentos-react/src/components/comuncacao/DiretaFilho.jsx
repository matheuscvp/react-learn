const DiretaFilhao = params => {
    return (
        <div>
            <span> {params.nome} | </span>
            <span> {params.idade} |</span>
            <span> {params.nerd ? 'Verdadeiro' : 'Falso'}! </span>
        </div>
    )
}

export default DiretaFilhao