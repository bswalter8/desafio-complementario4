
const Biblioteca = {
    nombre_b: "Bilioteca de Babel",
    sd: "Centro",
    email : "babelbilioteca@babel.org"
 }

class Libro {   
    constructor(nombre, autor){
        this.nombre = nombre;
        this.autor = autor;    
    }    
}

const {
    nombre_b : nombre_Biblioteca,
    sd : sede,
  
 } = Biblioteca

let formulario = document.getElementById("idForm");
let catalogo_Mostrar = document.getElementById("catalogo_Mostrar");
let titulo = document.getElementById("h1");
titulo.innerHTML =  `<p>Agregado a la base de datos - ${nombre_Biblioteca} - ${sede}</p>`;
let catalogo = [];
localStorage.getItem("catalogo") ? catalogo = JSON.parse(localStorage.getItem("catalogo")) : localStorage.setItem("catalogo", JSON.stringify(catalogo));

formulario.addEventListener("submit", e =>{
    e.preventDefault();
    dataForm = new FormData(e.target);
    let n_Libro = null;
    
    let nombre = dataForm.get("nombre");
    let autor = dataForm.get("autor");
    let alerta = document.getElementById("alerta");
    nombre == "" || autor == "" ? alerta.innerHTML = "<p>Debe ingresar ambos parametros</p>": n_Libro = new Libro(nombre, autor); 
    if (n_Libro){
        const guardar_Catalogo = {
            ...n_Libro,
            ...Biblioteca,
        }
        catalogo.push(guardar_Catalogo);
        localStorage.setItem("catalogo", JSON.stringify(catalogo));
        alerta.innerHTML = `<p>"${guardar_Catalogo.nombre}" Agregado a la base de datos</p>`;
    }
});

formulario.addEventListener('keypress', e =>{
    alerta.innerHTML = ""

});
