const submitBtn = document.querySelector("#submitBtn");
const commentList = document.querySelector("#commentList");

async function loadComments() {
  const res = await fetch("/comments");
  const data = await res.json();

  commentList.innerHTML = data
    .map((c) => `<p>${c.username}: ${c.text}</p>`)
    .join("");
}

submitBtn.addEventListener("click", async () => {
  const username = document.querySelector("#username").value;
  const text = document.querySelector("#text").value;

  await fetch("/add-comment", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username, text }),
  });

  document.querySelector("#text").value = "";
  loadComments();
});

loadComments();
