import { createUseStyles } from 'react-jss';

export const spritesStyles = {
  root: {
    position: 'absolute',
    visibility: 'hidden',
    width: 0,
    height: 0,
  },
};

export const useSpritesStyles = createUseStyles(spritesStyles);
