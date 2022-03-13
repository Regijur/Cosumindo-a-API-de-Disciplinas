# Consumindo API

### Considerações iniciais
Anteriormente eu criei uma API que retorna por padrão um **JSON** com atributos **Disciplina** e **Assuntos**, basicamente um objeto que lista algumas disciplinas e as relaciona com os conteúdos estudados pela mesma.

Para mais informações sobre a minha **API de Disciplinas** [acesse o repositório clicando aqui](https://github.com/Regijur/Implementando-API-de-Disciplinas-e-Assuntos-e-Rotas-do-Servidor)

### Sobre o projeto
O atual projeto consiste no desenvolvimento de site que consome a [**API**](https://github.com/Regijur/Implementando-API-de-Disciplinas-e-Assuntos-e-Rotas-do-Servidor) já citada. O site é, basicamente, composto de uma tabela com as disciplinas e os assuntos.

O intuito principal é compreender como funcionam os tipos de requisição web, para isso utilizei a **API** como um tipo de banco de dados.

No site existem as seguintes funionalidades

Nome da Ação|Método|Descrição
:------------:|:-----:|----
Atualizar Tabela|GET|Há um botão na página que ao ser clicado atualiza a tabela
Adicionar Disciplina|POST|Há um formulário que ao ser preenchido adiciona uma disciplina na **API**
Atualizar Disciplina|PUT|Há um formulário que ao ser preenchido e submetido atualiza uma disciplina na **API**
Remover Disciplina | DELETE | Pressionar o botão de deletar da página a disciplina especificada no formulário de remoção é removida da **API**

Desenvolvido por [**Reginaldo Mota (O Régis)**](https://oregis.dev.br)
