function fact(n){
    let facto = 1
    if(n>0){
        for(i=1; i<=n; i++){

        facto = facto * i

        }
    }
    else{
        facto = 1
    }
        console.log(facto)
}

fact(0) 