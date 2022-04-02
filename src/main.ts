import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import {
  Button,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  NavBar,
  List,
  Cell,
  Swipe,
  SwipeItem,
} from "vant";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(Tabs);
app.use(NavBar);
app.use(List);
app.use(Cell);
app.use(Swipe);
app.use(SwipeItem);

app.mount("#app");
