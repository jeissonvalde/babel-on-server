import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send(200, Jeisson.friendsList());
})

class Person {
  constructor(name, friends) {
    this.name = name;
    this.friends = friends;
  }

  friendsList() {
    var str = `Mis amigos son: ${ this.friends.join(', ') }`;
    // AQUÍ UTILIZO el '.join' como separador entre los elementos del array
    console.log(str); // esto es para imprimir en la consola.
    return str; // Este return para que se imprima en el navegador
  }
}

var Jeisson = new Person('Jeisson', ['José', 'Anita', 'Cameron'])

app.listen(300, () => console.log('Listening on port 3000'))
