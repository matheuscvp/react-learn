import "./Card.css"

export default function Card(params) {
    const cardStyle = {
        backgroundColor: params.color || '#000',
        borderColor: params.color || '000',
    }
    
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                {params.titulo}
            </div>
            <div className="Content">
                {params.children}
            </div>
        </div>
    )
}