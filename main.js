const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const cost of monthlyExpenses) {
	totalExpense += cost
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`The total expense was ${totalExpense} dollars and the average was ${averageExpense} dollars`)

//listed my monthly expenses for groceries
//total is 0 right now
//then each value in the monthlyexpense array is called cost
//then I made the total equal to adding each cost together
//the average for all of my months is then calculated like above
//Then you can console.log the statement you want as above. 