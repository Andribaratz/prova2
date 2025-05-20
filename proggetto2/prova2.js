
    const parole = [];
    document.getElementById('aggiungiBtn').addEventListener('click', function() {
      const parola = document.getElementById('campoParola').value.trim();
      if(parola) {
        parole.push(parola);
        document.getElementById('campoParola').value = "";
      }
    });

    // Quando clicchi su "Mostra tutte le parole"
    document.getElementById('mostraBtn').addEventListener('click', function() {
      const listaDiv = document.getElementById('listaParole');
      if(parole.length > 0) {
        listaDiv.innerHTML = "<strong>Le parole che hai inserito sono:</strong><br>" + parole.join(", ");
      } else {
        listaDiv.textContent = "Non hai ancora inserito nessuna parola!";
      }
    });