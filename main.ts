function boyer_moore(text, pattern, n, m){
    
    let table = {
        '$': m
    };
    
    for (let i = 0; i < m; i++){
        table[ pattern[i] ] = m - i - 1
        if (table[ pattern[i] ] < 1){
          table[ pattern[i] ] = 1
        }
    }

    let start = 0;

    while (start + m <= n){

        let flag = true;
        let shift = 0;

        for (let i = m-1; i >= 0; i--){
            if (text[start + i] !== pattern[i]){
                flag = false;
                break;
            }
            shift += 1;
        }

        if (flag){ return start; }

        if (text[start + m - 1 - shift] in table){
            start += table[ text[start + m - 1 - shift ] ];
        } else {
            start += table['$'];
        }

    }

    return -1;

}


console.log( boyer_moore("ratatat", "tat", 7,3) ) ; 