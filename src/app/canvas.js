/* eslint-disable operator-linebreak */
import React, {Component} from 'react';
import Filter from './filter';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    this.ctx = null;
    this.imageFile = null;
    this.fr = null;
    this.img = null;
    this.filter = null;

    this.state = {
      shrinkImage: true,
      shrinkImageMultiple: 4
    };

    this.updateFilters = () => {
      this.filter.mod45Percent.update(this.canvas, this.ctx);  // NOTE: Add a call to update for each filter here
    };

    this.handleShrinkImage = () => {
      this.setState({
        shrinkImage: !this.state.shrinkImage
      }, () => {
        this.canvas.width = this.state.shrinkImage ? this.img.width / this.state.shrinkImageMultiple : this.img.width;
        this.canvas.height = this.state.shrinkImage ? this.img.height / this.state.shrinkImageMultiple : this.img.height;
        this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        this.updateFilters();
      });
    };

    this.handleShrinkImageMultiple = e => {
      const num = e.target.value;
      if (!this.state.shrinkImage) {
        return;
      }
      this.setState({
        shrinkImageMultiple: num
      }, () => {
        this.canvas.width = this.state.shrinkImage ? this.img.width / this.state.shrinkImageMultiple : this.img.width;
        this.canvas.height = this.state.shrinkImage ? this.img.height / this.state.shrinkImageMultiple : this.img.height;
        this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        this.updateFilters();
      });
    };

    this.imageLoaded = () => {
      console.log('image loaded');
      this.canvas.width = this.state.shrinkImage ? this.img.width / this.state.shrinkImageMultiple : this.img.width;
      this.canvas.height = this.state.shrinkImage ? this.img.height / this.state.shrinkImageMultiple : this.img.height;
      this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
      this.updateFilters();
    };

    this.handleLoadFileReader = e => {
      console.log('loading file reader');
      this.img = new Image();
      this.img.onload = this.imageLoaded;
      this.img.src = e.target.result;
    };

    this.handleLoadImageFile = e => {
      console.log('loading image');
      this.imgFile = e.target.files[0];
      this.fr = new FileReader();
      this.fr.onload = this.handleLoadFileReader;
      this.fr.readAsDataURL(this.imgFile);
    };
  }

  componentDidMount() {
    this.canvas = document.getElementsByTagName('canvas')[0];
    this.ctx = this.canvas.getContext('2d');
    this.imageFileInput = document.getElementById('imageFileInput');
    this.imageFileInput.addEventListener('change', this.handleLoadImageFile);
    this.filter = new Filter(this.canvas, this.ctx);

    document.getElementById('normal').addEventListener('click', this.imageLoaded);
    document.getElementById('mod45Percent').addEventListener('click', this.filter.mod45Percent.handleApply);  // NOTE: Add new filter event handlers here
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="file"
            id="imageFileInput"
            />
          <span>
            Shrink Image:
            <input
              type="checkbox"
              onChange={this.handleShrinkImage}
              defaultChecked={this.state.shrinkImage}
              value={this.state.shrinkImage}
              />
            <span> Shrink Multiple: </span>
            <input
              type="number"
              onChange={this.handleShrinkImageMultiple}
              value={this.state.shrinkImageMultiple}
              />
          </span>
        </div>
        <br/>
        <div>
          <div>
            <span>Filters: </span>

            <button id="normal">Normal</button>
            <button id="mod45Percent">Mod45Percent</button> {/* NOTE: Add new filter buttons here */}

          </div>
        </div>
        <br/>
        <div>
          <canvas/>
        </div>
      </div>
    );
  }
}
