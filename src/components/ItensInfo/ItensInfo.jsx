function Itensinfo({ title, price, colors }) {
    let cor;

    const cores = {
        "Black": "Preto",
        "White": "Branco",
        "Red": "Vermelho",
        "Green": "Verde",
    }

    return (
        <div className="detail__info">
            <h2 className="detail__info--title">{title}</h2>
            <h2 className="detail__info--price">{price}</h2>
            <h4>{
                colors && colors.map((color, index) => {
                    cor = index === 0 ? `Cor: ${`${cores[color]}`}` : `, ${cores[color]}`;
                    return cor
                })
            }</h4>
            <div className="detail__colors">{
                colors && colors.map((color, index) => {
                    return <div key={index} style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: color,
                        borderRadius: "10px",
                        border: color === "White" && "1px solid black"
                    }}></div>;
                })
            }</div>
        </div>
    )
}

export default Itensinfo;