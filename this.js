 console.log(this);



function show() {
  console.log(this);
}
show();




const person = {
  name: "Aman",
  greet() {
    console.log(this.name);
  }
};
person.greet();


function Person(name) {
  this.name = name;
}

const p1 = new Person("Aman");
console.log(p1.name);


 const user1 = {
  name: "Aman",
  show: () => {
    console.log(this);
  }
};

user.show();




 button.addEventListener("click", function () {
  console.log(this);
});



 function greet() {
  console.log("Hello " + this.name);
}

const user = { name: "Aman" };

greet.call(user);



 const say = greet.bind(user);
say();