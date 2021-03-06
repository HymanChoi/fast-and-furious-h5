import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.css";
import "@/assets/font/font.css";

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
  DropdownMenu,
  DropdownItem,
  Image as VanImage,
  Divider,
  Lazyload,
  Circle,
  Icon,
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
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(VanImage);
app.use(Divider);
app.use(Lazyload);
app.use(Circle);
app.use(Icon);

app.mount("#app");
