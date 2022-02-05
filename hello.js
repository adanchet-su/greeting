function hello() {
  return "Hello World!";
}

function greet(name) {
  var greeting = "Hello, ";
if (name == null) {
  return greeting + "there!"
}
else {
  if (name === name.toUpperCase()) {
      return greeting.toUpperCase() + name + "!";
  }
  if (typeof name === typeof[]) {
      for (var i = 0; i <= name.length; i +=1) {
          greeting += name[i] + ", ";
      }
  }
  return greeting + name;
}
}
