const toggleList = () => {
  const block = document.querySelector('[data-list="block"]');

  if (!block) {
    return;
  }
  const button = block.querySelector('[data-list="button"]');
  const wrapper = block.querySelector('[data-list="wrapper"]');

  button.addEventListener('click', function () {
    button.classList.toggle('is-open');
    wrapper.classList.toggle('is-open');
  });

};

export {toggleList};
