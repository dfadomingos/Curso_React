function Titulo(){

    let nome = "Dimitri Teicheira"
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

    return (
        <div>
            <h1>Oi, eu sou um {nome}</h1>
            <img width={100} src={urlImg} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ducimus corporis cumque, quisquam distinctio, ea deserunt assumenda consectetur voluptatibus inventore eaque labore! Minima adipisci hic labore officia magni incidunt dolores.</p>
        </div>
    )
}

export default Titulo