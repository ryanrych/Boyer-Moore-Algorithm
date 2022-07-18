function boyer_moore(text: string, pattern: string, n: number, m: number){

    // keep track of occurences
    let occurences: number[] = [];
    
    // build table for mismatched characters
    let table: {[key: string]: number} = {};
    for (let i: number = 0; i < m; i++){

        if ( i === m - 1 && !(pattern[i] in table) ){
            table[ pattern ] = m;
            break;
        }

        table[ pattern[i] ] = m - i - 1
        if (table[ pattern[i] ] < 1){
          table[ pattern[i] ] = 1
        }
    }

    // slide pattern through text looking for pattern
    let start: number = 0;
    while (start + m <= n){

        // find mismatched character
        let flag: boolean = true;
        for (let i = m-1; i >= 0; i--){
            if (text[start + i] !== pattern[i]){
                flag = false;
                break;
            }
        }

        // match found
        if (flag){ 
          occurences.push(start); 
        }

        // match not found, slide pattern according to table
        if (text[start + m - 1] in table){
            start += table[ text[start + m - 1] ];
        } else {
            start += m;
        }

    }

    return occurences;

}


console.log( boyer_moore("ratatat", "tat", 7,3) ); 