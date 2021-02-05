class Video {
	constructor(title, uploader, time){
		this.title = title
		this.uploader = uploader
		this.time = time
	}

	watch() {
		return `${this.uploader} watched all ${this.time} sec of ${this.title}`
	}
}

const pharase = new Video('"Funny Cats"', 'You', 300) 
const phrase2 = new Video ('"Dangerous Dogs"', 'Someone', 6000)
console.log(pharase.watch())
console.log(phrase2.watch())


// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.