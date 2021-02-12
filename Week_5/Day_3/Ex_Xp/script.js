 // Exercise 1 : Comparison

function compareToTen(num){
  const compareToTen = new Promise((resolve, reject) =>{
    if(num > 10) {
      resolve ("Num is greater")
    } else {
      reject ("num is less")
    }
  })
  return compareToTen
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


// Exercise 2 : Promises
const pr = new Promise((resolve, reject) => {
	setTimeout(()=> {
		resolve("success")
	}, 4000)
})

pr.then((result)=>{
	console.log(result)
})

Promise.resolve(
	setTimeout(()=>{
		console.log('success')
	}, 4000)
	)

Promise.reject('failed')
	.catch(console.log("Ooops something went wrong: "))


// Exercise 3 : Resolve & Reject
	Promise.resolve(3).then(function(value){
		console.log(value)
	})

	Promise.reject(new Error ("Boo")).then(function(error){
		console.log(error)
	})

