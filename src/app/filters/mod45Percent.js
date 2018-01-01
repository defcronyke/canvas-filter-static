export default class Mod45Percent { // NOTE: Change this to your new class name
  constructor(canvas, ctx) {
    console.log('loaded Mod45Percent filter'); // NOTE: Put class name here
    this.canvas = canvas;
    this.ctx = ctx;

    this.filter = () => {
      const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      const data = imageData.data;
      console.log('imageData: ', imageData);

      // NOTE: Put your filter logic here
      for (let i = 0; i < data.length; i += 4) {
        const r = i;
        const g = i + 1;
        const b = i + 2;
        // const a = i + 3;

        data[r] %= 255 * 0.45;
        data[g] %= 255 * 0.45;
        data[b] %= 255 * 0.45;
      }

      this.ctx.putImageData(imageData, 0, 0);
    };

    this.update = (canvas, ctx) => {
      this.canvas = canvas;
      this.ctx = ctx;
    };

    this.handleApply = () => {
      console.log('applying Mod45Percent filter'); // NOTE: Put class name here
      this.filter();
    };
  }
}
