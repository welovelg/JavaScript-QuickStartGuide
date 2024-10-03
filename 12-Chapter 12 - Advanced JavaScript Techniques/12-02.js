function getCookie(name) {
  	  // Add the equal sign to the name (name=)
        let cookieName = name + "="

        // Decode cookie string to handle cookies with special characters
        let decodedCookie = decodeURIComponent(document.cookie)

        // Check if there are any cookies to process
        if (!decodedCookie) {
          return null 
        }

        // Split document.cookie on semicolons into an array
        let cookieArray = decodedCookie.split(";")

        // Iterate through the name=value pairs in the cookieArray
        for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i]

          // Remove any leading spaces using a regular expression
          cookie = cookie.replace(/^\s+/, "")

          // If cookie is found, return its value
          if (cookie.indexOf(cookieName) === 0) { 
            return cookie.substring(cookieName.length, cookie.length)
          }
        }

        // If cookie name was not found, return null
        return null
      }
