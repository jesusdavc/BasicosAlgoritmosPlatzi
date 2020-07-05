/* 1.- Comenzamos a hacer la comparación de elementos adyacentes
2.- repetimos hasta tener una pasada completa sin ningún swap
 */

let vector= [100 ,0 ,5 ,-1 ,60 ,70 ,14 ,15 ,10 ,1992]
let n = vector.length

const change_pos = (vector_entry, n1 ,n2) => {
    let temp = vector_entry[n2]
    vector_entry[n2] = vector_entry[n1]
    vector_entry[n1] = temp
}

const bubbleSort = (vector_entry, n) => {
    for(let i=0 ; i < n; i++){
        for(let j=0 ; j < n-1; j++){
            if(vector_entry[j] > vector_entry[j+1]){
                change_pos(vector, j, j+1)
            }
        }
    }
}

const print_array = (vector_entry, n) =>{;
    for(let i=0; i<n; i++){
        console.log(vector_entry[i] + ',')
    }
}
bubbleSort(vector,n)
print_array(vector, n)
