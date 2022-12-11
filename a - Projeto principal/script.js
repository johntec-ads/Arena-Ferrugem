class Lista {
  constructor(presente,timeAmarelo,timeAzul) {
    this._presente = presente;
    this._timeAmarelo = timeAmarelo;
    this._timeAzul = timeAzul

  }
  //Metodo que raliza o embaralhamento a cada atualização.
  embaralhar() {
    this._presente.sort(() => Math.random() - 0.5, 0.5);
  }

  //Metodo para retida de falta.

  falta(atleta) {
    console.log(atleta);
    let lista = JSON.stringify(this._presente);//converte array para string.       
    if (lista.includes(atleta) == true) {//includes:confirmar a presença da string.      
      for (let indice in this._presente) {//itera a propriedade.
        if (this._presente[indice].nome == atleta) {//busca a condição pedida.
          this._presente.splice(indice, 1);//splice: retira a propriedade do array.
        }
      }
    } else {
      //Se não confirmar a string no "if()", apresenta a mensagem de erro no "else".
      alert(`${atleta} não existe na lista.`);
    }

  }


  /* Metodo para uso interno nos metodos
  com dois parâmetros: variável,string para nome. */
  imprimir(parametro, nome) {
    let cont = 1;
    console.log(nome);
    for (let i = 0; i < parametro.length; i++) {
      let nomes = parametro[i].nome.toString();
      console.log(`Nº ${cont.toString().padStart(2, 0)} - ${nomes}`);
      cont++;
    }
  }

  //Metodo para imprimir a lista completa.
  printOriginal() {
    console.log("\nLista Completa :")
    let cont = 1;
    for (let i in this._presente) {
      let nome = this._presente[i].nome.toString()
      console.log(`Nº ${cont.toString().padStart(2, 0)}-${nome}`);
      cont++;
    }

  }

  listaHTML() {

    let cont = 1;

    for (let i in this._presente) {
      let nome = this._presente[i].nome.toString()
      //console.log(`Nº ${cont.toString().padStart(2, 0)}-${nome}`);//impressão no console


      let lista = document.createElement('ul');
      let item = document.createElement('li');
      let texto = document.createTextNode(`${cont.toString().padStart(2, 0)}-${nome}`);

      item.appendChild(texto);
      lista.appendChild(item);

      let container = document.getElementById('paragrafo-principal');
      container.appendChild(lista);

      cont++;
    }



  }

  //Metodo para separar e imprimir as equipes.
  equipes() {
    //Filtro por Ataque e habilidade.    
    let AtaqueHab1 = this._presente.filter(param => param.posicao === "Ataque" && param.habilidade === 3);
    let AtaqueHab2 = this._presente.filter(param => param.posicao === "Ataque" && param.habilidade === 2);
    let AtaqueHab3 = this._presente.filter(param => param.posicao === "Ataque" && param.habilidade === 1);
    //Juntando arrays e objetos com spread.
    let ataque = [...AtaqueHab1, ...AtaqueHab2, ...AtaqueHab3];

    //this.imprimir(ataque, "\nAtaque:");


    //Filtro por Defesa e habilidade.
    let DefesaHab1 = this._presente.filter(param => param.posicao === "Defesa" && param.habilidade === 3);
    let DefesaHab2 = this._presente.filter(param => param.posicao === "Defesa" && param.habilidade === 2);
    let DefesaHab3 = this._presente.filter(param => param.posicao === "Defesa" && param.habilidade === 1);
    //Juntando arrays e objetos com spread.
    let defesa = [...DefesaHab1, ...DefesaHab2, ...DefesaHab3];

    //this.imprimir(defesa, "\nDefesa:");


    //Filtro por Meio e habilidade.
    let MeioHab1 = this._presente.filter(param => param.posicao === "Meio" && param.habilidade === 3);
    let MeioHab2 = this._presente.filter(param => param.posicao === "Meio" && param.habilidade === 2);
    let MeioHab3 = this._presente.filter(param => param.posicao === "Meio" && param.habilidade === 1);
    //Juntando arrays e objetos com spread.
    let meio = [...MeioHab1, ...MeioHab2, ...MeioHab3];

    //this.imprimir(meio, "\nMeio:");

    //Juntando arrays e objetos com spread.
    //Lista final esta em ordem de posição e habilidade.
    let novaLista = [...ataque, ...meio, ...defesa];

    //this.imprimir(novaLista,"\nNovaLista:")

    //Declarando arrays para separar as equipes.
    let timeAmarelo = [];
    let timeAzul = [];
    let realocando;

    //Separando a lista criada em timeAmarelo e timeAzul.
    //Iteração separa pelo indice para ou impar.
    for (let i = novaLista.length; i > 0; i--) {
      if (i % 2 == 0) {
        realocando = novaLista.shift();
        timeAmarelo.push(realocando);
      } else {
        realocando = novaLista.shift();
        timeAzul.push(realocando);

      }


    }

    this._timeAmarelo = timeAmarelo;
    this._timeAzul = timeAzul;

    let cont = 1;

    for (let i in this._timeAmarelo){

      let lista = document.createElement('ul');
      let item = document.createElement('li');
      let texto = document.createTextNode(`${`${cont.toString().padStart(2, 0)}-${timeAmarelo[i].nome.toString()}`}`);      
      item.appendChild(texto);
      lista.appendChild(item);     
      let equipeAmarela = document.getElementById("equipe-amarela")      
      equipeAmarela.appendChild(lista);
      cont ++      
    }

    for (let i in this._timeAzul){
      let lista = document.createElement('ul');
      let item = document.createElement('li');
      let texto = document.createTextNode(`${`${cont.toString().padStart(2, 0)}-${timeAzul[i].nome.toString()}`}`);      
      item.appendChild(texto);
      lista.appendChild(item);     
      let equipeAmarela = document.getElementById("equipe-azul")      
      equipeAmarela.appendChild(lista);
      cont ++      
    }


  }

}

let lista = new Lista([
  {
    nome: "Edmar",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "João Muzi",
    posicao: "Meio",
    habilidade: 2
  },
  
  {
    nome: "Miguel",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Leonel",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Everton",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "John",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Sassi",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "Cobra",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Tota",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Helio",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Dario",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Maua",
    posicao: "Ataque",
    habilidade: 3
  },
  {
    nome: "jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "João Ramalho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Paulinho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Piu Pinga",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Adauto",
    posicao: "Defesa",
    habilidade: 1
  },
  /* {
    nome: "Van Helsing",
    posicao: "Meio",
    habilidade: 2
  }, */

  {
    nome: "Alisson",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Fiori",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },  
  {
    nome: "Leonardo Ramalho",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Bilu",
    posicao: "Ataque",
    habilidade: 2
  },
  {
    nome: "Legione",
    posicao: "Meio",
    habilidade: 2
  },
]);




//console.log("Lista de faltas\n:"+lista.falta('John'));

//Metodo para imprimir a lista completa.
//lista.printOriginal()

//Metodo para embaralhar.
lista.embaralhar();

//Metodo para separar e imprimir as equipes.
lista.equipes();

//Exportando para elementos HTML
lista.listaHTML();










