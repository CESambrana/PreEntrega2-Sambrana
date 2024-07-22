let numId = 1;

class Zapatillas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.id = numId++;
  }
}
class Botines {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.id = numId++;
  }
}
class ZapatillasBasqt {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.id = numId++;
  }
}

let zapas = [
  new Zapatillas("Nike, Jordan 4", 120000),
  new Zapatillas("Nike, Jordan 3", 130000),
  new Zapatillas("Nike, Jordan 1", 125000),
  new Zapatillas("Nike, Air Force one", 150000),
  new Zapatillas("Nike, Janosky", 100000),
  new Zapatillas("Nike, Revolution 6", 115000),
];

let boti = [
  new Botines("Kappa, f11", 50000),
  new Botines("Kappa, f5", 45000),
  new Botines("Nike, f11", 150000),
  new Botines("Nike, f5", 130000),
  new Botines("Adidas, f5", 125000),
  new Botines("Adidas, f11", 140000),
];
let zapasBasq = [
  new ZapatillasBasqt("Topper", 84000),
  new ZapatillasBasqt("Nike", 200000),
  new ZapatillasBasqt("Adidas", 160000),
  new ZapatillasBasqt("Under Armour", 145000),
];

function prod() {
  let pregunta1 = prompt(
    "Elija una de las opciones:\n Escriba '1' para ver los productos. \n Escriba '2' para agregar algún producto. \n Escriba '3' para editar algún producto.\n Escriba 'salir' para cerrar. "
  ).toLocaleLowerCase();

  if (pregunta1 == 1) {
    let tipo = prompt(
      "Elija el tipo de producto:\n Escriba '1' para ver todos los productos. \n Escriba '2' para ver las zapatillas. \n Escriba '3' para ver los botines. \n Escriba '4' para ver las Zapatillas de basquet.\n Escriba 'volver' para volver. "
    ).toLocaleLowerCase();
    if (tipo == 1) {
      zapas.forEach((element) => console.log(element));
      boti.forEach((element) => console.log(element));
      zapasBasq.forEach((element) => console.log(element));
    } else if (tipo == 2) {
      zapas.forEach((element) => console.log(element));
    } else if (tipo == 3) {
      boti.forEach((element) => console.log(element));
    } else if (tipo == 4) {
      zapasBasq.forEach((element) => console.log(element));
    } else if (tipo == "volver") {
      return prod();
    } else {
      alert("Elija una de las opciones por favor.");
      return prod();
    }
  } else if (pregunta1 == 2) {
    let tipo = prompt(
      "Elija que tipo de producto desea agregar:  \n Escriba '1' para agregar zapatillas. \n Escriba '2' para agregar botines. \n Escriba '3' para agregar Zapatillas de basquet.\n Escriba 'volver' para volver. "
    );
    if (tipo == 1) {
      let name = prompt("Escriba el nombre del producto que desea agregar");
      let price = parseInt(
        prompt("Escriba el precio del producto que desea agregar")
      );
      zapas.push(new Zapatillas(name, price));
      console.log(zapas);
    } else if (tipo == 2) {
      let name = prompt("Escriba el nombre del producto que desea agregar");
      let price = parseInt(
        prompt("Escriba el precio del producto que desea agregar")
      );
      boti.push(new Botines(name, price));
      console.log(boti);
    } else if (tipo == 3) {
      let name = prompt("Escriba el nombre del producto que desea agregar");
      let price = parseInt(
        prompt("Escriba el precio del producto que desea agregar")
      );
      zapasBasq.push(new ZapatillasBasqt(name, price));
      console.log(zapasBasq);
    } else if (tipo == "volver") {
      return prod();
    } else {
      alert("Elija una de las opciones por favor.");
      return prod();
    }
  } else if (pregunta1 == 3) {
    let tipo = prompt(
      "Elija que tipo de producto desea editar:  \n Escriba '1' para editar zapatillas. \n Escriba '2' para editar botines. \n Escriba '3' para editar Zapatillas de basquet.\n Escriba 'volver' para volver. "
    );
    if (tipo == 1) {
      let num = prompt("Elija el id del producto que desea cambiar");
      let numEd = num - 1;
      let name = prompt("Escriba el nuevo nombre del producto");
      let price = parseInt(prompt("Escriba el precio del producto"));
      zapas.splice(numEd, 1, new Zapatillas(name, price));
      console.log(zapas);
    } else if (tipo == 2) {
      let num = prompt("Elija el id del producto que desea cambiar");
      let numEd = num - 1;
      let name = prompt("Escriba el nuevo nombre del producto");
      let price = parseInt(prompt("Escriba el precio del producto"));
      boti.splice(numEd, 1, new Botines(name, price));
      console.log(boti);
    } else if (tipo == 3) {
      let num = prompt("Elija el id del producto que desea cambiar");
      let numEd = num - 1;
      let name = prompt("Escriba el nuevo nombre del producto");
      let price = parseInt(prompt("Escriba el precio del producto"));
      zapasBasq.splice(numEd, 1, new ZapatillasBasqt(name, price));
      console.log(zapasBasq);
    } else if (tipo == "volver") {
      return prod();
    } else {
      alert("Elija una de las opciones por favor.");
      return prod();
    }
  } else if (pregunta1 == "salir") {
    alert("Adiós");
    return;
  } else {
    alert("Por favor elija una de las opciones.");
    return prod();
  }
}

prod();
