// GETs the random response from the server.
async function getFortune() {
  const response = await fetch("https://gb7k1ibk31.execute-api.us-east-1.amazonaws.com/8ball");
  const fortune = await response.json();
  console.log(fortune);
}
