# GEOki Jiten
Dicionário bilíngue com entradas do português brasileiro para o okinawano implementado em um sistema de busca com informações de entonação, glosa e classe gramatical.

Projeto associado ao <a href="https://www.geoki.site" target="_blank" rel="nopener noreferrer">Grupo de Estudos Okinawanos</a> da Universidade de São Paulo (GEOki-USP), desenvolvido por <a href="https://lisanju.github.io" target="_blank" rel="noopener noreferrer">Elisa Anju Lardapide</a>.

## Sobre o database

O database utilizado pelo GEOki Jiten é de autoria do National Institute for Japanese Language and Linguistics (NINJAL) - 国立国語研究所資料集5 - 沖縄語辞典 (2001), disponibilizado publicamente através da licença Creative Commons 4.0, sendo possível acessá-lo no endereço: <https://mmsrv.ninjal.ac.jp/okinawago/>.

O database conta com 14549 entradas da variedade shuri da língua okinawana, que é uma importante variedade linguística representante do arquipélago ryukyuano, falada originalmente na antiga capital de Okinawa - atual cidade de Naha.

Os dados do database são divididos em:

- Palavra em okinawano;
- Entonação;
- Classe gramatical;
- Glosa (variando entre 1 a 5 glosas para cada palavra);
- Observação sobre a palavra.

Não foram feitas alterações sobre a grafia do léxico, mantendo a transcrição fonológica realizada pelos autores.

## Classes Gramaticais

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

## Pronúncia e Entonação

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

**Em okinawano só há contraste fonológico em nível prosódico para dois tipos de entonação:**

<table>
  <tr>
    <th>Entonação</th>
    <td>Palavra átona</td>
    <td>Palavra de tom decrescente</td>
  </tr>
</table>

- Palavras átonas começam com a primeira sílaba em tom médio ou baixo, mas terminam com um tom crescente nas últimas sílabas (?ami ↑ - chuva);
- Palavras com tom decrescente começam com a primeira sílaba em tom alto, mas terminam com um tom decrescente a partir da segunda sílaba - caso a palavra tenha apenas duas sílabas, a primeira é pronunciada em tom alto e a segunda em tom baixo (nacigwii ↓ - choro).
