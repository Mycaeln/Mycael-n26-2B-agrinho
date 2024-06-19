document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de resultados de hotéis
    const hotels = [
        { name: "Hotel Exemplo 1", address: "Rua da Flora, 123", rating: "4.5" },
        { name: "Hotel Exemplo 2", address: "Avenida Floriano, 456", rating: "4.0" },
        { name: "Hotel Exemplo 3", address: "Praça das Arvores, 789", rating: "3.5" }
    ];

    // Captura o valor da pesquisa
    const query = document.getElementById('searchInput').value;

    // Seleciona o elemento de resultados
    const resultsDiv = document.getElementById('results');
    
    // Limpa resultados anteriores
    resultsDiv.innerHTML = '';

    // Adiciona uma mensagem de cabeçalho
    const header = document.createElement('h2');
    header.textContent = `Hotéis próximos de "${query}"`;
    resultsDiv.appendChild(header);

    // Adiciona os resultados dos hotéis
    hotels.forEach(hotel => {
        const hotelDiv = document.createElement('div');
        hotelDiv.className = 'hotel';
        
        const hotelName = document.createElement('h3');
        hotelName.textContent = hotel.name;
        hotelDiv.appendChild(hotelName);

        const hotelAddress = document.createElement('p');
        hotelAddress.textContent = `Endereço: ${hotel.address}`;
        hotelDiv.appendChild(hotelAddress);

        const hotelRating = document.createElement('p');
        hotelRating.textContent = `Avaliação: ${hotel.rating}`;
        hotelDiv.appendChild(hotelRating);

        resultsDiv.appendChild(hotelDiv);
    });
});