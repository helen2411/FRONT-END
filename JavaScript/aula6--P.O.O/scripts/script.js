// var clienteNome= 'Talita'
// var clienteCpf= '0000000001'
// var clienteEmail='email@email.com'
// var clienteTelefone= 'dd 12345678'
// var clienteTipoConta= 'Fisica'
// var clienteSaldo= 0

class Cliente {
    nome;
    dataNascimento;
    cpf;
    email;
    telefone;
    tipoDeConta;
    saldo;
    depositar(valor){
        if(valor <= 0){
            console.log('Operação negada')
        }else{
        this.saldo +=valor
        console.log(`O valor de ${valor} foi depositado com sucesso!`)
    }
}
    //Argumentos- é p valor passado
    //Parâmetro- é o que vai salvar o argumento
    pix(valor){
        if(this.saldo < valor){
            console.log('Saldo insuficiente!')
        }else{
        this.saldo -= valor
        console.log(`Sua transferência no valor de ${valor} foi efetuada!`)
    }
    }
}


var cliente1= new Cliente

cliente1.nome='Larissa'
cliente1.dataNascimento='23/05/2002'
cliente1.cpf= 4003219656-50
cliente1.email='larissa23@gmail.com'
cliente1.saldo=600
cliente1.pix(100)

console.log(cliente1)