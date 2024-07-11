class MySingletonClass {
  constructor() {
    if (MySingletonClass._instance) {
      throw new Error("You can only create one instance of this class.")
    }
    MySingletonClass._instance = this
  }
  
  // Rest of class code would go here
}
