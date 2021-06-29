import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import styles from './index.module.css';  // css naming

//
function Top(props) {
  return (
    <div className={styles.top}>
      <h1>행동수집 정책편집 페이지</h1>
      <button className={styles.topButton} onClick={props.onClick}>{props.value}</button>
    </div>
  );
}
function Mid(props) {
  return (
    <div className={styles.mid}>
      <h2>ListView</h2>
      <h2>ListView</h2>
      <h2>ListView</h2>
      <h2>ListView</h2>
    </div>
  );
}

function Bot(props) {
  return (
    <div className={styles.bot}>
      <h2>Status : {props.value}</h2>
    </div>
  );
}

class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "null",
    }
  }
  storeRule(index) {
    if (window.confirm(`test ${index}`) === true) {
      // TODO : 실제 저장
      this.setState({ result: `Success ${moment().format('MMMM Do YYYY, HH:mm:ss a')}` });
    }
  }

  render() {
    return (
      <div>
        <Top value="Save" onClick={() => this.storeRule(1)} />
        <Mid />
        <Bot value={this.state.result} />
      </div>
    );
  }
}

ReactDOM.render(
  <Rule />,
  document.getElementById('root')
);