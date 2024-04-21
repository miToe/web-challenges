console.clear();

const getPostElement = document.querySelector('[data-js="social-media-post"]');

const clonePostElement = getPostElement.cloneNode(true);
// const likeButton = document.querySelector('[data-js="like-button"]');

const newCreate = document.createElement("article");

newCreate.innerHTML = `
  <p class="post__content">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <footer class="post__footer">
  <span class="post__username">@username</span>
  <button type="button" class="post__button" data-js="like-button">
    ♥ Like
  </button>
  </footer>
`;

newCreate.classList.add("post", "createdElement");
console.log(newCreate);
document.body.append(newCreate);

const likeButtons = document.querySelectorAll('[data-js="like-button"]');

console.log(likeButtons);
likeButtons.forEach((button) => {
  button.addEventListener("click", handleLikeButtonClick);
});

function handleLikeButtonClick(event) {
  console.log("hö");
  const buttonElement = event.target;
  console.log(buttonElement);
  buttonElement.classList.toggle("post__button--liked");
}

// Exercise:
// Use document.createElement() and append another social media post to the body.

clonePostElement.id = "123";
clonePostElement.classList.add("cloned");

document.body.appendChild(clonePostElement);

// likeButton.addEventListener("click", handleLikeButtonClick);
