function disemvowel(str) {
    
    let rep = /[aeiou]/gi;
    let new_str = str.replace(rep, '');


      return new_str;
    };
     

    console.log(disemvowel("Shut up idiot"));



