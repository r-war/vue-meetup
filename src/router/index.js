import Vue from "vue";
import Router from "vue-router";

import Home from "../pages/Home";
import MeetupDetail from "../pages/MeetupDetail";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/meetup/:id",
      name: "MeetupDetail",
      components: MeetupDetail,
    },
  ],
  mode: "history",
});

export default router;
