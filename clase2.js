btn = document.querySelector("#btnfoto");
img = document.querySelector("#imagen");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=hcxHvqoStQmyCLxd8cMQSfBVO4kwsEPErgbtACsA"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;