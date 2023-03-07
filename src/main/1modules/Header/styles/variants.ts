import {Variants} from "framer-motion";

export const hamburgerStick1V: Variants = {
  on: {
    rotate: '45deg',
    y: '5px',
  },
  off: {
    rotate: '0deg',
    y: '0px',
  }
}

export const hamburgerStick2V: Variants = {
  on: {
    scaleX: 0,
  },
  off: {
    scaleX: 1,
  }
}

export const hamburgerStick3V: Variants = {
  on: {
    rotate: '-45deg',
    y: '-5px',
  },
  off: {
    rotate: '0deg',
    y: '0px',
  }
}

export const vectorDownV: Variants = {
  on: {
    rotateX: '180deg'
  },
  off: {
    rotateX: '0deg',
  }
}