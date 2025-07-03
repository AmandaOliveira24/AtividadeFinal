# 📦 Sistema de Cadastro de Produtos (Node.js)

Este projeto é um sistema simples de cadastro de produtos desenvolvido em **Node.js** para uso em ambiente de terminal. Ele permite adicionar, listar, buscar, atualizar e excluir produtos por meio de um menu interativo.

## 🚀 Funcionalidades

- Adicionar produto (com validação de código único e preço positivo)
- Listar todos os produtos cadastrados
- Buscar produto pelo código
- Alterar o preço do produto (soma ou subtração)
- Excluir produto pelo código
- Interface de menu no terminal

## 🧱 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) – para entrada de dados via terminal

## 📂 Estrutura

O projeto é composto por duas classes principais:

- **Produto**: representa um produto com nome, código e preço.
- **SistemaProdutos**: gerencia a lista de produtos e contém os métodos de manipulação.


