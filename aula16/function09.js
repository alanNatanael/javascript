const dobrar = (n) => n * 2;
const somarDobro = (a, b) => dobrar(a) + dobrar(b);

console.log(somarDobro(3, 4))

/* 
    somarDobro(3, 4)
        ↓
    dobrar(3) + dobrar(4)
        ↓
    (3 * 2) + (4 * 2)
        ↓
    6   +   8
        ↓
   14 ✅ 
   
*/