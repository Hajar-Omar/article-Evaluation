const textAreaEle = document.getElementById("txt");
const resultElm = document.getElementById("result");

function checkUrl(url) {
  return new RegExp(
    /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/
  ).test(url);
}

export function handleSubmit(event) {
  event.preventDefault();
  resultElm.innerHTML = "";
  // if url is valid, call the api, else show wrong feedback
  if (checkUrl(textAreaEle.value)) {
    fetch(`http://localhost:3000/api/evaluate?url=${textAreaEle.value}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.agreement)
          resultElm.innerHTML = `<ol><li>Agreement: ${res.agreement}</li><li>irony: ${res.irony}</li><li>model: ${res.model}</li><li>confidence: ${res.confidence}</li></ol>`;
        else resultElm.innerHTML = "<span class='error'>An Invalid URL</span>";
      })
      .catch(
        (err) =>
          (resultElm.innerHTML = "<span class='error'>An Invalid URL</span>")
      );
  } else resultElm.innerHTML = "<span class='error'>An Invalid URL</span>";
}

document.getElementById("submit-btn").addEventListener("click", (e) => {
  handleSubmit(e);
});

textAreaEle.addEventListener("blur", (e) => {
  handleSubmit(e);
});
