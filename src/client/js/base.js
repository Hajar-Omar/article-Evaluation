export function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  document.getElementById("result").innerHTML = "hello";
}

document.getElementById("btn").addEventListener("click", (e) => {
  handleSubmit(e);
});
