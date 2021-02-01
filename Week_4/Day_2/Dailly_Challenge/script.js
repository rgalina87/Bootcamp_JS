let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Copy this object using the method that was taught in today’s lesson.
let groceriesCopy = {...groceries}

groceries.totalPrice = "35$"
console.log(groceriesCopy)//no changes
console.log(groceries)

groceries.other.payed = false
console.log(groceriesCopy)//changed
console.log(groceries)

