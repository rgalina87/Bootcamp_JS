// Exercise 1: Conversion

fetch("https://swapi.dev/api/starships/9/")
     .then(response => response.json())
         .then(console.log);


async function something(url) {
try {
  const response = await fetch("https://swapi.dev/api/starships/9/")
  console.log(await response.json())
}
catch(err) {
console.log('error')
}
}
something()

// Exercise 2: Analyse

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//calling promise resolved