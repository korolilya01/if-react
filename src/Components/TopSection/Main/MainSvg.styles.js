import { createUseStyles } from 'react-jss';

export const mainSvgStyles = {
  googlePlay: {
    width: 136,
    height: 40,
  },
  appStore: {
    width: 120,
    height: 40,
  },
};

export const useMainSvgStyles = createUseStyles(mainSvgStyles);
