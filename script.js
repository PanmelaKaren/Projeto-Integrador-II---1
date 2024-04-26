document.getElementById('chamadoForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var formData = new FormData(this);

  var chamadoData = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      assunto: formData.get('assunto'),
      mensagem: formData.get('mensagem'),
      resposta: formData.get('resposta'),
      finalizado: formData.get('finalizado') === 'on' 
  };
  fetch('https://parseapi.back4app.com/classes/Mycustomclass', {
      method: 'POST',
      headers: {
          'X-Parse-Application-Id': 'RI1Za6hv7kRN84jaJT78T3nz2e880YnDLsrobLVZ', 
          'X-Parse-REST-API-Key': 'WsH1BJYEheydl73qLpqwLmvzDhUSnURwWSyaAamj', 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(chamadoData)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Sucesso:', data);
      alert('Chamado enviado com sucesso!');
  })
  .catch((error) => {
      console.error('Erro:', error);
      alert('Houve um erro ao enviar o chamado. Por favor, tente novamente.');
  });
});