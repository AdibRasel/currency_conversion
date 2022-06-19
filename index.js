const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = "https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}";
let html = "";
async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data.rates)
}




var myHeaders = new Headers();
myHeaders.append("apikey", "eNS8mXKj1XNwdUZOEv65Huhw9JtaZ8F2");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




currency()