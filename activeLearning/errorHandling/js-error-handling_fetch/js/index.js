console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  // const response = await fetch(url);
  // const json = await response.json();
  // return json.data;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>`;
    } catch (error) {
      userElement.classList.add("error");
      userElement.innerText = error.message;
    }
  })
);
