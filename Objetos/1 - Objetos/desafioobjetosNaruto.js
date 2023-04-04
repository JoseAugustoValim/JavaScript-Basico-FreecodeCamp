/*Você foi encarregado de criar um programa para gerenciar um banco de dados de personagens do Naruto. O banco de dados é organizado como um objeto chamado "narutoDatabase" que contém informações sobre vários personagens, cada um representado como um objeto com um ID único como nome da propriedade.

Você precisa escrever uma função chamada "updateNarutoCharacter" que permita modificar as propriedades de um personagem específico no banco de dados. A função deve ter quatro parâmetros:

    narutoDatabase: O objeto que representa o banco de dados de personagens do Naruto.
    id: Um número que representa o ID único do personagem a ser modificado.
    prop: Uma string que representa o nome da propriedade do personagem a ser atualizada.
    value: Uma string contendo o novo valor a ser atribuído à propriedade.

Aqui estão as regras para modificar as propriedades do personagem:

    Se o parâmetro value for uma string vazia, exclua a propriedade especificada do objeto do personagem.
    Se a propriedade não for "jutsus" e o parâmetro value não for uma string vazia, atribua o valor à propriedade do personagem.
    Se a propriedade for "jutsus" e o parâmetro value não for uma string vazia, adicione o valor ao final do array "jutsus" existente do personagem.
    Se o personagem não tiver a propriedade "jutsus", crie um novo array vazio para a propriedade "jutsus" do personagem antes de adicionar o valor a ela.

Sua função deve sempre retornar o objeto "narutoDatabase" completo após modificar as propriedades do personagem.

Este exercício desafia os alunos a trabalhar com objetos complexos em JavaScript e ensina a modificar objetos usando funções. Além disso, utiliza um tema familiar da cultura pop para tornar o exercício mais envolvente.*/

let narutoDatabase = {
  1: {
    name: 'Naruto Uzumaki',
    age: 16,
    village: 'Konohagakure',
    jutsus: ['Rasengan', 'Shadow Clone Jutsu'],
  },
  2: {
    name: 'Sasuke Uchiha',
    age: 16,
    village: 'Konohagakure',
    jutsus: ['Chidori', 'Fire Release: Dragon Fire Technique'],
  },
  3: {
    name: 'Sakura Haruno',
    age: 16,
    village: 'Konohagakure',
  },
};

function updateNarutoCharacter(database, id, prop, value) {
  myNarutoCharacter = database[id];
  if (value === '') {
    if (myNarutoCharacter.hasOwnProperty(prop)) {
      delete myNarutoCharacter[prop];
    }
  }
  if (prop === 'jutsus' && value === '') {
    myNarutoCharacter[prop] = value;
  }

  if (prop === 'jutsus' && value !== '') {
    if (!myNarutoCharacter.hasOwnProperty('jutsus')) {
      myNarutoCharacter['jutsus'] = [];
    }
    myNarutoCharacter['jutsus'].push(value);
  }

  return narutoDatabase;
}

updateNarutoCharacter();

/*Você está criando um sistema de gerenciamento de dados para uma coleção de ninjas, seus jutsus e missões. Cada ninja é representado como um objeto na coleção principal, identificado por um ID único. Cada ninja possui uma coleção de jutsus e uma coleção de missões, cada um também identificado por IDs únicos. Sua tarefa é criar uma série de funções para atualizar e manter esses dados de acordo com as regras abaixo:

    A função deve sempre retornar a coleção completa de ninjas atualizada.
    Se um objeto passado como parâmetro para uma função não existir na coleção, ele deve ser criado.
    Se o valor passado como parâmetro for uma string vazia, a propriedade correspondente deve ser removida do objeto.
    Se a propriedade passada como parâmetro não for "jutsus" ou "missões" e o valor não for uma string vazia, o valor deve ser atribuído a essa propriedade do objeto.
    Se a propriedade passada como parâmetro for "jutsus" ou "missões" e o valor não for uma string vazia, o valor deve ser adicionado ao final da matriz de IDs correspondente.
    Se o objeto não tiver uma propriedade correspondente a "jutsus" ou "missões", ela deve ser criada como uma matriz vazia antes de adicionar o ID do novo item.

Use as seguintes definições para ajudá-lo a criar as funções:

    A coleção principal de ninjas é representada por um objeto chamado ninjaCollection.
    Cada ninja é um objeto dentro da coleção principal, representado por um ID único como a propriedade do objeto.
    Cada objeto ninja tem as seguintes propriedades (nem todas as propriedades podem estar presentes para cada ninja):
        nome: uma string que representa o nome do ninja.
        idade: um número que representa a idade do ninja.
        graduação: uma string que representa o nível de graduação do ninja.
        jutsus: uma matriz que contém os IDs dos jutsus que o ninja conhece.
        missões: uma matriz que contém os IDs das missões que o ninja já completou.
    Cada jutsu é um objeto representado por um ID único, contido em um objeto chamado jutsuCollection.
    Cada objeto jutsu tem as seguintes propriedades (nem todas as propriedades podem estar presentes para cada jutsu):
        nome: uma string que representa o nome do jutsu.
        descrição: uma string que descreve o que o jutsu faz.
    Cada missão é um objeto representado por um ID único, contido em um objeto chamado missaoCollection.
    Cada objeto missão tem as seguintes propriedades (nem todas as propriedades podem estar presentes para cada missão):
        nome: uma string que representa o nome da missão.
        descrição: uma string que descreve o objetivo da missão.
        status: uma string que representa o status atual da missão.*/
