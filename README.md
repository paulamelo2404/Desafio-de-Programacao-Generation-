## 🎯 Desafio de Programação - Remoção de Duplicatas em TypeScript

<div align="left">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

## 📋 Sobre o Projeto

Implementação em TypeScript para remoção de elementos duplicados em arrays, utilizando Generics para garantir tipagem segura e Programação Orientada a Objetos.

## ✨ Funcionalidades

- ✅ Remoção de duplicatas usando Generics
- 🔄 Interface interativa via terminal
- 🎯 Tipagem estática com TypeScript
- 📊 Processamento de arrays mistos (números, strings)

## 🛠️ Tecnologias Utilizadas
- TypeScript
- Node.js
- readline-sync

## 📁 Estrutura do Projeto
````
src/
├── ArraySimples.ts    # Classe principal com Generics
├── main.ts           # Aplicação principal
````

## 🚀 Como Executar

Pré-requisitos
- Node.js
- TypeScript

### Instalação e Execução
Clone o repositório

- bash
git clone https://github.com/paulameio2404/Desafio-de-Programacao-Generation-.git
cd Desafio-de-Programacao-Generation-
Instale as dependências

- bash
npm install
Compile e execute

- bash
npx tsc
node dist/main.js

## 💻 Como Usar

Ao executar o programa, digite os elementos separados por vírgula:


Digite os elementos do array (separados por vírgula) e aperte enter para concluir:
1, 2, 2, 3, maçã, banana, maçã


Saída:
- Array original: [1, 2, 2, 3, 'maçã', 'banana', 'maçã']

- Array sem duplicatas: [1, 2, 3, 'maçã', 'banana']

## 🎯 Características Técnicas

- Classe Genérica: ArraySimples<T> funciona com qualquer tipo

- Algoritmo Eficiente: Usa filter + indexOf para remover duplicatas

- Preservação de Tipos: Converte números automaticamente, mantém strings

- Entrada Interativa: Interface amigável com o usuário

## 👨‍💻 Autor

paulameio2404 - GitHub Profile

<div align="left">
⭐️ Desenvolvido como parte do Desafio de Programação Generation

</div>

## 📝 Observações
O projeto demonstra conceitos fundamentais de:

Generics em TypeScript

POO com classes

Manipulação de arrays

Interação com usuário via terminal
