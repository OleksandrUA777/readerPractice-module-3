import { Progress } from 'components/Progress/Progress';
import { Publication } from 'components/Publication/Publication';
import { Component } from 'react';
import { Controls } from '../Controls/Controls';
import PropTypes from 'prop-types';

const READER_KEY = 'reader__key';
export class Reader extends Component {
  state = {
    index: 0,
  };
  componentDidMount() {
    const savedIndex = localStorage.getItem(READER_KEY);
    const parsedSavedIndex = JSON.parse(savedIndex);
    if (parsedSavedIndex) {
      this.setState({ index: parsedSavedIndex });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(READER_KEY, this.state.index);
    }
  }
  changeIndexHandler = value => {
    const { index } = this.state;
    console.log('index: ', index);

    this.setState(prev => ({ index: prev.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <>
        <Controls
          onChange={this.changeIndexHandler}
          current={index + 1}
          totalItems={totalItems}
        />
        <Progress currentPage={index + 1} totalPages={totalItems} />
        <Publication title={currentItem.title} text={currentItem.text} />
      </>
    );
  }
}
Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

/* <Controls onPrevClick={} onNextClick={}> - секция кнопок для листания публикаций.
<Progress currentPage={} totalPages={}> - блок отображения прогресса.
<Publication title={} text={}> - статья с разметкой одной публикации.
После рефакторинга, корневой компонент <Reader> будет выглядеть так.

<>
  <Controls ... />
  <Progress ... />
  <Publication ... />
</> */

// if (index === 0) {
//   console.log("🤨");
//   this.setState({ index: 11 });
// }
// if (index === 11) {
//   console.log("🇺🇦");
//   this.setState({ index: 0 });
// }
