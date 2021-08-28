let numeroDeAlunos = 10

//Percorre de 0 até o número de alunos
// Para contador (index) menor do que o número de alunos, incrementando no contador a cada repetição...
for (let index = 0; index <= numeroDeAlunos; index++){
    //Verifica se o valor atual do contador é zero
    if (index == 0){
        console.log(`${index}, zero`)
        //Verifica se o resto da divisão do valor do contador por 2 é igual a 1 (se o número é impar)
    }else if(index % 2 == 1){
        //Retorna o valor, e diz que ele é ímpar
        console.log(`O número ${index} é ímpar`)
    //Se não (se ele não é ímpar, ele é par)
    }else{
        //Retorna o valor e diz que ele é par
        console.log(`O número ${index} é par`)
    }
}

//mesma coisa do anterior, mas usando o while
//o while exige que as variáveis sejam declaradas antes, então vou declarar o contador
let contador = 0
while(contador <= numeroDeAlunos){
    if (contador == 0){
        console.log(`${contador} zero`)
    }else if(contador % 2 == 1){
        console.log(`O número ${contador} é ímpar`)
    }else{
        console.log(`O número ${contador} é par`)
    }
    contador = contador + 1
}
