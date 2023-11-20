const buttonShow = document.querySelector('.todo__buttonShow');
const buttonClose = document.querySelector('.todo__buttonClose');
const todoPopup = document.querySelector('.todo__popup');


buttonShow.addEventListener("click", () => {
    todoPopup.showModal();
});

buttonClose.addEventListener("click", () => {
    todoPopup.close();
});

todoPopup.addEventListener("click", (e) => {
    const todoPopup = e.currentTarget;
    const clickOnBackdrop = e.target === todoPopup;

    if (clickOnBackdrop) {
        todoPopup.close();
    }
})