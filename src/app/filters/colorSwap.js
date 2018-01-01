export default class ColorSwap { // NOTE: Change this to your new class name
  constructor(canvas, ctx) {
    console.log('loaded ColorSwap filter'); // NOTE: Put class name here
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

        if (data[r] < 128) {
          data[r] = data[g];
        } else {
          data[r] = data[b];
        }

        if (data[g] < 128) {
          data[g] = data[b];
        } else {
          data[g] = data[r];
        }

        if (data[b] < 128) {
          data[b] = data[r];
        } else {
          data[b] = data[g];
        }
      }

      this.ctx.putImageData(imageData, 0, 0);
    };

    this.update = (canvas, ctx) => {
      this.canvas = canvas;
      this.ctx = ctx;
    };

    this.handleApply = () => {
      console.log('applying ColorSwap filter'); // NOTE: Put class name here
      this.filter();
    };
  }
}
