//  O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//  Aqui você deverá desenvolver a lógica para resolver o problema.


//  1 - Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o 
// adicionarão a uma lista visível ao clicar em "Adicionar".


let amigosArray = [];                                                                               // lista de amigos
let liSorteio = document.createElement("li");                                                       // definir um unico li para ter a visualização de apenas um nome

function adicionarAmigo(){

    
    let amigo = document.getElementById('amigo').value;                                             // atribui a varíavel o valor de entrada pelo usuário
    
    //2 - Validar entrada: Se o campo de texto estiver vazio, 
    // o programa exibirá um alerta solicitando um nome válido.

    if(amigo == ""){
        alert("Insira um nome válido!");
    }else{

        
        let luListaAmigos = document.getElementById('listaAmigos');                                 // atribuir à varíavel a lista de amigos do HTML
        // console.log(amigo);

        amigosArray.push(amigo);                                                                    // adiciona o amigo na lista

        let li = document.createElement("li");                                                      // criar um item na lista HTML
        
        //3 - Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
        amigosArray.forEach(function (item){                                                        // laço para percorrer a lista de amigos
    
            li.innerHTML = item;                                                                    // o amigo será adicionado num item da lista
            luListaAmigos.append(li);                                                               // o amigo será adicionado na lista do HTML
    
        });
    
        li = "";                                                                                    // evitar a repetição dos valores já adicionados
        document.getElementById('amigo').value = "";                                                // apagar o input após inserção do amigo na lista
        
    }
        
}

//4 - Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
function sortearAmigo(){

    let numAleatorio = parseInt(Math.random() * amigosArray.length + 1);                            // definição do numero aleatorio
    let sorteio = document.getElementById('resultado');                                             // atribuir o elemento à variável

    liSorteio.innerHTML = amigosArray[numAleatorio-1];                                              // retorna ao HTML o amigo sorteado
    sorteio.append(liSorteio);                                                                      // adiciona ao HTML o <li> com o amigo sorteado
    

}




