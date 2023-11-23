document.addEventListener("DOMContentLoaded", function () {
  const productTable = document.getElementById("productTable");
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (loggedInUser) {
    const usernameElement = document.getElementById("username");
    usernameElement.textContent = `Welcome, ${loggedInUser}`;

    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function (e) {
      e.preventDefault();

      sessionStorage.removeItem("loggedInUser");
      const loader = document.getElementById("loader");
      const loaderContainer = document.getElementById("loaderContainer");

      loader.style.display = "block";
      loaderContainer.style.display = "block";

      setTimeout(() => {
        window.location.href = "index.html";

        loader.style.display = "none";
        loaderContainer.style.display = "none";
      }, 2000);
    });

    const loader = document.getElementById("loader");
    const loaderContainer = document.getElementById("loaderContainer");

    loader.style.display = "block";
    loaderContainer.style.display = "block";

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        showProductTable(data);

        loader.style.display = "none";
        loaderContainer.style.display = "none";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        loader.style.display = "none";
        loaderContainer.style.display = "none";
      });
  } else {
    window.location.href = "index.html";
  }

  function showProductTable(products) {
    const tableRows = products
      .map(
        (product) =>
          `<tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
          </tr>`
      )
      .join("");
    productTable.querySelector("tbody").innerHTML = tableRows;
  }
});
