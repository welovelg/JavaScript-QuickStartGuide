function cartItem(price, quantity) {
	let lineCost = 0.00
	let formattedLineCost = ""

	function calculateLineCost() {
		lineCost = price * quantity
	}

	function applyQuantityDiscount() {
		if (quantity > 1) {
			lineCost -= quantity * (price * 0.01)
		}
	}

	function formatCurrency(region = "en-US") {
		formattedLineCost = 
			lineCost.toLocaleString(region, { maximumFractionDigits: 2 })
	}
	
	calculateLineCost()
	applyQuantityDiscount()
	formatCurrency()

	return formattedLineCost
}
