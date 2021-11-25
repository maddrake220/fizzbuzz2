for (let i = 1; i <= 100; i++) {
	i % 3 ? (i % 5 ? console.log("fizzbuzz") : console.log("fizz")) : i % 5 ? console.log("buzz") : console.log(i)
}
