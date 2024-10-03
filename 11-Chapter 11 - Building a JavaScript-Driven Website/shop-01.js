// ClydeBank Coffee Shop

// Define hamburger menu object
const hamburgerMenu = {
    render: (parent, id = "hamburger", width = 40, height = 40) => {

        // Construct the SVG
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        let rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        let rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        let rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect")

        // Set the attributes for the SVG
        svg.id = id
        svg.classList.add("hamburger")
        svg.setAttribute("width", width)
        svg.setAttribute("height", height)
        svg.setAttribute("viewBox", "0 0 100 80")
        svg.setAttribute("fill", "#cad317")

        // Set the attributes for the rectangles
        rect1.setAttribute("width", "100")
        rect1.setAttribute("height", "20")

        rect2.setAttribute("y", "30")
        rect2.setAttribute("width", "100")
        rect2.setAttribute("height", "20")

        rect3.setAttribute("y", "60")
        rect3.setAttribute("width", "100")
        rect3.setAttribute("height", "20")

        // Add the rectangles to the SVG
        svg.appendChild(rect1)
        svg.appendChild(rect2)
        svg.appendChild(rect3)
                
        parent.appendChild(svg)
    }
}

// The list prototype
const listPrototype = {
    render: (values, parent, id, separator = " - $", className = "") => {
       
        // Create the unordered list element
        let ul = document.createElement("ul")
        
        // Assign the HTML element ID
        ul.id = id

        // If className is set, assign it, otherwise ignore
        if (className) {
            ul.className = className
        }

        // Loop through the values array and create a new li element for each
        for (let key in values) {
            // Create a key/value pair in the variables k and v
            let k = key
            let v = values[key]

            // Create the li element
            let li = document.createElement("li")

            // Add the text content to the li element with the separator
            li.textContent = k + separator + v.toFixed(2)

            // Append the li element to the unordered list
            ul.appendChild(li)
        }

        // Append the unordered list to the parent element
        parent.appendChild(ul)
    }
}

let inventory = {
    "Regular Coffee": 3.00,
    "Espresso": 3.50,
    "Cappuccino": 4.00,
    "Latte": 4.25
}

// Run only when the document is loaded and ready to go
document.addEventListener("DOMContentLoaded", function(event) { 

    // The main div
    const header = document.getElementsByTagName("header")[0]
    
    // Obtain reference to the menu list by ID
    let menuList = document.getElementById("coffee-menu-container")

    // Create the menu object from the prototype
    let menu = Object.create(listPrototype)

    // Render the inventory menu
    menu.render(inventory, menuList, "coffee-menu", " - $", "coffee-list")

    // Render the hamburger menu
    hamburgerMenu.render(header)
  
})
