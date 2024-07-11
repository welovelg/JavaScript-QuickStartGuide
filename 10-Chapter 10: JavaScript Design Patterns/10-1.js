function capFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function changeBgColor(element, color) {
	element.style.backgroundColor = color
}

const colorSelector = {
    colors: {
        "red": "#FF0000",
        "orange": "#FFA500",
        "yellow": "#FFFF00",
        "green": "#008000",
        "blue": "#0000FF",
        "indigo": "#4B0082",
        "violet": "#EE82EE"
    },
    render: (parent, id, swatch, className = "") => {
        let select = document.createElement("select")
        select.id = id
        if (className) {
            select.className = className
        }
        for (let color in colorSelector.colors) {
            let option = document.createElement("option")
            option.value = colorSelector.colors[color]
            option.innerHTML = capFirstLetter(color)
            select.appendChild(option)
        }

        select.addEventListener("change", function(event) {
        	changeBgColor(swatch, event.target.value)
        })

        parent.appendChild(select)
    }
}
