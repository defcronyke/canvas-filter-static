import Mod45Percent from './filters/mod45Percent';  // NOTE: Add new filter imports here

export default class Filter {
  constructor(canvas, ctx) {
    console.log('loading canvas filters...');

    this.mod45Percent = new Mod45Percent(canvas, ctx);  // NOTE: Add new filter instances here, and make sure to pass in canvas and ctx to the constructor

    console.log('canvas filters loaded');
  }
}