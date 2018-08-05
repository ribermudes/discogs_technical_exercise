const data = () => new Promise(resolve => {
  setTimeout(() => resolve(window.apiResponse), 1000)
})

//when window loads runs function
window.addEventListener('load', async () => {
  const $sort = document.getElementById('sort')
  $sort.addEventListener('change', sortReleases)

const response = await data()
  document.getElementById('cards').innerHTML = (`${response.releases.length} Releases`)
}, false)

var releaseCards = ['artist', 'year'];
  releaseCards.forEach(response => {
  // Create a div with a card class
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  // Create an h1 and set the text content to the artist's name
  const h1 = document.createElement('h1');
  h1.textContent = `${window.apiResponse.releases.artist}`;
//Create paragraph to set the text to release year
  p.textContent = `${window.apiResponse.releases.year}`;

  // Append the cards to the container element
  container.appendChild(card);

  // Each card will contain an h1 and a p
  card.appendChild(h1);
  card.appendChild(p);
});

//sorts releases by name
function sortReleases( ) {
  const sortType  = document.getElementById('sort').value
  if (sortType === 'name') {
    window.apiResponse.releases.sort(function (a, b) {
      return a.artist - b.artist;
    });
  }
  else if (sortType === 'year') {
    window.apiResponse.releases.sort(function (a, b) {
      return a.year - b.year;
    });
  }
}
