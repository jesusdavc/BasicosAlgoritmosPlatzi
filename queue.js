
/* 1 - Crear pointer para saber que hay en front y rear
2 - colocar estos valores en -1 al inicializar
3 - incrementar en 1 el valor de "rear"
    cuando agreguemos un elemento
4 - Retornar el valor de front al quitar un elemento 
    e incrementar en 1 el valor de
    front al usar dequeue,
5.- antes de agregar un elemento revisar si hay espacio
6.- antes de remover un elemento revisamos que existan elementos
7.- asegurarnos de que al remover todos los elementos 
    resetear nuestro front y rear a -1 
    y agregar el valor de 0 a Front al hacer nuestro primer enqueue 

 */


const SIZE = 5
let values = [], front = -1, rear= -1;


function enQueue(value){
    if(rear == SIZE-1)
        console.log(`Nuestro Queue esta lleno` );
    else {
        if(front == -1)
            front = 0;
        rear++;
        values[rear] = value;
        console.log(`Se inserto el valor ${value} correctamente`);
    
    }
}

function deQueue(){
    if(front == -1)
        console.log(`Nuestro Queue esta vacio` );
    else{
        console.log(`se elimino el valor ${values[front]}`);
        front++;
        if(front > rear)
        front = rear = -1;
    }
}



