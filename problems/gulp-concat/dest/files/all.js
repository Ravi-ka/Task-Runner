.sub-button {
  border: none;
  border-radius: 50px;
  padding: 2px;
  background-color: rgb(0, 0, 0);
  padding: 8px;
  color: white;
  /* letter-spacing: 0.1rem; */
  font-weight: bold;
  cursor: pointer;
}
.btn-selected {
  background-color: grey;
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/test.css" />
  </head>
  <body>
    <p>YouTube Subscribe Button</p>
    <button class="sub-button" onclick="subscribeButton()">Subscribe</button>
    <p>Amazon Shipping Calculator</p>
    <input
      placeholder="Cost of item"
      class="js-cost-input"
      onkeydown="handleCostKeydown(event)"
    />
    <button onclick="calculateTotal()">Calculate</button>
    <p class="total-cost"></p>

    <script src="/test.js"></script>
  </body>
</html>

const list = [];

function addItem() {
  list.push(
    {
      name: "ka",
      age: 23,
    },
    {
      name: "ravi",
      age: 27,
    }
  );
  console.log(list);
}
addItem();

function displayList() {
  for (let i = 0; i < list.length; i++) {
    const ListItems = list[i];
    const { name, age } = ListItems;
    console.log(name);
    console.log(age);
  }
}
displayList();

{
  "glossary": {
    "title": "example glossary",
    "GlossDiv": {
      "title": "S",
      "GlossList": {
        "GlossEntry": {
          "ID": "SGML",
          "SortAs": "SGML",
          "GlossTerm": "Standard Generalized Markup Language",
          "Acronym": "SGML",
          "Abbrev": "ISO 8879:1986",
          "GlossDef": {
            "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": ["GML", "XML"]
          },
          "GlossSee": "markup"
        }
      }
    }
  }
}
