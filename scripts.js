var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.discogs.com/releases/2863', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.stringify(window.apiResponse);

  data.forEach(releases => {
  // Log each movie's title
  console.log(releases.year);
});

}


// Send request
request.send();




// const data = async () => new Promise(resolve => {
//   setTimeout(() => resolve(window.apiResponse), 1000)
// })
//
// const sortReleases = e => {
//   const { value='name' } = e.target
//   console.log('sorted', value);
// }
//
// domready(async () => {
//   const $sort = document.getElementById('sort')
//   $sort.addEventListener('change', sortReleases)
//
//   const response = await data()
//   console.log(`${response.releases.length} Releases`)
// })
