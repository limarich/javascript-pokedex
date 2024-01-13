let isLoading = false;
let timerId;

const handleScroll = async () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled >= scrollable * 0.9 && !isLoading) {
    isLoading = true;
    offset += LIMIT;

    await getPokedexData(LIMIT, offset)
      .then(() => {
        isLoading = false;
      })
      .catch((error) => {
        isLoading = false;
        console.error(error);
      });
  }
};

const debouncedHandleScroll = () => {
  clearTimeout(timerId);
  timerId = setTimeout(handleScroll, 300);
};

window.addEventListener("scroll", debouncedHandleScroll);
