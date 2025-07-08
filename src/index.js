

const botaoFiltro = document.getElementById("botaoFiltro")



botaoFiltro.addEventListener("click", function(){


    const categoriaInput = document.getElementById("filtro-categoria").value 
    const precoInput = document.getElementById("filtro-preco").value 

    const item = document.querySelectorAll(".item")



    item.forEach(function(item){

        const categoriaItemAtual = item.dataset.categoria 
        const precoItemAtual = parseFloat(item.dataset.preco)

        let mostrar = true

        if(categoriaInput !== ""   &&   categoriaInput !== categoriaItemAtual){
            mostrar=false
        }

        if(precoInput !== ""   &&   parseFloat(precoInput) < precoItemAtual){
            mostrar=false
        }

        if(mostrar){
            item.classList.add("mostrar")
            item.classList.remove("remover")

        } else {
            item.classList.add("remover")
            item.classList.remove("mostrar")
        }
        console.log("apertou")


    })
})