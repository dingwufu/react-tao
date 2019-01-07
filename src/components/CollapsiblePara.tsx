import * as React from 'react';
import './CollapsiblePara.scss';

interface CPProps extends React.Props<CPProps> {
  height?: number,
  lineHeight?: number | string,
}
interface CPState {
  isCollapse: boolean,
  isNeedCollapse: boolean
}
/**
 * CollapsiblePara, 折叠文本
 * @param {number} height - 折叠时段落的高度
 * @param {number | string} lineHeight - 文本单行行高
 * @description 有状态组件
 * @author dingwf
 */
class CollapsiblePara extends React.Component<CPProps, CPState> {
  static defaultProps: CPProps;
  private myRef: React.RefObject<HTMLDivElement>;

  state = {
    isCollapse: false,
    isNeedCollapse: false
  };
  constructor(props: CPProps) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    const {current} = this.myRef;
    const {height} = this.props;

    if (current && height && current.clientHeight > height) {
      this.setState({
        isCollapse: true,
        isNeedCollapse: true
      });
    }
  }
  toggleState = () => {
    if (this.state.isNeedCollapse) {
      this.setState((prevState) => ({
        isCollapse: !prevState.isCollapse,
      }));
    }
  }
  render() {
    const { isCollapse, isNeedCollapse } = this.state;
    const { lineHeight } = this.props;
    const collapseStyle = isCollapse ? {
      maxHeight: this.props.height,
      overflow: 'hidden',
    } : {};
    const collapseText = isCollapse ? '展开' : '收起';
    return (
      <div className={'collapsible-para'} ref={this.myRef} onClick={this.toggleState} style={collapseStyle}>
        {this.props.children}
        {isNeedCollapse && <div className="label" style={{ lineHeight, }}>{collapseText}</div>}
      </div>
    );
  }
}
CollapsiblePara.defaultProps = {
  height: 84,
  lineHeight: '28px',
};
export default CollapsiblePara;
