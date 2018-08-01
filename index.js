const data = async () => new Promise(resolve => {
  setTimeout(() => resolve(window.apiResponse), 1000)
})

const sortReleases = e => {
  const { value='name' } = e.target
  console.log('sorted', value);
}

domready(async () => {
  const $sort = document.getElementById('sort')
  $sort.addEventListener('change', sortReleases)
  
  const response = await data()
  console.log(`${response.releases.length} Releases`)
})