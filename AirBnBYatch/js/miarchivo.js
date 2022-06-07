

class product { // clase
    constructor(name,price,description){ //funcion contructora producto
        this.name = name //atributos
        this.price = price //atributos
        this.description = description //atributos
    }
    calculatePriceIVA(){ //funciones o metodos
        let IVA = 19
        return (this.price) + ((this.price * IVA) / 100)
    }
    getName(){ //funciones o metodos
        return this.name
    }
    getPrice(){ //funciones o metodos
        return this.price
    }
}

// se crea Objeto para gestionar producto
const Yatch = new product("Naara", 500, "Yate para vacaciones en caribe, zarpa de Isla en Republca Dominicana")

console.log(" Nombre Embarcación: " + Yatch.name)
console.log(" Precio Alojamiento Mes: $ " + Yatch.price)
console.log(" Descripción: " + Yatch.description )
console.log(" Precio con IVA: " + Yatch.calculatePriceIVA());