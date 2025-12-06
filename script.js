// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = false;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://zovzovzov-48aa.restdb.io/rest/product");
// xhr.setRequestHeader("content-type", "application/json");
// xhr.setRequestHeader("x-apikey", "<your CORS apikey here>");
// xhr.setRequestHeader("cache-control", "no-cache");

// xhr.send(data);
const url = "https://zovzovzov-48aa.restdb.io/rest/product"
const api_key = "69343d921c64b97e52dde62f"

const my_header = {
    "Content-Type": 'application/json',
    "x-apikey": api_key,
    "cache_control": "no-cache"
};
fetch(url,{
    method: "GET",
    headers: my-header
})
.then(async function (response) {
    const result = await response.json()
    console.log(result)
})