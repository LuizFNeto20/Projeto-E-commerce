
# Projeto-E-commerce

Projeto front-end da escola DNC de um e-commerce de games.


## Documentação

O projeto consiste em três telas e dois modais:

```1ª tela```

A primeira tela é a tela de login, que possui um formulário e foi feita função de validação genérica que pode ser reutilizada em outros formulários sem modificação. Além disso, essa tela conta com um componente chamado <HeaderMenu>, que é alterado de acordo com a página inserida.

```2ª tela```

A segunda tela é uma tela inicial, que apresenta uma listagem de produtos da loja, construída com o uso da função ```map``` com um ```mock``` para definir os produtos que irão aparecer. Essa tela também utiliza o componente <HeaderMenu>, porém com uma diferença: é passado um booleano como props, permitindo que o mesmo componente seja utilizado em diferentes partes do projeto de forma versátil e possui um componente de rodapé.

```3ª tela```

Os produtos listados na tela inicial, possuem um botão que quando clicado, aparece a terceira tela. Essa tela contém as informações do produto que estão presentes no mock, além de vários componentes, como: <HeaderMenu> - com o booleano passado como props, um componente de rodapé e um componente que armazena as informações do produto para serem reutilizadas posteriormente. Este último componente apresenta um objeto simples que traduz o nome das cores presentes no mock, além de uma função que cria <div> de acordo com as cores que foram fornecidas.

A terceira tela também possui dois modais: o primeiro é o modal de finalização da compra, que apresenta as informações do produto novamente, enquanto o segundo é um formulário no qual o usuário pode inserir seus dados. Neste formulário, a função de validação presente na tela de login foi reutilizada.
