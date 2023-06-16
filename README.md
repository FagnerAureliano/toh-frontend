# TohFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

Este é um projeto Angular para gerenciar uma lista de heróis, onde você pode fazer login, listar os heróis, cadastrar, alterar e excluí-los. Existem duas listagens disponíveis: uma com todos os heróis e outra com os heróis mais acessados. O projeto utiliza as seguintes bibliotecas:<br>

## Angular Material: 
Uma biblioteca de componentes UI prontos para uso, seguindo as diretrizes de Material Design.
## Flex Layout: 
Um poderoso sistema de layout flexível para o Angular.
## Font Awesome: 
Uma biblioteca de ícones vetoriais prontos para uso em seus projetos.
## Compodoc: 
Uma ferramenta de documentação para projetos Angular.
<br>
### Pré-requisitos
Antes de executar o projeto, verifique se o seguinte software está instalado em sua máquina:

Node.js: versão 16.x ou superior
Angular CLI: versão 16.x ou superior
Instalação
Siga as etapas abaixo para executar o projeto em seu ambiente local:

Clone este repositório para o seu diretório local:
``` 
git clone https://github.com/seu-usuario/toh-frontend.git
```
Navegue até o diretório do projeto:
```
cd toh-frontend
```
Instale as dependências do projeto usando o npm:

```
npm install
```
Executando o aplicativo
Após concluir a instalação, você pode executar o aplicativo com o seguinte comando:

```
ng serve

npm run api
```
O aplicativo estará disponível em http://localhost:4200/ no seu navegador.

Uso
Login
Na página inicial, você será solicitado a fazer login. Insira suas credenciais válidas para acessar o sistema (qualquer senha de no mínimo 10 caracteres).

Listagem de Heróis
Após fazer login com sucesso, você será redirecionado para a página de listagem de heróis, onde poderá visualizar todos os heróis cadastrados.

Cadastro de Heróis
Na página de listagem de heróis, você encontrará um botão "Cadastrar Herói". Clique nele para ser redirecionado para a página de cadastro. Preencha todos os campos obrigatórios e clique em "Salvar" para adicionar um novo herói à lista.

Edição de Heróis
Na página de listagem de heróis, você pode editar um herói existente clicando no botão de edição (geralmente um lápis ou ícone de lápis). Isso o levará à página de edição, onde você pode fazer as alterações necessárias nos detalhes do herói e salvá-las.

Exclusão de Heróis
Na página de listagem de heróis, você pode excluir um herói clicando no botão de exclusão (geralmente um ícone de lixeira). Isso removerá o herói da lista.

Listagem de Heróis Mais Acessados
Na página de listagem de heróis, você encontrará uma guia ou filtro para exibir a lista dos heróis mais acessados. Clique nele para alternar entre a visualização de todos os heróis e os heróis mais acessados.


## Documentação
Para gerar a documentação do projeto utilizando o Compodoc, execute o seguinte comando:

```
npm run compodoc:build-and-serve
```
E acesse pela porta que aparece no terminal
<br>
<br> 

[![DeepScan grade](https://deepscan.io/api/teams/21404/projects/24830/branches/767957/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21404&pid=24830&bid=767957)
