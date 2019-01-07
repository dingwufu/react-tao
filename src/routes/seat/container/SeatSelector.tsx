import * as React from 'react';
import { connect } from 'react-redux';
import { ISeat } from '../interface';
import { addSeat, removeSeat } from '../actions';
import { data } from '../mock/seat.json';

interface P {
  selectedSeat: Array<any>,
  onRemove: (id: string) => void,
  onAdd: (seat: ISeat) => void,
}
interface S {

}

const ratio = window.devicePixelRatio || 1; // 像素比
const SEAT_WIDTH = 50; // 单个座位宽度
const SEAT_HEIGHT = 50; // 单个座位高度
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio; // 绘制单个座位宽度
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio; // 绘制单个座位高度度
let col = 1;
let row = 1;
data.forEach(seat => {
  row = Math.max(seat.rowIndex, row);
  col = Math.max(seat.colIndex, col);
}); // 设置最大行、列

const CANVAS_WIDTH = col * SEAT_WIDTH; // canvas实际宽度
const CANVAS_HEIGHT = row * SEAT_HEIGHT; // canvas实际高度
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio; // canvas绘制宽度
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio; // canvas绘制高度

class SeatSelector extends React.Component<P, S> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private emptyImage: HTMLImageElement;
  private selectImage: HTMLImageElement;
  private soldImage: HTMLImageElement;

  constructor(props: P) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    // 加载需要的图片资源
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;
    let canvas: any = this.canvasRef.current;

    this.ctx = canvas.getContext('2d');
    this.ctx.font = `${10 * ratio}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';

    const loadCallback = () => {
      count++;
      if (count === 3) {
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawAllSeat();
      }
    };

    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = './source/seat-empty.png';
    selectImage.src = './source/seat-selected.png';
    soldImage.src = './source/seat-sold.png';
  }
  componentDidUpdate(prevProps: P, prevState: S) {
    this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT); // 清除画布
    this.drawAllSeat(); // 初始化座位
    this.drawSelectSeat(); // 设置选择座位
  }
  // 初始化所有座位
  drawAllSeat = () => {
    const seatData = data;

    for (let i = 0; i < seatData.length; i++) {
      const { isSold, xPos, yPos } = seatData[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      if (isSold) {
        // 绘制已售样式
        this.ctx.drawImage(this.soldImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      } else {
        // 绘制已空座样式
        this.ctx.drawImage(this.emptyImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      }
    }
  }
  // 画选择的座位
  drawSelectSeat = () => {
    const {selectedSeat} = this.props;
    for (let i = 0; i < selectedSeat.length; i++) {
      const {xPos, yPos, rowIndex, colIndex} = selectedSeat[i];
      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      this.ctx.fillText(`${rowIndex}排`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT / 2.5);
      this.ctx.fillText(`${colIndex}座`, offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT * 2 / 3);
    }
  }
  getScrollOffset = () => {
    if (window.pageXOffset) {
      return {
        x : window.pageXOffset,
        y : window.pageYOffset
      };
    } else {
      return {
        x : document.documentElement.scrollLeft + document.body.scrollLeft,
        y : document.documentElement.scrollTop + document.body.scrollTop
      };
    }
  }
  // 获取点击canvas的相对坐标点
  getClickPos = (e: React.MouseEvent) => {
    let canvas: any = this.canvasRef.current;
    let offset: DOMRect = canvas.getBoundingClientRect();
    let scroll = this.getScrollOffset();
    const clickX = e.pageX - scroll.x - offset.left; // 相对canvas鼠标点击的X轴坐标值
    const clickY = e.pageY - scroll.y - offset.top; // 相对canvas鼠标点击的Y轴坐标值
    return {
      x: Math.ceil(clickX / SEAT_WIDTH), // 点击X坐标
      y: Math.ceil(clickY / SEAT_HEIGHT), // 点击Y坐标
    };
  }
  // 点击座位
  clickSeat = (e: React.MouseEvent) => {
    const pos = this.getClickPos(e);
    const clickSeat = data.find(seat => seat.xPos === pos.x && seat.yPos === pos.y);

    // 座位卖掉了，用户买票数超过4张不能买
    // 已经选择则取消，反之选择
    if (!clickSeat || clickSeat.isSold) {
      return;
    }

    const { selectedSeat, onRemove, onAdd } = this.props;
    const seatIndex = selectedSeat.findIndex(item => item.id === clickSeat.id);
    if (seatIndex > -1) {
      onRemove(clickSeat.id);
    } else {
      if (selectedSeat.length >= 4) {
        alert('不能超过四个座位');
      } else {
        onAdd(clickSeat);
      }
    }
  }
  render() {
    return (
      <canvas ref={this.canvasRef} width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT} style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, }} onClick={this.clickSeat}/>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    selectedSeat: state
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onAdd: (seat: ISeat) => dispatch(addSeat(seat)),
    onRemove: (id: string) => dispatch(removeSeat(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelector);
