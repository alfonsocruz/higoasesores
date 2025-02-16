export const scrollToElement = (id, top = 52) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - top;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};
