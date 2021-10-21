const api_url = "https://v3.football.api-sports.io/timezone";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "9d11e71e73mshb0433688ad36a28p1ca8d1jsn14383cc4466c"
  }
};

async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}

getData();
