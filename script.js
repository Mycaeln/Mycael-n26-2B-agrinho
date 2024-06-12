const places = [
    { name: "Serra da Mantiqueira", description: "Um belo lugar com montanhas e natureza exuberante.", region: "Sudeste" },
    { name: "Chapada Diamantina", description: "Paisagens incríveis com cachoeiras e trilhas.", region: "Nordeste" },
    { name: "Serra Gaúcha", description: "Conhecida pelo clima frio e pelas vinícolas.", region: "Sul" },
    { name: "Pantanal", description: "Ideal para quem gosta de observar a vida selvagem.", region: "Centro-Oeste" },
    { name: "Amazônia", description: "A maior floresta tropical do mundo, com biodiversidade impressionante.", region: "Norte" }
];

const hotels = [
    { name: "Hotel Fazenda Boa Vista", location: "Serra da Mantiqueira" },
    { name: "Pousada Casa de Jorge", location: "Chapada Diamantina" },
    { name: "Hotel & Spa do Vinho", location: "Serra Gaúcha" },
    { name: "Hotel Sesc Porto Cercado", location: "Pantanal" },
    { name: "Amazon Eco Lodge", location: "Amazônia" }
];

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    const filteredPlaces = places.filter(place => 
        place.name.toLowerCase().includes(query) || place.region.toLowerCase().includes(query)
    );
    
    if (filteredPlaces.length > 0) {
        filteredPlaces.forEach(place => {
            const placeElement = document.createElement('div');
            placeElement.classList.add('place');
            placeElement.innerHTML = `<h3>${place.name}</h3><p>${place.description}</p><p><strong>Região:</strong> ${place.region}</p>`;
            results.appendChild(placeElement);
        });
    } else {
        results.innerHTML = '<p>Nenhum lugar encontrado.</p>';
    }
});

document.getElementById('hotelSearchButton').addEventListener('click', function() {
    const query = document.getElementById('hotelSearchInput').value.toLowerCase();
    const hotelResults = document.getElementById('hotelResults');
    hotelResults.innerHTML = '';

    const filteredHotels = hotels.filter(hotel => 
        hotel.name.toLowerCase().includes(query) || hotel.location.toLowerCase().includes(query)
    );
    
    if (filteredHotels.length > 0) {
        filteredHotels.forEach(hotel => {
            const hotelElement = document.createElement('div');
            hotelElement.classList.add('hotel');
            hotelElement.innerHTML = `<h3>${hotel.name}</h3><p><strong>Localidade:</strong> ${hotel.location}</p>`;
            hotelResults.appendChild(hotelElement);
        });
    } else {
        hotelResults.innerHTML = '<p>Nenhum hotel encontrado.</p>';
    }
});