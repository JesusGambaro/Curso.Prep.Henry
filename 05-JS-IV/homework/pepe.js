function users_data(nombre, edad, pais) {
    this["username"] = nombre;
    this.age = edad;
    this.country = pais;
}

let Pepe;
Pepe = new users_data('Pepe', 19, "Eslovaquia");
Object.assign(Pepe,{lang:"Inglish"});
const Jacinto = new users_data('Jacinto', 15, "Groenlandia");
console.log(Pepe);
console.log(Jacinto);