import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      menuItems: [
        { id: 1, name: "Home", route: "/" },
        { id: 2, name: "What we do", route: "/about" },
        { id: 3, name: "The digital divide", route: "/details" },
        { id: 4, name: "Get involved", route: "/details" },
        { id: 5, name: "Our network", route: "/details" },
        { id: 6, name: "Insights", route: "/details" },
      ],
    };
  },
  getters: {
    getMenuItems(state) {
      return state.menuItems;
    },
    getMenuItemById: (state) => (id) => {
      return state.menuItems.find((menuItem) => menuItem.id === id);
    },
  },
  mutations: {
    addMenuItem(state, menuItem) {
      state.menuItems.push(menuItem);
    },
    removeMenuItem(state, menuItemId) {
      state.menuItems = state.menuItems.filter(
        (menuItem) => menuItem.id !== menuItemId
      );
    },
  },
});
