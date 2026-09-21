const name = "Bram";
let clientCount = 3;
clientCount = 4; // allowed — 'let' can change

console.log(name, clientCount);

const client = {
  name: "PT Maju Jaya",
  city: "Jakarta",
  active: true,
};

console.log(client.name); // "PT Maju Jaya"
console.log(client.city); // "Jakarta"

const clients = [
  { name: "PT Maju Jaya", city: "Jakarta", active: true },
  { name: "CV Sinar Abadi", city: "Bekasi", active: false },
  { name: "PT Bumi Sentosa", city: "Bandung", active: true },
];

console.log(clients.length); // 3
console.log(clients[0].name); // "PT Maju Jaya" — [0] is the first

function greet(personName) {
  return "Hello, " + personName;
}

console.log(greet("Bram")); // "Hello, Bram"

const greet = (personName) => "Hello, " + personName;

// map — transform every item into something new
const names = clients.map((c) => c.name);
console.log(names); // ["PT Maju Jaya", "CV Sinar Abadi", "PT Bumi Sentosa"]

// filter — keep only items that pass a test
const activeClients = clients.filter((c) => c.active === true);
console.log(activeClients); // just the 2 active ones

// find — get the first item that matches
const found = clients.find((c) => c.city === "Bekasi");
console.log(found.name); // "CV Sinar Abadi"
