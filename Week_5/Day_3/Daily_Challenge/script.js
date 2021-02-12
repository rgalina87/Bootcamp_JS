const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]


const makeAllCaps = (array) => {
   return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if(typeof word === 'string'){
        return word.toUpperCase()
      } else {
        reject('Error: Not all items in the array are strings!')
      }
    })
    resolve(capsArray)
  })
}

const sortWords = (array) => {
	return new Promise((resolve, reject) => {
		if(array) {
			resolve(array.sort())
		} else {
			 reject('Error: Something went wrong with sorting words.')
		}
	})
}

makeAllCaps(arrayOfWords)
  .then(result => {
    return sortWords(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
