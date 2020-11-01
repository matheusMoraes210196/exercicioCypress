# Exercício de Cypress
## O que é:
Esse é um exercício de automação com o framework Cypress.

## Sobre a aplicação
<ul>
  <li><b>Qual aplicação foi usada para automação:</b> Para realizar os testes automatizado com o framework Cypress, usamos uma aplicação bem simples feita com React. - https://github.com/GitJMSeguradora/react-slingshot</li>
  <li><b>O faz a aplicação:</b> Com base nos valores informados nos campos, ela calcula se haverá ou não economia de combustível com a troca do veículo.
  <ul>
    <li><i>New Vehicle MPG</i> - Quantidade de milhas que o novo veículo faz com 1 galão de combustível</li> 
    <li><i>Trade-in MPG</i> - Quantidade de milhas que o veículo atual faz com 1 galão de combustível</li>
    <li><i>New Vehicle price per gallon</i> - Valor do galão de combustível para o novo veículo</li>
    <li><i>Trade-in price per gallon</i> - Valor do galão de combustível para o veículo atual</li>
    <li><i>Miles Driven</i> - Quantidade milhas que você costuma andar</li>
    <li><i>miles per</i> - Período para rodar a quantidade de milhas do campo anterior. (3 opções estão disponiveis: "week", "Month" ou "Year")</li>
  </ul>
</li>
  <li><b>Qual o retorno:</b> Como mencionado no item anterior a aplicação retorna se haverá ou não economia de combustível com a troca de veículo. Retornando a projeção em 3 período em 1 mês (Monthly), em 1 ano (1 Year) e em 3 anos (3 Year).</li>
</ul>

## Sobre o projeto de teste
### Modelagem
Dentro da pasta Modelagem temos um arquivo .xlsx onde temos os casos de teste modelados para as telas "Home", "Demo App" e "About". A escrita foi no modelo de BDD, com base em planilhas casos de teste de outras exeperiêncas.

### O que é preciso para executar o projeto:
Alem dos itens mencionados para montar o ambiente da aplicação precisamos de:
<ul>
  <li>instalar o Cypress
  <li>instalar o Allure Reports Plugin</li>
</ul>

### Comando para executar 
Uma das coisas que achei interessante, é a possibilidade criar scripts para facilitar os comandos no terminal.
<p><b><i>Você deve estar dentro da pasta do projeto de teste para executar esses comandos</i></b></p>
<ul>
  <li><b>npm run cy:run</b> - esse comando executa todos os testes do projeto.</li>
  <li><b>npm run allure:generate</b> - esse comando gera um report.</li>
  <li><b>npm run allure:open</b> - esse comando abre o relatório. (É recomendado usar esse comando, pois ao abrir manualmente o arquivo pode corromper alguma pagina.</li>
</ul>

### Estrutura do projeto
Alem das pastas padrões de um projeto Cypress, temos 4 pastas adicionais:
<ul>
  <li><b>allure-results</b> - Essa pasta é gerada quando executamos o comando <i>npm run cy:run</i>, ela guarda os resultados da execução.</li>
  <li><b>allure-report</b> - Essa pasta é gerada após o comando <i>npm run allure:generate</i>, ela o relatório é montado.</li>
  <li><b>integration/pageObjects</b> - Essa pasta é onde estão os elementos das telas, previamente mapeados para facilitar o reaproveitamento dos códigos.</li>
  <li><b>integration/tests</b> - Essa pasta é onde estão os arquivos <i>.spec.js</i> (os arquivos de teste propriamente dito)</li>
</ul>

## Opiniões sobre o Cypress 
<p> Não tenho conhecimento quase nenhum sobre javascript, e esse framework se mostrou muito simples e facil de usar. </>
<p> Alem de muito facil para configurar o ambiente e preparar o projeto para ser executado, o uso do mocha torna o desenvolvimento e a leitura dos codigo muito simples, mantendo a estruturação do arquivo de teste bem legivel. </p>
<p> É realmente simples gerar um relatório com o plugin Allure Reports, nesse projeto a configuração está bem simples, mas mesmo assim é possível visualizar um relatório bem detalhado.</p>
<p> Em linhas gerais, acho que é um ótimo framework para trabalhar, leve, simples de usar e completo em funcionalidades. </p>

## Atividades e tempo de trabalho: 
<table>
  <tr>
    <th>Dia</th>
    <th>Atividade</th>
    <th>Tempo atuando na atividade</th>
  </tr>
  <tr>
    <td>29/10/2020</td>
    <td>E-mail recebido as 18:55</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>29/10/2020</td>
    <td>Configuração do ambiente</td>
    <td>Total de 2 horas</td>
  </tr>
  <tr>
    <td>31/10/2020</td>
    <td>Entendimento da aplicação</td>
    <td>Total de 1 hora</td>
  </tr>
  <tr>
    <td>31/10/2020</td>
    <td>Aprendendo o Cypress</td>
    <td>Total de 3 horas</td>
  </tr>
  <tr>
    <td>31/10/2020</td>
    <td>Modelando os testes com base no entendimento</td>
    <td>Total de 1 hora</td>
  </tr>
  <tr>
    <td>01/11/2020</td>
    <td>Desenvolvimento dos scripts de automação</td>
    <td>Total de 5 horas</td>
  </tr>
  <tr>
    <td>01/11/2020</td>
    <td>Montagem do repositório</td>
    <td>Total de 2 horas</td>
  </tr>
</table>
