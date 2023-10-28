fetch("https://registry.npmjs.org/consoled.js")
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err))
