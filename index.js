const html = document.querySelector("#html-area");
const md = document.querySelector("#markdown-area");

function bold(word) {
  return `<span class="bold">${word.substring(1, word.length - 1)}</span>`;  // order n
}

function isBold(word) {
  if (word[0] === "*" && word[word.length - 1] === "*" && word.length >= 2) {
    return bold(word);
  } else {
    return word;
  }
}

html.addEventListener("keyup", function(e) {
  const input = e.target.value;
  const output = input
    .split(" ") // order n
    .map(isBold) // order n
    .join(" "); // order n
  md.innerHTML = output;
});
