const potencia = (base, expoente = 2) => base ** expoente;

console.log(potencia(3))     // só passou a base → expoente vira 2 → 3² = 9
console.log(potencia(3, 3))  // passou os dois  → expoente é 3  → 3³ = 27