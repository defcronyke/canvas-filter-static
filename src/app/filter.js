import Mod45Percent from './filters/mod45Percent';  // NOTE: Add new filter imports here
import ModPurp from './filters/modPurp';
import ColorSwap from './filters/colorSwap';

export default class Filter {
  constructor(canvas, ctx) {
    console.log('loading canvas filters...');

    this.mod45Percent = new Mod45Percent(canvas, ctx);  // NOTE: Add new filter instances here, and make sure to pass in canvas and ctx to the constructor
    this.modPurp = new ModPurp(canvas, ctx);
    this.colorSwap = new ColorSwap(canvas, ctx);

    console.log('canvas filters loaded');
  }
}
