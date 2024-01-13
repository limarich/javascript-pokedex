let isLoading = false;
let timerId;

const handleScroll = async () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled >= scrollable * 0.9 && !isLoading) {
    isLoading = true;
    offset += LIMIT;

    try {
      renderSkeletons();
      await getPokedexData(LIMIT, offset);
    } catch (err) {
      console.error(error);
    } finally {
      isLoading = false;
    }
  }
};

const debouncedHandleScroll = () => {
  clearTimeout(timerId);
  timerId = setTimeout(handleScroll, 300);
};

window.addEventListener("scroll", debouncedHandleScroll);
