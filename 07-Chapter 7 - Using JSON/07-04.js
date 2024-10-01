dayNumber = 1
for (let day in salesReport.coffeeSales) {
		console.log("Day " + dayNumber + ":")
		console.log("Blend: " + salesReport.coffeeSales[day].blendName + 
			", Cups Sold: " + salesReport.coffeeSales[day].cupsSold)
		dayNumber++
}
