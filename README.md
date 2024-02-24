# GEOki Jiten (v1.1.2-beta)
Dicionário bilíngue do português brasileiro para o okinawano implementado em um sistema de busca com informações de entonação, verbete e classe gramatical.

Projeto associado ao <a href="https://www.geoki.site">Grupo de Estudos Okinawanos</a> da Universidade de São Paulo (GEOki-USP), desenvolvido pela linguista <a href="https://lisanju.github.io">Elisa Anju Lardapide</a>.

## Índice

1. [Sobre o database](https://github.com/Lisanju/geoki-jiten/tree/main?tab=readme-ov-file#sobre-o-database);
2. [Metodologia para o desenvolvimento do GEOki Jiten](https://github.com/Lisanju/geoki-jiten/tree/main?tab=readme-ov-file#metodologia-para-o-desenvolvimento-do-geoki-jiten);
3. [Classes gramaticais](https://github.com/Lisanju/geoki-jiten/tree/main?tab=readme-ov-file#classes-gramaticais);
4. [Pronúncia e entonação](https://github.com/Lisanju/geoki-jiten/tree/main?tab=readme-ov-file#pronúncia-e-entonação).

## Sobre o database

O database utilizado pelo GEOki Jiten é de autoria do National Institute for Japanese Language and Linguistics (NINJAL) - 国立国語研究所資料集5 - 沖縄語辞典 (2001), disponibilizado publicamente através da licença Creative Commons 4.0, sendo possível acessá-lo no endereço: <https://mmsrv.ninjal.ac.jp/okinawago/>.

O database conta com 14549 entradas da variedade shuri da língua okinawana, que é uma importante variedade linguística representante do arquipélago ryukyuano, falada originalmente na antiga capital de Okinawa - atual cidade de Naha.

Não foram feitas alterações sobre a grafia do léxico, mantendo a transcrição fonológica realizada pelos autores.

## Metodologia para o desenvolvimento do GEOki Jiten

O desenvolvimento do dicionário foi dividido em três etapas:

- Tratamento do database;
- Tradução e revisão;
- Implementação do site.

### Etapa 1 - Tratamento do database

O database utilizado foi o "(本文篇) 沖縄首里方言辞典 - 沖縄語辞典 (2001)", disponível gratuitamente no repositório de databases do NINJAL em formato Excel (extensão .xlsx).

O arquivo é dividido em 14450 linhas e 12 colunas. Com exceção da primeira linha (que contém os nomes das colunas), cada linha corresponde a uma entrada lexical e cada coluna corresponde a: 1. Página no livro do dicionário; 2. Entrada lexical; 3. Entonação; 4. Classe gramatical; 5. Tipo de linguagem (literária etc.); 6. Suplemento; 7. Verbete I; 8. Verbete II; 9. Verbete III; 10. Verbete IV; 11. Verbete V; 12. Observação.

Para o tratamento do database, primeiro foi criada uma cópia do arquivo original .xlsx, chamada "ok_data.xlsx". Em seguida, foram retiradas da cópia as colunas "1", "5" e "6" - ou seja, apenas foram mantidas as informações de entrada lexical, entonação, classe gramatical, verbete e observação.

Após a exclusão das colunas, iniciei o processo de conversão de extensão do arquivo "ok_data.xlsx" para "ok_data.json". Para isso, programei um algoritmo em Python, através das bibliotecas jsons e openpyxl, que permitiu a manipulação automatizada do arquivo Excel e a conversão de .xlsx para .json.

Cada linha da planilha Excel se tornou um conjunto de dados em JSON, assim como cada coluna em Excel se tornou uma chave em JSON. O valor de cada célula das colunas em Excel se tornaram dados em JSON, como no exemplo a seguir:

**EXCEL**
<table>
  <tr>
    <th>Palavra</th>
    <th>Entonação</th>
    <th>Classe</th>
    <th>Verbete 1</th>
    <th>Verbete 2</th>
    <th>Verbete 3</th>
    <th>Verbete 4</th>
    <th>Verbete 5</th>
    <th>Observação</th>
  </tr>
  <tr>
    <td>?aa</td>
    <td>Átona</td>
    <td>Interjeição</td>
    <td>Ah. O som feito ao experimentar algo profundamente</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

**JSON**
```
    {
        "Palavra": "?aa",
        "Entonação": "Átona",
        "Classe": "Interjeição",
        "Verbete1": "Ah. O som feito ao experimentar algo profundamente.",
        "Verbete2": null,
        "Verbete3": null,
        "Verbete4": null,
        "Verbete5": null,
        "Observações": null
    }
```

Após a conversão do arquivo inteiro para "ok_data.json", passei para a próxima etapa.

### Etapa 2 - Tradução e revisão

Originalmente, as informações sobre o okinawano no database estavam em japonês. Porém, para os fins do projeto, seria necessário ter essas informações disponíveis em português brasileiro. O arquivo, no entanto, conta com mais de 10000 sentenças em japonês para serem traduzidas - o que seria um grande trabalho para este projeto independente, ainda mais quando se considera que não tenho fundos para contratar mais tradutores.

Por isso, optei por desenvolver um algoritmo em Python que, através da biblioteca translators, traduziu automaticamente todos os dados do japonês para o português. O motor de tradução automática utilizado foi o Baidu. As traduções, no entanto, contam com diversos problemas:

- Misturam variedades do português brasileiro com o português europeu;
- Apresentam erros derivados de um raciocínio estatístico que desconsidera regras gramaticais e de transformação em linguagem natural;
- Dependeram de pouco ou nenhum conhecimento epistêmico, resultando em traduções literais e/ou descontextualizadas;
- Ineficiência em processar caracteres especiais.

Por esses motivos, é mais do que essencial uma etapa manual de revisão e quality-check da tradução. Esse trabalho manual é realizado por mim, linguista por formação e com experiência em tradução do japonês para o português brasileiro. Para a realização do trabalho, então, utilizei o software de tradução memoQ, que permite um melhor gerenciamento do arquivo de tradução, quality-check automatizado e fácil customização do arquivo. O GEOki Jiten está na versão beta 1.1.2, é importante notar que o processo de revisão e quality-check ainda está em andamento - por se tratar de um trabalho não-financiado e manual realizado por apenas uma pessoa, para que se obtenha um resultado de qualidade será necessário bastante tempo. Não há previsão para a versão final do GEOki Jiten.

### Etapa 3 - Implementação do site

Após o tratamento do database e da sua tradução, iniciei a etapa de implementação do site. A ideia é que o GEOki Jiten possa ser facilmente acessado em qualquer dispositivo que esteja conectado na Internet. Por isso, um website me pareceu ser a melhor escolha de implementação. Trata-se de um site simples, em que as tecnologias utilizadas foram: HTML, CSS, JavaScript, JSON, Bootstrap e GitHub Pages.

O site é composto por uma única página (index.html) de estrutura simples, que contém blocos para o logo do site, para a barra de pesquisa e para o rodapé. O arquivo do site, além da página "index.html", é subdividido em outras 4 páginas: data, styles, scripts e imgs:

- A pasta data contém o database "ok_data.json" traduzido com os dados da língua okinawana;
- A pasta styles contém as folhas de estilo "style.css" e "bootstrap.min.css", em que "style.css" modifica diretamente o design da página "index.html" e "bootstrap.min.css" retorna um modelo de licença Bootstrap;
- A pasta scripts contém os scripts "script.js" e "bootstrap.bundle.min.js", em que "boostrap.bundle.min.js" retorna um modelo de script de licença Bootstrap e "script.js" possui a programação em JavaScript para interação do usuário com o site, gerenciamento da palavra digitada pelo usuário, busca pela palavra na base de dados "ok_data.json" e modificação da página "index.html" para a exibição das informações sobre a palavra pesquisada;
- A pasta imgs contém todos os arquivos de imagens utilizados pelo site em formato .png.

Com a estruturação e programação do site finalizadas, hospedei o site através da plataforma GitHub Pages, que oferece um serviço de hosting gratuito e consideravelmente seguro quando em comparação com outros serviços. Ainda há alterações necessárias para serem feitas no site, como: modificar a exibição do rodapé, incluir uma seção de ajuda com informações linguísticas do okinawano, ajustar a interface do site no modo celular, estilizar as caixas de cada resultado de pesquisa.

Essa foi a metodologia utilizada para o desenvolvimento do GEOki Jiten. Note que o projeto ainda está em desenvolvimento. Aceito qualquer sugestão que puderem oferecer, mas peço que, por favor, enviem as sugestões pelo e-mail "lisanju.contato@gmail.com", escrevendo no título do e-mail "GEOki Jiten Sugestão". Evite utilizar os chats do Instagram, WhatsApp, Discord, Twitter ou qualquer outro serviço que não seja pelo e-mail. Trata-se de uma questão de conveniência e organização.

## Classes gramaticais

As nomenclaturas utilizadas para se referir às classes, funções e expressões gramaticais das palavras do database são:

<table>
  <tr>
    <td>Substantivo</td>
    <td>Advérbio</td>
    <td>Afixo</td>
    <td>Prefixo</td>
    <td>Partícula auxiliar</td>
    <td>Sufixo</td>
  </tr>
  <tr>
    <td>Adjunto adnominal</td>
    <td>Verbo transitivo</td>
    <td>Partícula gramatical</td>
    <td>Verbo</td>
    <td>Função de partícula</td>
    <td>Expressão</td>
  </tr>
    <tr>
      <td>Onomatopeia</td>
      <td>Adjetivo</td>
      <td>Verbo intransitivo</td>
      <td>Conjunção</td>
      <td>Irregular</td>
      <td>Formulaico</td>
  </tr>
    <tr>
      <td>Grupo de (CLASSE)</td>
      <td>Negação de (CLASSE)</td>
      <td>Função igual a (CLASSE)</td>
      <td></td>
      <td></td>
      <td></td>
  </tr>
</table>

## Pronúncia e entonação

Para auxiliar no uso do dicionário GEOki Jiten, há a seguir uma apresentação dos sons que compõem o inventário fonológico do okinawano, bem como suas grafias.

<table>
  <tr>
    <th>Vogais</th>
    <td>i</td>
    <td>e</td>
    <td>a</td>
    <td>o</td>
    <td>u</td>
  </tr>
  <tr>
    <th>Semivogais</th>
    <td>j</td>
    <td>w</td>
  </tr>
</table>

- Diferentemente do japonês-padrão, o som de "u" é pronunciado com os lábios arredondados (como no português brasileiro);
- O som de "o" é pronunciado como no japonês-padrão ou um pouco mais longo;
- Salvo exceções, "e" e "o" são sempre pronunciadas como vogais longas;
- Os sons "e" e "o" são pronunciadas como vogais curtas quando aparecem antes de "N" e "Q", ou seja, "eN", "eQ", "oN" e "oQ";
- A semivogal "j" aparece antes das vogais "a", "u" e "o" e antes das consoantes "h", "?", " ’ ", "p", "b", "m" e "n";
- A semivogal "w" aparece antes das vogais "i" e "e" e antes das consoantes "h", "?", " ’ ", "k" e "g".

--

<table>
  <tr>
    <th>Consoantes</th>
    <td>h</td>
    <td>?</td>
    <td>’</td>
    <td>k</td>
    <td>g</td>
  </tr>
  <tr>
    <th></th>
    <td>p</td>
    <td>b</td>
    <td>m</td>
    <td>s</td>
    <td>c</td>
  </tr>
  <tr>
    <th></th>
    <td>z</td>
    <td>n</td>
    <td>r</td>
    <td>t</td>
    <td>d</td>
  </tr>
</table>

- As consoantes com grafia "ş", "ç" e "ᶎ" eram utilizadas por samurais;
- O som "?" é contrastante, ou seja, sua presença antes de uma vogal altera o significado da palavra (?utu - som / ’utu - marido);
- As sílabas " ’i" e " ’u" podem ser escritas como "ji" e "wu" respectivamente;
- A consoante "?" pode aparecer antes de "N" (?Nmi - ameixa).

--

<table>
  <tr>
    <th>Outros sons</th>
    <td>N</td>
    <td>Q</td>
  </tr>
</table>

- O sons "N" e "Q" são consideravelmente equivalentes ao "ン" e "ッ" do japonês-padrão respectivamente.

--

<table>
  <tr>
    <th>Sílabas</th>
    <td>hi</td>
    <td>hee</td>
    <td>ha</td>
    <td>hoo</td>
    <td>hu</td>
    <td>hja</td>
    <td>hjoo</td>
    <td>hju</td>
    <td>hwi</td>
    <td>hwee</td>
    <td>hwa</td>
  </tr>
  <tr>
    <th></th>
    <td>?i</td>
    <td>?ee</td>
    <td>?a</td>
    <td>?oo</td>
    <td>?u</td>
    <td>?ja</td>
    <td>?joo</td>
    <td>?ju</td>
    <td>?wi</td>
    <td>?wee</td>
    <td>?wa</td>
  </tr>
  <tr>
    <th></th>
    <td>’i</td>
    <td>’ee</td>
    <td></td>
    <td>’oo</td>
    <td>’u</td>
    <td>’ja</td>
    <td>’joo</td>
    <td>’ju</td>
    <td>’wi</td>
    <td>’wee</td>
    <td>’wa</td>
  </tr>
  <tr>
    <th></th>
    <td>ki</td>
    <td>kee</td>
    <td>ka</td>
    <td>ko</td>
    <td>ku</td>
    <td></td>
    <td></td>
    <td></td>
    <td>kwi</td>
    <td>kwee</td>
    <td>kwa</td>
  </tr>
  <tr>
    <th></th>
    <td>gi</td>
    <td>gee</td>
    <td>ga</td>
    <td>goo</td>
    <td>gu</td>
    <td></td>
    <td></td>
    <td></td>
    <td>gwi</td>
    <td>gwee</td>
    <td>gwa</td>
  </tr>
  <tr>
    <th></th>
    <td>pi</td>
    <td>pee</td>
    <td>pa</td>
    <td>poo</td>
    <td>pu</td>
    <td>pja</td>
    <td>pjoo</td>
    <td>pju</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>bi</td>
    <td>bee</td>
    <td>ba</td>
    <td>boo</td>
    <td>bu</td>
    <td>bja</td>
    <td>bjoo</td>
    <td>bju</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>mi</td>
    <td>mee</td>
    <td>ma</td>
    <td>moo</td>
    <td>mu</td>
    <td>mja</td>
    <td>mjoo</td>
    <td>mju</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>si</td>
    <td>see</td>
    <td>sa</td>
    <td>soo</td>
    <td>su</td>
    <td>sja</td>
    <td>sjoo</td>
    <td>sju</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>şi</td>
    <td>şee</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>ci</td>
    <td>cee</td>
    <td>ca</td>
    <td>coo</td>
    <td>cu</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>çi</td>
    <td>çee</td>
    <td>ça</td>
    <td>çoo</td>
    <td>çu</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>zi</td>
    <td>zee</td>
    <td>za</td>
    <td>zoo</td>
    <td>zu</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>ᶎi</td>
    <td>ᶎee</td>
    <td>ᶎa</td>
    <td>ᶎoo</td>
    <td>ᶎu</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>ni</td>
    <td>nee</td>
    <td>na</td>
    <td>noo</td>
    <td>nu</td>
    <td>nja</td>
    <td>njoo</td>
    <td>nju</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>ri</td>
    <td>ree</td>
    <td>ra</td>
    <td>roo</td>
    <td>ru</td>
    <td>rja</td>
    <td>rjoo</td>
    <td>rju</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>ti</td>
    <td>tee</td>
    <td>ta</td>
    <td>too</td>
    <td>tu</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th></th>
    <td>di</td>
    <td>dee</td>
    <td>da</td>
    <td>doo</td>
    <td>du</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

--

Em okinawano só há contraste fonológico em nível prosódico para dois tipos de entonação:

<table>
  <tr>
    <th>Entonação</th>
    <td>Palavra átona</td>
    <td>Palavra de tom decrescente</td>
  </tr>
</table>

- Palavras átonas começam com a primeira sílaba em tom médio ou baixo, mas terminam com um tom crescente nas últimas sílabas (?ami ↑ - chuva);
- Palavras com tom decrescente começam com a primeira sílaba em tom alto, mas terminam com um tom decrescente a partir da segunda sílaba - caso a palavra tenha apenas duas sílabas, a primeira é pronunciada em tom alto e a segunda em tom baixo (nacigwii ↓ - choro).
