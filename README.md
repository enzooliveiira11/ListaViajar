Lista de Lugares para Viajar
Tema Recebido
Este projeto consiste em uma aplicação web para gerenciar uma lista de lugares para viajar. Utilizando a biblioteca React, a aplicação aborda conceitos de componentes, props e hooks.

Estrutura do Projeto
O projeto está organizado da seguinte forma:

java

listaviajar/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── PlaceForm.js
│   │   ├── PlaceList.js
│   │   └── PlaceItem.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
└── package.json
Tecnologias Utilizadas
React
CSS
Funcionalidades
Adicionar novos lugares através de um formulário
Listar os lugares adicionados
Editar e remover lugares da lista
Requisitos
Para rodar a aplicação, você precisa ter o Node.js instalado.

Instruções de Instalação e Uso
Clone o repositório:

bash
git clone <URL do repositório>
cd listaviajar
Instale as dependências:

bash
npm install
Inicie a aplicação:

bash
npm start
Acesse a aplicação:
Abra o navegador e acesse http://localhost:3000.

Componentes
App.js
O componente principal que gerencia a aplicação. Ele mantém o estado dos lugares e define as funções para adicionar, atualizar e remover lugares.

PlaceForm.js
Componente responsável por renderizar o formulário para adicionar novos lugares. Utiliza um estado local para controlar o valor do campo de entrada. Recebe uma função como prop para adicionar o novo lugar ao estado da aplicação.

PlaceList.js
Componente responsável por renderizar a lista de lugares adicionados. Recebe como props a lista de lugares e as funções para atualizar e remover lugares.

PlaceItem.js
Componente responsável por renderizar cada item individual da lista de lugares. Permite editar o nome do lugar e removê-lo da lista, utilizando funções passadas via props.

Estilos
Os estilos da aplicação estão definidos no arquivo styles.css. Este arquivo inclui a configuração de layout, cores e responsividade para garantir que a aplicação seja visualmente agradável e utilizável em diferentes tamanhos de tela.