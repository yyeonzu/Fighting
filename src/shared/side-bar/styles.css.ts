import {recipe} from '@vanilla-extract/recipes';

export const sideBar = recipe({
  base: {
    position: 'fixed',
    top: 0,
    width: '15rem',
    height: '100vh',
    backgroundColor: '#d9d9d9',
  },

  variants: {
    position: {
      left: {left: 0},
      right: {right: 0},
    },
  },
});
