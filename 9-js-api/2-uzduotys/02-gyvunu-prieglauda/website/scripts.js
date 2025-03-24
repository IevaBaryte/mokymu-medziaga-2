const BASE_URL = 'http://localhost:7789';
const FILTERS_TRANSLATIONS = {
    age: 'Amžius',
    breed: 'veislė',
    features: 'Charakterio bruožai',
    state: 'Ar ieško namų',
    type: 'Gyvūnas',
    vaccinated: 'Skiepyta(s)'
};
const VALUE_TRANSLATIONS = {
  true: 'Taip',
  false: 'Ne'
}

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
};

const addPetsNumberInHTML = (petsNumber) => {
  document.getElementById('petsCount').innerHTML = petsNumber;
}

const showEmptyDataMessage = (pets) => {
  if (pets.length === 0) { 
    document.querySelector('.no-pets-found').innerHTML = 'Deja tokiu gyvunu neturime'; 
    document.querySelector('.cards-list').innerHTML = null;
} else { 
    document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);
}
document.querySelector('.no-pets-found').style.display = 'inline'

}
const generatePetsHTML = (pets) => {
    return pets.map(pet => `
      <div class="col-5">
          <div class="card">
              <div class="card-body">
                 <p class="card-text"><img src="https://cdn2.thecatapi.com/images/${pet.id}.jpg"></p>
                  <h5 class="card-title">${pet.name}</h5>
                  <p class="card-text">Metai: ${pet.age}</p>
                  <p class="card-text">Veislė: ${pet.breed}</p>
                  <p class="card-text">${pet.type}, ${pet.vaccinated ? "skiepyta(s)" : "neskiepyta(s)"} - ${pet.state}</p>
                  <p class="card-text">
                      ${pet.features.map(feature => `<span class="badge text-bg-primary me-1">
                        ${feature}</span>`).join(' ')}
                  </p>
                  <p class="card-text">${pet.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  };

const generateFiltersHTML = (filters) => {
    let filtersHtml = '';
    for(let typeFilter in filters) {
        console.log(typeFilter);
        console.log(filters[typeFilter])
        filtersHtml += `
        <div class="col-md-2">
        <label for="${typeFilter}" class="form-label">${FILTERS_TRANSLATIONS[typeFilter]}:</label>
        <select class="form-select" id="${typeFilter}">
        <option value="visi" selected>Visi</option>
        ${filters[typeFilter].map(f => `<option value="${f}">${ f === true || f === false ? VALUE_TRANSLATIONS[f] : f }</option>`).join('')}
        </select>
        </div>
        `;
    }
    return filtersHtml;
}

  window.addEventListener('DOMContentLoaded', async () => {
    const filters = await getData('/pets/filters-list');
    document.querySelector('.filter-items').innerHTML = generateFiltersHTML(filters);

    const pets = await getData('/pets');
    addPetsNumberInHTML(pets.length);
  showEmptyDataMessage(pets);
  });

  document.getElementById('filter-button').addEventListener('click' , async () => {
    let filterParams = [];

    for (let filterKey in FILTERS_TRANSLATIONS) {
      let filterValue = document.getElementById(filterKey).value;

      if (filterValue !== 'visi') { 
      filterParams.push(
        `${filterKey}=${filterValue.split(' ').join('_')}`);
    }}
    let readyFilter = filterParams.length ? `?${filterParams.join('&')}` : null;

    let url = '/pets';
    let pets = null;

    if (readyFilter) {
      pets = await getData(`${url}/filtered${readyFilter}`);
    } else {
      pets = await getData(url);
    }
    addPetsNumberInHTML(pets.length);
    document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);
    document.querySelector('.no-pets-found').style.display = 'none';
    showEmptyDataMessage(pets);
  });

  document.getElementById('clear-filter').addEventListener('click', async () => {
    document.querySelector('.no-pets-found').style.display = 'none';

    for (let filterKey in FILTERS_TRANSLATIONS) {
        let filterElement = document.getElementById(filterKey);
        if (filterElement.tagName === 'SELECT') {
            filterElement.selectedIndex = 0;  
        } else {
            filterElement.value = ''; 
        }
    }


    const pets = await getData("/pets");
    document.querySelector(".cards-list").innerHTML = generatePetsHTML(pets);

    addPetsNumberInHTML(pets.length);
});
