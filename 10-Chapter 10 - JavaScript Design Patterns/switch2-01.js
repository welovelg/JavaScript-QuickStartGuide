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
          option.innerHTML = color.charAt(0).toUpperCase() + color.slice(1)
          select.appendChild(option)
      }

      select.addEventListener("change", function(event) {
          swatch.style.backgroundColor = event.target.value
      })

      parent.appendChild(select)
  }
}

let colorSwatch = document.getElementById("colorSwatch")
let colorSelection = document.getElementById("colorSelection")
colorSelector.render(colorSelection, "colorSelect", colorSwatch)
