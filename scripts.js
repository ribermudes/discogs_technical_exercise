const data = () => new Promise(resolve => {
  setTimeout(() => resolve(window.apiResponse), 1000)
})

// const sortReleases = e => {
//   const { value='name' } = e.target
//   console.log('sorted', value);
// }
//when window loads run that function
window.addEventListener('load', async () => {
  const $sort = document.getElementById('sort')
  $sort.addEventListener('change', sortReleases)

  const response = await data()
  console.log(`${response.releases.length} Releases`)
}, false)

function sortReleases( ) {
  const sortType  = document.getElementById('sort').value
  if (sortType === 'name') {
    window.apiResponse.releases.sort(function (a, b) {
      return a.artist - b.artist;
    });
  }
 }
//cards .innerHTML using js to create the html create a function to pass in the pbject
