const IsPar = params => {
    const isPar = params.numero % 2 ===0
    
    return (
        <div>
            { isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}

export default IsPar