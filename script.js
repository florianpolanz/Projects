const container  = document.getElementById("container");

const p = document.createElement("p");
p.textContent = "Hey, I'm red!";
p.style.color = "red";

container.appendChild(p)

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "Hey, I'm blue!"

container.appendChild(h3);

const inner = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div."

const pp = document.createElement("p");
pp.textContent = "ME TOO!"

inner.appendChild(h1)
inner.appendChild(pp)

container.appendChild(inner)