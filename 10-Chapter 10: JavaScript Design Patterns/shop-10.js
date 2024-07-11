// Display a quick message in the console.
console.log("ClydeBank Coffee Shop is now open!")

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
            li.textContent = k + separator + v

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

// Obtain reference to the menu list by ID
let menuList = document.getElementById("coffee-menu-container")

// Create the menu object from the prototype
let menu = Object.create(listPrototype)

// Render the menu
// We supply the separator because we need to specify
// the CSS class and you must provide all optional variables
// to the left of the optional variable you are specifying
menu.render(inventory, menuList, "coffee-menu", " - $", "coffee-list")
