
document.onload = swal('Alerta', 'window.onload', 'success')

const searchHistory = [];
const searchInput = document.getElementById('searchText');
const searchHistoryContainer = document.getElementById('searchHistory');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', sendSearch);


function sendSearch(event) {
  const searchTerm = searchInput.value;
  const encodedSearchTerm = encodeURIComponent(searchTerm);

  fetch('/api/search/school/' + encodedSearchTerm, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Problema con la respuesta del servidor');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.innerHTML += `<span style="font-size: 30px;"><b>Prepa ${data.Preparatorias}</b> `;
    nuevoParrafo.innerHTML += "<br>";
  document.body.appendChild(nuevoParrafo);
  
    if (data.moodle === null) {
      const textoNoDisponible = document.createTextNode('');
      nuevoParrafo.appendChild(textoNoDisponible);
    } else {
      const enlaceMoodle = document.createElement('a');
      enlaceMoodle.href = data.Moodle;
      enlaceMoodle.textContent = 'Ingresa a Moodle ';
      enlaceMoodle.innerHTML += "<br>";
      enlaceMoodle.style.color = "black";
      enlaceMoodle.style.textDecoration = "none";
      enlaceMoodle.addEventListener('mouseover', (event) => {
        enlaceMoodle.style.color = "rgb(93, 173, 226)";
      })
      enlaceMoodle.addEventListener('mouseout', (event) => {
        enlaceMoodle.style.color = "rgb(81, 90, 90)";
      })
      nuevoParrafo.appendChild(enlaceMoodle);
    }
    
    const textoSIIAU = document.createElement('a');
textoSIIAU.href = data.Siiau;
textoSIIAU.textContent = ' Ingresa a SIIAU ';
textoSIIAU.innerHTML += "<br>";
textoSIIAU.style.color = "black"; 
textoSIIAU.style.textDecoration = "none"; 
textoSIIAU.addEventListener('mouseover', (event) => {
  textoSIIAU.style.color = "rgb(93, 173, 226)";
})
textoSIIAU.addEventListener('mouseout', (event) => {
  textoSIIAU.style.color = "rgb(81, 90, 90)";
})
nuevoParrafo.appendChild(textoSIIAU);



    const textoTAES = document.createElement('a');
    textoTAES.href = data.Taes;
    textoTAES.textContent = ' Conoce las TAES ';
    textoTAES.innerHTML += "<br>";
    textoTAES.style.color = "black";
    textoTAES.style.textDecoration = "none";
    textoTAES.addEventListener('mouseover', (event) => {
      textoTAES.style.color = "rgb(93, 173, 226)";
    })  
    textoTAES.addEventListener('mouseout', (event) => {
      textoTAES.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoTAES);

    const textoPlandeestudios = document.createElement('a');
    textoPlandeestudios.href = data.Plandeestudios;
    textoPlandeestudios.textContent = ' Plan de estudios ';
    textoPlandeestudios.innerHTML += "<br>";
    textoPlandeestudios.style.color = "black";
    textoPlandeestudios.style.textDecoration = "none";
    textoPlandeestudios.addEventListener('mouseover', (event) => {
      textoPlandeestudios.style.color = "rgb(93, 173, 226)";
    })
    textoPlandeestudios.addEventListener('mouseout', (event) => {
      textoPlandeestudios.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoPlandeestudios);

    const textoBachilleratogeneral = document.createElement('a');
    textoBachilleratogeneral.href = data.Bachilleratogeneral; 
    textoBachilleratogeneral.textContent = ' Bachillerato general '
    textoBachilleratogeneral.innerHTML += "<br>";
    textoBachilleratogeneral.style.color = "black";
    textoBachilleratogeneral.style.textDecoration = "none";
    textoBachilleratogeneral.addEventListener(' mouseover', (event) => {
      textoBachilleratogeneral.style.color = "rgb(93, 173, 226)";
    })
    textoBachilleratogeneral.addEventListener('mouseout', (event) => {
      textoBachilleratogeneral.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoBachilleratogeneral);

    const textoBachilleratotecnico = document.createElement('a');
    textoBachilleratotecnico.href = data.Bachilleratotecnico;
    textoBachilleratotecnico.textContent = ' Conoce las carreras de bachillerato tecnólogico ';
    textoBachilleratotecnico.innerHTML += "<br>";
    textoBachilleratotecnico.style.color = "black";
    textoBachilleratotecnico.style.textDecoration = "none";
    textoBachilleratotecnico.addEventListener('mouseover', (event) => {
      textoBachilleratotecnico.style.color = "rgb(93, 173, 226)";
    })
    textoBachilleratotecnico.addEventListener('mouseout', (event) => {
      textoBachilleratotecnico.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoBachilleratotecnico);


    const textoServiciosocial = document.createElement('a');
    textoServiciosocial.href = data.Serviciosocial;
    textoServiciosocial.textContent = ' Acerca del servicio social ';
    textoServiciosocial.innerHTML += "<br>";
    textoServiciosocial.style.color = "black";
    textoServiciosocial.style.textDecoration = "none";
    textoServiciosocial.addEventListener('mouseover', (event) => {
      textoServiciosocial.style.color = "rgb(93, 173, 226)";
    })
    textoServiciosocial.addEventListener('mouseout', (event) => {
      textoServiciosocial.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoServiciosocial);

    const textobecas = document.createElement('a');
    textobecas.href = data.becas;
    textobecas.textContent = ' Becas Benito Juarez';
    textobecas.innerHTML += "<br>";
    textobecas.style.color = "black";
    textobecas.style.textDecoration = "none";
    textobecas.addEventListener('mouseover', (event) => {
      textobecas.style.color = "rgb(93, 173, 226)";
    })
    textobecas.addEventListener('mouseout', (event) => {
      textobecas.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textobecas);

    const textopaginaprincipal = document.createElement('a');
    textopaginaprincipal.href = data.paginaprincipal;
    textopaginaprincipal.textContent = ' Pagina principal ';
    textopaginaprincipal.innerHTML += "<br>";
    textopaginaprincipal.style.color = "black";
    textopaginaprincipal.style.textDecoration = "none";
    textopaginaprincipal.addEventListener('mouseover', (event) => {
      textopaginaprincipal.style.color = "rgb(93, 173, 226)";
    })
    textopaginaprincipal.addEventListener('mouseout', (event) => {
      textopaginaprincipal.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textopaginaprincipal);

    const textotrmiatesdeingreso = document.createElement('a');
    textotrmiatesdeingreso.href = data.trmiatesdeingreso;
    textotrmiatesdeingreso.textContent = ' Tramites de ingreso ';
    textotrmiatesdeingreso.innerHTML += "<br>";
    textotrmiatesdeingreso.style.color = "black";
    textotrmiatesdeingreso.style.textDecoration = "none";
    textotrmiatesdeingreso.addEventListener('mouseover', (event) => {
      textotrmiatesdeingreso.style.color = "rgb(93, 173, 226)";
    })  
    textotrmiatesdeingreso.addEventListener('mouseout', (event) => {
      textotrmiatesdeingreso.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textotrmiatesdeingreso);

    const textoSeguimientotramites = document.createElement('a');
    textoSeguimientotramites.href = data.Seguimientotramites;
    textoSeguimientotramites.textContent = ' Seguimiento tramites ';
    textoSeguimientotramites.innerHTML += "<br>";
    textoSeguimientotramites.style.color = "black";
    textoSeguimientotramites.style.textDecoration = "none";
    textoSeguimientotramites.addEventListener('mouseover', (event) => {
      textoSeguimientotramites.style.color = "rgb(93, 173, 226)";
    })
    textoSeguimientotramites.addEventListener('mouseout', (event) => {
      textoSeguimientotramites.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoSeguimientotramites);

    const textoSeguroSocial = document.createElement('a');
    textoSeguroSocial.href = data.SeguroSocial;
    textoSeguroSocial.textContent = ' Tramite del Seguro Social ';
    textoSeguroSocial.innerHTML += "<br>";
    textoSeguroSocial.style.color = "black";
    textoSeguroSocial.style.textDecoration = "none";
    textoSeguroSocial.addEventListener('mouseover', (event) => {
      textoSeguroSocial.style.color = "rgb(93, 173, 226)";
    })
    textoSeguroSocial.addEventListener('mouseout', (event) => {
      textoSeguroSocial.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoSeguroSocial);

    const textoRedessociales = document.createElement('a');
    textoRedessociales.href = data.Redessociales;
    textoRedessociales.textContent = ' Redes Sociales ';
    textoRedessociales.innerHTML += "<br>";
    textoRedessociales.style.color = "black";
    textoRedessociales.style.textDecoration = "none";
    textoRedessociales.addEventListener('mouseover', (event) => {
      textoRedessociales.style.color = "rgb(93, 173, 226)";
    })
    textoRedessociales.addEventListener('mouseout', (event) => {
      textoRedessociales.style.color = "rgb(81, 90, 90)";
    })
    nuevoParrafo.appendChild(textoRedessociales);
    

    // Agregar el párrafo al contenedor
    searchHistoryContainer.appendChild(nuevoParrafo);
  })  
  .catch(error => {
    // Manejar errores en la solicitud o en la respuesta
    console.error('Error:', error);
  });
  event.preventDefault();
}



/*// Function to add a new search term to the history and display it
function addSearchToHistory(searchTerm) {
  // Add the search term to the history array
  searchHistory.push(searchTerm);

  // Limit the history to a maximum number of items (optional)
  if (searchHistory.length > 10) {
    searchHistory.shift(); // Remove the oldest item if the history is too long
  }

  // Create a new list item element for the search term
  const newListItem = document.createElement('li');
  newListItem.textContent = searchTerm;

  // Add the list item to the search history container
  searchHistoryContainer.appendChild(newListItem);
}

// Function to send the search term and update the history
function sendSearch(event) {
  const searchTerm = searchInput.value.trim();

  // Check if the search term is not empty and not already in the history
  if (searchTerm && !searchHistory.includes(searchTerm)) {
    // Add the search term to the history
    addSearchToHistory(searchTerm);

    // Clear the search input field
    searchInput.value = '';
  }

  // Prevent default form submission behavior (e.g., page refresh)
  event.preventDefault();
}

// Event listener for the send button click and Enter key press
sendButton.addEventListener('click', sendSearch);
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendSearch(event);
  }
});


function addSearchToHistory(searchTerm) {
  searchHistory.push(searchTerm);


  if (searchHistory.length > 30) {
    searchHistory.shift(); 
  }


  const newListItem = document.createElement('li');
  newListItem.textContent = searchTerm;


  searchHistoryContainer.appendChild(newListItem);
}


function sendSearch() {
  const searchTerm = searchInput.value.trim();


  if (searchTerm && !searchHistory.includes(searchTerm)) {
    addSearchToHistory(searchTerm);

    searchInput.value = '';
  }
}

sendButton.addEventListener('click', sendSearch);*/