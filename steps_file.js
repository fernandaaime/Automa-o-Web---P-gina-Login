// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Função para capturar cookie
    async captureCookie() {
      try {
        const cookie = await this.grabCookie();  // Captura o cookie
        console.log('Cookie:', cookie);          // Faz algo com o cookie
      } catch (err) {
        console.error('Erro ao capturar cookie:', err);  // Tratamento de erro
      }
    },

  });
}

