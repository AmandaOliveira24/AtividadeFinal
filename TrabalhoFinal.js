const prompt = require('prompt-sync')({ sigint: true });
class Produto{
    constructor(nome, codigo, preco){
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;

    }
    mostrarInfo(){
        console.log(`Nome: ${this.nome} Código: ${this.codigo} Preço: ${this.preco.toFixed(2)}`);
    }
}

class SistemaProdutos {
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(){
        const nome = prompt(`Digite o nome do produto: `);

        let codigo = prompt(`Digite o código do produto: `).trim();
        while (this.produtos.some(p => p.codigo === codigo)){
            console.log(`O código já existe! Digite outro código!`);
            codigo = prompt(`Digite o código do produto: `);
        }
        let preco = parseFloat(prompt(`Digite o preço do produto: `));
        while(isNaN(preco) || preco <= 0){
            console.log(`Preço inválido! Digite um preço válido!`);
            preco = parseFloat(prompt(`Digite o preço do Produto: `));
        }
        const novoProduto = new Produto(nome, codigo, preco)
        this.produtos.push(novoProduto)
        console.log(`Produto cadastrado com sucesso!`)
    }
    listarProduto(){
        if (this.produtos.length === 0){ 
            console.log(`Nenhum produto Cadastrado!`);
        } else { 
          console.log('------Lista de Produtos-------');
          for (let i = 0; i < this.produtos.length; i++){
            this.produtos[i].mostrarInfo();
          }
          console.log(this.produtos);
        }
    }
    buscarProduto(){
        const codigo = prompt(`Digite o código do produto para buscar: `);
        const produto = this.produtos.find(p => p.codigo.toString() === codigo.toString());
        if(!produto){
            console.log(`Produto não encontrado!`);
            return;
        }
        produto.mostrarInfo();
    }
    alterarPreco(){
        const codigo = prompt(`Digite o código do produto para alterar o preço: `)
        const produto = this.produtos.find(p => p.codigo.toString() === codigo.toString());
        if(!produto){
            console.log(`Produto não encontrado!`);
            return;
        }
        let valor = parseFloat(prompt(`Digite o valor para alterar o preço: `))
        while(isNaN(valor)){
            console.log(`Valor inválido!`);
            valor = parseFloat(prompt(`Digite o valor para alterar o preço: `));
        }

        const novoPreco = produto.preco + valor;
        if(novoPreco <= 0){
            console.log('O preço não pode ficar vazio');
            return;
        }
        produto.preco = novoPreco;
         console.log('Preço atualizado: ');
         produto.mostrarInfo();
    }
    excluirProduto(){
        const codigo = prompt('Digite o código do produto para excluir: ')
        const index = this.produtos.findIndex(p => p.codigo === codigo);
        if ( index === -1){
            console.log('Produto não encontrado!');
            return;
        }
        this.produtos.splice(index, 1);
        console.log('Produto ecluído com Sucesso!');
    }
    menu(){
        let opcao = 0 
        while(opcao !== 6){
            console.log(`
            ======MENU DE PROTUDOS======
            1  - Adicionar produto
            2  - Listar produtos
            3  - Buscar produto pelo código
            4  - Alterar preço do produto
            5  - Excluir preço do produto
            6  - Sair     
            `);
            opcao = parseInt(prompt('Escolha uma opção: '));
            switch(opcao){
                case 1:
                    this.adicionarProduto();
                    break;
                case 2:
                    this.listarProduto();
                    break;
                case 3: 
                    this.buscarProduto();
                    break;
                case 4:
                    this.alterarPreco();
                    break;
                case 5:
                    this.excluirProduto();
                    break;
                case 6:
                    console.log('Saindo do sistema. Até logo!');
                    break;
                default:
                    console.log('Opção inválida! Tente novamente.');
            }
        }
    }
}
console.log('=== Sistema de Cadastro de Produtos ===');
const sistema = new SistemaProdutos();
sistema.menu(); 