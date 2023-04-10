// SELECTED ELEMENTS
const menu = document.querySelector(".links");

// CONDITIONS OR OPTIONS
let pausepage = false;
let pos;

// FUNCTIONS FOR EXPORT
/* function to open my menu */
const open_menu = (e) => {
    menu.classList.add("show_nav");
    pausepage = true;
    pos = window.scrollY;
}
/* function to close my menu */
const close_menu = () => {
    menu.classList.remove("show_nav");
    pausepage = false;
};
/* function to prevent link href default */
const setDefault = (e) => e.preventDefault();
/* function to prevent scroll when function open menu is fired */
const close_window = () => {
    if(pausepage) {
        window.scrollTo(0, pos);
    }
};

// EXPORTING 
export { open_menu, close_menu, setDefault, close_window }