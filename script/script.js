let nomeProduto = document.getElementById('nome')

let precoProduto = document.getElementById('preco')

let qtdProduto = document.getElementById('quantidade')

let body = document.getElementById('body')




function validarDados(){
    
    event.preventDefault();


    
    
    
    if(nomeProduto.value.length != 0){
        nomeProduto.classList.remove('is-invalid')
        nomeProduto.classList.add('is-valid')
    
    }else{
        nomeProduto.classList.remove('is-valid')
        nomeProduto.classList.add('is-invalid')
    }


    if(precoProduto.value.length != 0){
        precoProduto.classList.remove('is-invalid')
        precoProduto.classList.add('is-valid')
    
    }else{
        precoProduto.classList.remove('is-valid')
        precoProduto.classList.add('is-invalid')
    }


    if(qtdProduto.value.length != 0){
        qtdProduto.classList.remove('is-invalid')
        qtdProduto.classList.add('is-valid')
    
    }else{
        qtdProduto.classList.remove('is-valid')
        qtdProduto.classList.add('is-invalid')
    }
  

}









function index(id) {
    return obj.findIndex(item => item.id === id); // Retorna o índice do objeto que tem o mesmo id
}



let obj = []



function renderValues(){
    
    body.innerHTML = ``

    obj.map((item)=>{
        
        body.innerHTML += `
        <tr id="${index()}">
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.quantidade}</td>
            <td><img style="width: 80px; height: 60px;" src="${item.imagem}" alt=""></td>
            <td>  
                <button onclick="editar(${item.id})" type="button" class="btn btn-warning">Editar</button>     
                <button onclick="deletar(Number(${item.id}))" type="button" class="btn btn-danger">Deletar</button>   
            </td>
        </tr>
    `
    })
 

}
let cont = Number(1)
function cadastrarProduto(){
    
    
    if(nomeProduto.value.length != 0 && precoProduto.value.length != 0 && qtdProduto.value.length != 0){
        obj.push({
            id: cont,
            nome : nome.value,
            preco : preco.value,
            quantidade: quantidade.value,
            imagem : imagem.value
        })
    
    
        renderValues()
    }else(alert('impossivel cadastrar produtos'))
    

    cont++
}



function deletar(id){   

    
    obj = obj.filter(item => item.id !== id);
    

    renderValues();
   
    

}


function editar(id){
    obj = obj.map((item)=>{
        if(item.id === id){
            return {
                id: cont,
                nome : nome.value,
                preco : preco.value,
                quantidade: quantidade.value,
                imagem : imagem.value
            }
        }
        return item
    })

    renderValues()


}





