# NIETO - Assistente de Acessibilidade Política

## Descrição do Projeto

NIETO é um agente de Inteligência Artificial desenvolvido para Android que visa proteger cidadãos, especialmente idosos, contra desinformação e manipulações digitais relacionadas a direitos, leis e políticas públicas. O projeto tem como objetivo central aproximar a população das decisões legislativas, tornando a democracia mais compreensível, acessível e inclusiva.

## Documentação completa

Acesso o arquivo `NIETO_documentacao` na raiz do projeto para visualizar a documentação completa e visual de todo o detalhamento do projeto.

## O Problema

A população brasileira, principalmente o público idoso e "mobile only", enfrenta barreiras significativas no acesso e compreensão de informações sobre políticas públicas, direitos e decisões legislativas. O uso intensivo de jargões técnicos e "juridiquês", combinado com a proliferação de desinformação política em plataformas digitais, dificulta a participação democrática efetiva desses cidadãos.

Além disso, a manipulação política através de conteúdos enganosos compromete a capacidade dos usuários de formarem opiniões informadas sobre questões que impactam diretamente suas vidas.

## A Solução

NIETO atua diretamente no dispositivo móvel do usuário, analisando notificações e conteúdos recebidos (mensagens, notícias, comunicados sobre projetos de lei) de forma local, garantindo privacidade e baixo consumo de dados. O sistema:

- Classifica riscos relacionados a desinformação política
- Traduz termos técnicos e jurídicos para linguagem simples e acessível
- Oferece microlições educativas alinhadas aos princípios de Media and Information Literacy (MIL/UNESCO)
- Alerta contatos de emergência quando identifica conteúdos potencialmente prejudiciais
- Promove o letramento digital focado em participação democrática

A interface foi desenvolvida com foco em acessibilidade, priorizando usabilidade para pessoas idosas e usuários com diferentes níveis de familiaridade tecnológica.

## Membros da Equipe

- Nataly de Sousa Cunha | nataly.cunha@sou.inteli.edu.br
- Mariana de Paula | mariana.souza@sou.inteli.edu.br
- Cecília Beatriz Galvão | cecilia.galvao@sou.inteli.edu.br
- Pablo de Azevedo | pablo.azevedo@sou.inteli.edu.br

## Tecnologias Utilizadas

- React 19.1.1
- React DOM 19.1.1
- Tailwind CSS 4.1.12
- JavaScript/JSX

## Configuração e Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nieto-hackas.git
cd nieto-hackas
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Acesse a aplicação em seu navegador:
```
http://localhost:3000
```

## Scripts Disponíveis

### `npm start`
Executa a aplicação em modo de desenvolvimento. A página será recarregada automaticamente ao fazer alterações no código.

### `npm test`
Inicia o test runner no modo interativo.

### `npm run build`
Compila a aplicação para produção na pasta `build`. O build está otimizado para melhor performance.

### `npm run eject`
**Atenção: esta operação é irreversível.**

Remove a abstração de configuração do Create React App, dando controle total sobre webpack, Babel, ESLint, etc.

## Uso

A aplicação apresenta um fluxo de onboarding intuitivo que guia o usuário através das seguintes etapas:

1. **Apresentação**: Introdução ao NIETO e seus objetivos
2. **Rede de Proteção**: Explicação do sistema de alertas para contatos de emergência
3. **Funcionamento**: Detalhamento de como o sistema analisa e explica conteúdos
4. **Configuração**: Seleção do tipo de usuário (Idoso ou Responsável)
5. **Cadastro**: Registro de informações pessoais e contatos de emergência
6. **Dashboard**: Interface principal com notificações, configurações de segurança e gestão de contatos

## Estrutura do Projeto

```
nieto-hackas/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── App.js
│   └── index.js
├── package.json
├── NIETO_documentacao.pdf
└── README.md
```

## Licença

Este projeto é licenciado sob a licença MIT - veja os detalhes abaixo:

```
MIT License

Copyright (c) 2025 NIETO Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
