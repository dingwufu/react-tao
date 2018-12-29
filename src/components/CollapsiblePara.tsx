import * as React from 'react';
import './CollapsiblePara.scss';

interface CPProps extends React.Props<CPProps> {
  height?: number,
}
interface CPState {
  isCollapse: boolean,
  isNeedCollapse: boolean
}

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
    const collapseStyle = isCollapse ? {
      maxHeight: this.props.height,
      overflow: 'hidden',
    } : {};
    const collapseText = isCollapse ? '展开' : '收起';
    return (
      <div className={'collapsible-para'} ref={this.myRef} onClick={this.toggleState} style={collapseStyle}>
        {this.props.children}
        {isNeedCollapse && <div className="label">{collapseText}</div>}
      </div>
    );
  }
}
CollapsiblePara.defaultProps = {
  height: 84
};
export default CollapsiblePara;
