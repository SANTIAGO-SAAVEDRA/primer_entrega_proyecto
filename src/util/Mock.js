
const productos = [
    { "id": 1, "name": "El libro de la Selva", "category": "terror", "price": 1400, "img": "http://dummyimage.com/158x.png/ff4444/ffffff" },
    { "id": 2, "name": "IT", "category": "terror", "price": 890, "img": "http://dummyimage.com/197x.png/cc0000/ffffff" },
    { "id": 3, "name": "Macbeth", "category": "terror", "price": 1320, "img": "http://dummyimage.com/241x.png/5fa2dd/ffffff" },
    { "id": 4, "name": "El Fantasma de la Ópera", "category": "terror", "price": 2500, "img": "http://dummyimage.com/177x.png/ff4444/ffffff" },
    { "id": 5, "name": "Una noche en StoneTown" , "category": "terror", "price": 2300, "img": "http://dummyimage.com/250x.png/5fa2dd/ffffff" },
    { "id": 6, "name": "El Hotel", "category": "terror", "price": 600, "img": "http://dummyimage.com/239x.png/5fa2dd/ffffff" },
    { "id": 7, "name": "Harry Potter", "category": "juvenil", "price": 2550, "img": "http://dummyimage.com/155x.png/ff4444/ffffff" },
    { "id": 8, "name": "La Reina Roja", "category": "juvenil", "price": 1200, "img": "http://dummyimage.com/189x.png/dddddd/000000" },
    { "id": 9, "name": "Los Juegos del Hambre", "category": "juvenil", "price": 1320, "img": "http://dummyimage.com/224x.png/cc0000/ffffff" },
    { "id": 10, "name": "Divergente", "category": "juvenil", "price": 1000, "img": "http://dummyimage.com/165x.png/cc0000/ffffff" }
  ];

const getFetch = new Promise((res, rej) => {

    let respuesta = '200';
    if(respuesta === '200'){
      setTimeout(()=>{
        res(productos)
      }, 3000)
    }else{
      rej('404');
    }}
  )

export default getFetch;