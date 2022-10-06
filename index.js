class Pizza {
	constructor(id, tipo, ingredientes,precio) {
		this.id = id;
		this.tipo = tipo;
		this.ingredientes = ingredientes;
		this.precio = precio;
	
	}
	mostrarTipoPizza () {
        console.log('La pizza:' +this.tipo + ' cuesta:' + this.precio);
    }
}

let caprese = new Pizza(1,'caprese','tomate y albaca',1500);
let jyq = new Pizza(2,'jyq','jamon y queso',1200);
let anchoas = new Pizza(3,'anchoas','anchoas y morron',1800);
let muzza = new Pizza(4,'muzza','muzarela salsa de tomate y oregano',1000);
let especial = new Pizza(5,'especial','pollo salsa de tomate y muzarella',1200);
let humita = new Pizza(6,'humita','cebolla choclo y muzarela',1500);

let pizzas= [caprese,jyq,anchoas,muzza, especial,humita];

console.log('....¿Que precio tiene cada pizza?.....')
caprese.mostrarTipoPizza();
jyq.mostrarTipoPizza();
anchoas.mostrarTipoPizza();
muzza.mostrarTipoPizza();
especial.mostrarTipoPizza();
humita.mostrarTipoPizza();

console.log('....Cuales son la pizzas con un id impar?....')
function esImpar(pizzasImpares){
    if (
        (pizzasImpares.id %2) !=0
    )
    console.log("La pizza " + pizzasImpares.tipo + " tiene un ID impar: " + pizzasImpares.id)
}

console.log(pizzas.forEach(esImpar))

let caprese1= 1500
let jyq1=1500
let anchoas1=1500
let muzza1=1500
let especial1=1500
let humita1=1500

console.log('..........¿hay alguna pizza que cueste menos de 600$?............. ')

if (caprese1 < 600) {
	console.log('no sale menos que 600$')
} else {console.log('La pizza caprese sale mas de 600$') }

if (jyq1 < 600) {
	console.log('no sale menos que 600$')
} else {console.log('La pizza jyq sale mas de 600$') }

if (anchoas1 < 600) {
	console.log('no sale menos que 600$')
} else {console.log('La pizza anchoas sale mas de 600$') }

if (muzza1 < 600) {
	console.log('no sale menos que 600$')
} else {console.log('La pizza muzza sale mas de 600$') }

if (especial1 < 600) {
	console.log('no sale menos que 600$')
} else {console.log('La pizza especial sale mas de 600$') }


if (humita1 < 600) {
	console.log(' no sale menos que 600$')
} else {console.log('La pizza humita sale mas de 600$') }

console.log('....¿Que ingredientes tiene la pizza?...')

function verIngredientes(ingredientesPizza){
    console.log("La pizza " + ingredientesPizza.tipo + " contiene los siguientes ingredientes: " + ingredientesPizza.ingredientes)
}
console.log(pizzas.forEach(verIngredientes))