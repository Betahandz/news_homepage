// STRICT CASE
"use strict";

// IMPORTATION
import * as ammo from "./ammo/ammo.js";

// SELECTED ELEMENTS
const open_menu_btn = document.querySelector(".menubar");
const close_menu_btn = document.querySelector(".closemenu");
const link = [...document.querySelectorAll(".link a")];

// EVENT LISTENERS
open_menu_btn.addEventListener("click", ammo.open_menu);

close_menu_btn.addEventListener("click", ammo.close_menu);

link.forEach((linkage, index, arr) => {
    linkage.addEventListener("click", ammo.setDefault);
})

window.addEventListener("scroll", ammo.close_window);