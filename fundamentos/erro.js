function tratarErroELancar(erro){
   // throw new Error('...')
   //throw 10
   //throw 'mensagem'
   throw {
       nome: erro.name,
       msg: erro.message,
       data: new Date

   }
}

function imprimirNome (obj){
    try{
         console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome :'Moises'}
imprimirNome(obj)