function boyer_moore(text, pattern, n, m){
    
    let table = {};

    let occurences = [];
    
    for (let i = 0; i < m; i++){

        if ( i === m - 1 && !(pattern[i] in table) ){
            table[ pattern ] = m;
            break;
        }

        table[ pattern[i] ] = m - i - 1
        if (table[ pattern[i] ] < 1){
          table[ pattern[i] ] = 1
        }
    }

    let start = 0;

    while (start + m <= n){

        let flag = true;

        for (let i = m-1; i >= 0; i--){
            if (text[start + i] !== pattern[i]){
                flag = false;
                break;
            }
        }

        if (flag){ 
          occurences.push(start); 
        }

        if (text[start + m - 1] in table){
            start += table[ text[start + m - 1] ];
        } else {
            start += m;
        }

    }

    return occurences;

}


console.log( boyer_moore("ratatat", "tat", 7,3) ) ; 