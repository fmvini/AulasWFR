function calculo(a, b, c){
    return (a + b) * c;
}

export default function Calculo(){
    return (
            <>
                <p>É muito fácil usar expressões: 1 + 1 = {1 + 1}</p>
                <p>Utilizando funções com expressões de cálculo: {calculo(1, 2, 3)}</p>
            </>
        )
}