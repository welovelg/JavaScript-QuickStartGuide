function getFormattedCurrency(amount, region = "en-US") {
	return amount.toLocaleString(region, { maximumFractionDigits: 2 })
}

function calculateSalesTax(subtotal, taxRate = 0.08) {
	return subtotal * taxRate
}

let subtotal = 42.94
let salesTax = calculateSalesTax(subtotal)
let total = parseFloat((subtotal + salesTax).toFixed(2))
let stringTotal = getFormattedCurrency(total)
