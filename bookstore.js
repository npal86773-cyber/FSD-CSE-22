const bookdata = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/030/663/358/non_2x/book-mockup-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    price: 234,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/030/663/358/non_2x/book-mockup-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    price: 345,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/030/663/358/non_2x/book-mockup-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    price: 456,
  },
];
function Book(data) {
  const div = document.createElement("div");
  div.setAttribute("class", "book");
  const image = document.createElement("img");
  image.setAttribute("src", data.image);
  image.setAttribute("height", "200px");
  image.setAttribute("width", "200px");
  const h2 = document.createElement("h2");
  h2.innerText = `Price: $${data.price}`;
  h2.style.color = "blue";
  const bt = document.createElement("button");
  bt.innerText = "Add to Cart";
  bt.style.backgroundColor = "white";
  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(bt);
  return div;
}

const bookstore = bookdata.map((b) => {
  return Book(b);
});
const parent = document.getElementById("bookstore");
for (i of bookstore) {
  parent.appendChild(i);
}
