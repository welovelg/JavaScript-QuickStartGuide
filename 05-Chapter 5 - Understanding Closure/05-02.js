function calculateLineCost(productPrice, productQuantity = 1) {
	let lineCost = productPrice * productQuantity
	function getFormattedCurrency(region = "en-US") {
		return lineCost.toLocaleString(region, { maximumFractionDigits: 2 })
	}
	return getFormattedCurrency()
}
