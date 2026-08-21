export default function Situacao(){
    const situacao = true

    return(
        <>
        <p>Situação atual: <span style = {{color: situacao ? "#00ff9f" : "#f64348"}}>{situacao ? "ON" : "OFF"}</span></p>
        </>
    )
}