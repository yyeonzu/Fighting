import {style} from '@vanilla-extract/css';

const HEIGHT = '36rem';

export const phoneView = style({
  width: `calc(${HEIGHT} / 2.164)`,
  height: HEIGHT,
  backgroundColor: '#d9d9d9',
});
