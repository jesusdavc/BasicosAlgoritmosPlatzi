class Persona {
    constructor(name,id,credit,address){
    this.name = name
    this.id = id
    this.credit = credit
    this.address = address
    }
}

let client1 = new Persona('Karen Benites', '00000001', 1000.00, 'Calle 1, Carrera 1; Bogotá')

console.log(`Client Name is ${client1.name}`)
console.log(`Client Id is ${client1.id}`)
console.log(`Client Credit is ${client1.credit}`)
console.log(`Client Address is ${client1.address}`)