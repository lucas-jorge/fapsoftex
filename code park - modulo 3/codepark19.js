/*Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela*/


const people = [
    {
      name: "Thiago",
      age: 30,
      child: null, // Não tem filhos
    },
    {
      name: "Lucas",
      age: 36,
      child: {
        name: "Laura",
        age: 3,
      },
    },
    {
      name: "Bruna",
      age: 27,
      child: {
        name: "Emily",
        age: 6,
      },
    },
  ];

  //exemplificando o código

    console.log(`O nome da filha de ${people[1].name} é ${people[1].child.name}`);
    console.log(`O nome da filha de ${people[2].name} é ${people[2].child.name}`);
    console.log(`O nome da filha de ${people[0].name} é ${people[0].child}`);
    console.log(`A idade da filha de ${people[1].name} é ${people[1].child.age} anos`);
    console.log(`A idade da filha de ${people[2].name} é ${people[2].child.age} anos`);
    console.log(`A idade de ${people[0].name} é ${people[0].age} anos`);
    console.log(`A idade de ${people[1].name} é ${people[1].age} anos`);
    console.log(`A idade de ${people[2].name} é ${people[2].age} anos`);