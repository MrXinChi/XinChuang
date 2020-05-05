import Vue from "vue";

import login from "./service/login";
import home from "./service/home";
import about from "./service/about";
import personalCenter from "./service/personalCenter";
import task from "./service/task";


Vue.prototype.service = {
    login,
    home,
    about,
    personalCenter,
    task
};