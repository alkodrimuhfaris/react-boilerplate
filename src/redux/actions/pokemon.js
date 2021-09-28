export default {
  getPokemon: (menu = 'Home') => ({
    type: 'CHANGE_MENU',
    payload: menu,
  }),
};
