document.addEventListener('DOMContentLoaded', function () {
   const botaoBuscar = document.querySelector('a[href="#"]');
   const inputUsuario = document.querySelector('.form-inputs input');

   // Evento para clicar no botão
   botaoBuscar.addEventListener('click', buscarPalavra);

   // Evento para apertar "Enter"
   inputUsuario.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
         event.preventDefault();
         buscarPalavra();
      }
   });

   function buscarPalavra() {
      // Pega a palavra digitada pelo usuário
      const palavraUsuario = inputUsuario.value.trim().toLowerCase();

      // Abre o arquivo JSON
      fetch('../data/ok_data.json')
         .then(response => response.json())
         .then(data => {
            // Procura pela palavra nas chaves "Verbete"
            const resultados = data.filter(item => {
               for (let i = 1; i <= 5; i++) {
                  if (item[`Verbete${i}`] && item[`Verbete${i}`].toLowerCase().includes(palavraUsuario)) {
                     // Verifica se a palavra exata está presente na string do Verbete X
                     const verbetePalavra = item[`Verbete${i}`].toLowerCase().split(' ');
                     if (verbetePalavra.includes(palavraUsuario)) {
                        return true;
                     }
                  }
               }
               return false;
            });

            // Limpa os resultados anteriores
            const resultadosAnteriores = document.querySelectorAll('.resultado');
            resultadosAnteriores.forEach(resultado => resultado.remove());

            // Cria uma nova div para cada resultado encontrado
            resultados.forEach(resultado => {
               const divResultado = document.createElement('div');
               divResultado.classList.add('resultado');
               let verbetesHTML = '';

               // Itera sobre os Verbetes de 1 a 5
               for (let i = 1; i <= 5; i++) {
                  // Verifica se o Verbete atual existe e adiciona ao HTML
                  if (resultado[`Verbete${i}`]) {
                     verbetesHTML += `<p><strong>${i}</strong> ${resultado[`Verbete${i}`]}</p>`;
                  }
               }

               // Adiciona as informações de palavra, classe gramatical e entonação
               divResultado.innerHTML = `
                        <p><strong>${resultado.Palavra}</strong> (${resultado.Classe}) - ${resultado.Entonação}</p>
                        ${verbetesHTML}
                    `;

               document.body.appendChild(divResultado);
            });
         })
         .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
   }
});
