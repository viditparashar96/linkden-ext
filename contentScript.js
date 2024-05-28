const newProfilePicUrl =
  "https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function replaceProfilePictures() {
  const classNames = [
    "ivm-view-attr__img--centered",
    "EntityPhoto-circle-3",
    "update-components-actor__avatar-image",
    "evi-image",
    "lazy-image",
    "ember-view",
  ];

  classNames.forEach((className) => {
    const profilePics = document.getElementsByClassName(className);
    Array.from(profilePics).forEach((img) => {
      if (
        (img.width === 48 && img.height === 48) ||
        (img.width <= 100 && img.height <= 100)
      ) {
        img.src = newProfilePicUrl;
      }
    });
  });
}

replaceProfilePictures();

const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
