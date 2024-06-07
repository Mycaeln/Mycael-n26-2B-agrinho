const places = [
    { name: "Serra da Mantiqueira", description: "Um belo lugar com montanhas e natureza exuberante.", region: "Sudeste" },
    { name: "Chapada Diamantina", description: "Paisagens incríveis com cachoeiras e trilhas.", region: "Nordeste" },
    { name: "Serra Gaúcha", description: "Conhecida pelo clima frio e pelas vinícolas.", region: "Sul" },
    { name: "Pantanal", description: "Ideal para quem gosta de observar a vida selvagem.", region: "Centro-Oeste" },
    { name: "Amazônia", description: "A maior floresta tropical do mundo, com biodiversidade impressionante.", region: "Norte" }
];

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(query));
    
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