# Sistema de Corrida Mario Kart


## Introdução

Este projeto é um sistema de corrida baseado no jogo Mario Kart, desenvolvido utilizando Node.js e React. Cada personagem possui habilidades específicas, e a corrida é composta por 5 voltas onde eventos como retas, curvas e confrontos entre os personagens são sorteados a cada volta. O sistema calcula os resultados com base nas habilidades de cada personagem e no valor de um dado.

## Propósito do Projeto

Este projeto foi criado com o objetivo de estudar e aplicar as stacks de **Node.js**, **React** em um cenário de simulação. A ideia foi explorar a integração entre frontend e backend, lidando com lógica de simulação e interfaces dinâmicas.

Repositório original do projeto: [Mario Kart Node - Web.dio](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart)

## Tecnologias utilizadas
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Funcionalidades

- Escolha de personagens com diferentes habilidades.
- Simulação de uma corrida com 5 voltas.
- Cada volta pode conter uma reta, curva ou confronto.
- Comparação de habilidades entre os personagens em diferentes situações:
  - **Reta**: Velocidade + valor do dado.
  - **Curva**: Manobrabilidade + valor do dado.
  - **Confronto**: Poder do personagem.
- Visualização dos valores obtidos em cada volta e nomeação do vencedor.

## Estrutura do projeto

- **Backend**: Desenvolvido com Node.js, gerencia a lógica da corrida, o sorteio dos eventos a cada volta e a simulação dos resultados.
- **Frontend**: Desenvolvido com React, apresenta a interface gráfica, onde os jogadores podem escolher personagens e assistir a corrida acontecer em tempo real.

## Demonstração
![Simulação de Corrida](https://github.com/hiurydev/mariokart-project/blob/main/mkart_frontend/public/gifs/preview.gif?raw=true)
