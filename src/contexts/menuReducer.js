export function menuReducer(state, action) {
  switch (action.type) {
    case "SET_MENU":
      return {
        menu: action.payload,
      };

    case "CREATE_MENU":
      const category = action.payload.category;
      const newMenu = action.payload.newMenu;
      state.menu[category].unshift(newMenu);

      return state;

    case "DELETE_MENU":
      const id = action.payload;

      return;
    default:
      return state;
  }
}
