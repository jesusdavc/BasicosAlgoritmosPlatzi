
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



