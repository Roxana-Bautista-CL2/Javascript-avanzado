let precio = parseInt(prompt('ingresar precio'))
let cupon = parseInt(prompt('ingresar cupon'))

function operacion (precio, cupon){
    switch(cuponDescuento){
        case 'Bronce':
            return (precio - (precio * .5))
            break;
        case 'Plata':
            return (precio - (precio * .10))
            break;
        case 'Pro':
            return (precio - (precio * .20))
            break;
        case 'Platino':
            return (precio - (precio * .25))
        break;

        default:
            console.log("cupon erroneo")
            break;

    }
   console.log(cuponDescuento);

}