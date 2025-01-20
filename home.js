let gitText = document.querySelector(".git_text")

gitText.addEventListener('click', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    console.log("OK")

    const randomX = Math.random() * (windowWidth - gitText.offsetWidth);
    const randomY = Math.random() * (windowHeight - gitText.offsetHeight);

    gitText.style.left = `${randomX}px`;
    gitText.style.top = `${randomY}px`;
});