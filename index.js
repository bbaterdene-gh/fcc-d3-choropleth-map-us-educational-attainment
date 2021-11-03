const drawChoropleth = (data) => {
  console.log(data)
}

fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json')
  .then(resp => resp.json())
  .then(resp => {
    drawChoropleth(resp)
  })