lista_categorias=[]

class Categoria {
    constructor(titulo,img,desc,marca){
        this.titulo= titulo
        this.img= img
        this.desc= desc
        this.marca= marca
    }
}

lista_categorias.push(new Categoria('Bebidas Frutadas','images/frutas.jpg','Nossas bebidas frutadas são preparadas com ingredientes de altíssima qualidade, que permitem uma experiência incrível. Temos uma ampla variedade de sabores!'))

lista_categorias.push(new Categoria('Chás','images/chá.jpg','Nossos chás  são preparados com ingredientes de altíssima qualidade, que permitem uma experiência incrível. Temos uma ampla variedade de sabores'))

lista_categorias.push(new Categoria('Gaseificadas','images/gaseificada1.jpg','Nossas bebidas gaseificadas são preparadas com ingredientes de altíssima qualidade, que permitem uma experiência incrível. Temos uma ampla variedade de sabores'))

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML +=`
    
     <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div  class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${categoria.titulo}</h5>
                            <p class="card-text">${categoria.desc}</p>
                        <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                        </div>
                </div>
             </div>
            </div>
    </div>
    
    `
})