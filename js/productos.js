const productos = [];

class producto {
  constructor(id, modelo, marca, descripcion, cantidad, precio) {
    (this.id = id),
      (this.modelo = modelo),
      (this.marca = marca),
      (this.descripcion = descripcion),
      (this.cantidad = cantidad),
      (this.precio = precio);
  }
}

function crearProd(id, modelo, marca, descripcion, cantidad, precio) {
  const productoIngreso = new producto(
    id,
    modelo,
    marca,
    descripcion,
    cantidad,
    precio
  );
  let pushear = productos.push(productoIngreso);
  return pushear;
}
crearProd(
  1,
  "Samsung galaxy a47",
  "samsung",
  "Smartphone Android con una pantalla Super AMOLED de 6.5 pulgadas ",
  0,
  23500
);
crearProd(
  2,
  "Samsung Galaxy F34 ",
  "samsung",
  "Smartphone Android con una pantalla Super AMOLED de 6.5 pulgadas ",
  0,
  42000
);
crearProd(
  3,
  "Samsung Galaxy Tab S9 Ultra  ",
  "samsung",
  "Soporta carga rápida, y completa sus características con cuatro parlantes ",
  0,
  22000
);
crearProd(
  4,
  "Samsung Galaxy F54",
  "samsung",
  "Potenciado por un procesador Exynos 1380 con 8GB de memoria RAM ",
  0,

  95000
);
crearProd(
  5,
  "Samsung Galaxy S23+",
  "samsung",
  "Posee 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz.",
  0,

  74500
);
crearProd(
  6,
  "Motorola Razr 40 Ultra",
  "motorola",
  "Conservando la pantalla interna de 6.9 pulgadas con tasa de refresco de 165Hz",
  0,
  45600
);
crearProd(
  7,
  "Motorola Moto G73 5G",
  "motorola",
  "Parlantes stereo, sonido Dolby Atmos, resistencia a salpicaduras, y Android 13",
  0,
  63400
);
crearProd(
  8,
  " Motorola Defy 2 ",
  "motorola",
  "Resistencia de grado militar, certificación IP68, y corre Android 12.",
  0,

  56700
);
crearProd(
  9,
  "Motorola Moto E22i ",
  "motorola",
  "Potenciado por un procesador Helio G37 de MediaTek, el Moto E22i c",
  0,

  34600
);
crearProd(
  10,
  "Motorola Edge 40",
  "motorola",
  "Potenciado por un procesador Dimensity 8020 acompañado de 8GB",
  0,

  879000
);
crearProd(
  11,
  "Xiaomi Poco M6 Pro",
  "xiaomi",
  "Potenciado por un procesador Dimensity 8020 acompañado de 8GB",
  0,

  879000
);
crearProd(
  12,
  "Xiaomi Redmi 12 5G",
  "xiaomi",
  "Por dentro, encontramos un procesador Snapdragon 4 Gen 2",
  0,

  94500
);
crearProd(
  13,
  "Xiaomi Redmi 12 5G",
  "xiaomi",
  "Por dentro, encontramos un procesador Snapdragon 4 Gen 2",
  0,

  94500
);
crearProd(
  14,
  "Xiaomi Redmi Note 12S",
  "xiaomi",
  "Potenciado por un procesador Helio G96 de MediaTek",
  0,

  108400
);
crearProd(
  15,
  "Xiaomi Redmi Note 12T Pro",
  "xiaomi",
  "Dimensity 8200 Ultra desarrollado en colaboración  MediaTek,",
  0,

  79500
);
crearProd(
  16,
  "Apple iPhone 14 Pro Max",
  "apple",
  "Pantalla OLED LTPO de 6.7 pulgadas con soporte always-on",
  0,

  109500
);
crearProd(
  17,
  "Apple iPhone SE",
  "apple",
  "Posee 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. Potenciado por un procesador",
  0,

  76000
);
crearProd(
  18,
  "Apple iPhone 14",
  "apple",
  "Posee 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. Potenciado por un procesador ",
  0,

  176000
);
crearProd(
  19,
  "Apple iPhone 13",
  "apple",
  "Tiene 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. Potenciado por un procesador ",
  0,

  98000
);
crearProd(
  20,
  "Apple iPhone 13 Pro Max ",
  "apple",
  "Posee 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. Potenciado por un procesador Snapdragon",
  0,

  248000
);
console.table(productos);
