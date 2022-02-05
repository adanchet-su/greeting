function greet(name) {
    var greeting = "Hello, ";
    if (name == null) {
        return greeting + "there!"
      }
      else {
        if (typeof name === typeof[]) {
            for (var i = 0; i <= name.length; i +=1) {
                greeting += name[i] + ", ";
            }
        if (name === name.toUpperCase()) {
                return greeting.toUpperCase() + name + "!";
            }
        }
        return greeting + name;
      }
}