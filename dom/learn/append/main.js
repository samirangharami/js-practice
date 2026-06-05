window.onload = () => {
  const form = document.querySelector("#userForm");
  const outputDiv = document.querySelector("#output");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const hometown = document.querySelector("#hometown").value;

    const sentence = `${name} is ${age} years old and lives in ${hometown}.`;

    const paragraph = document.createElement("p");
    paragraph.textContent = sentence;

    outputDiv.append(paragraph);

    form.reset();
  });
};
