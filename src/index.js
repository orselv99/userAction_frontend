import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import styles from './index.module.css';  // css naming
import axios from 'axios';

// 제목 + 저장버튼
function Top(props) {
  return (
    <div className={styles.top}>
      <h1>행동수집 정책편집 페이지</h1>
      <button className={styles.topButton} onClick={props.onClick}>{props.value}</button>
    </div>
  );
}

// 컨텐츠
function Mid(props) {
  let jsonData = props.value.data;
  //let displayed = `${JSON.stringify(jsonData)}`;
  //console.log(`displayed: ${displayed}`);
  console.log(`displayed: ${jsonData.timerInterval}`);

  return (
    <div className={styles.mid}>
      <div className={styles.midLeft}>
        <form>
          <p>ListView</p>
          <p>ListView</p>
          <p>ListView</p>
          <p>ListView</p>
        </form>
      </div>
      <div className={styles.midRight}>
        <p>{JSON.stringify(jsonData)}</p>
      </div>
    </div>
  );
}

// 상태 표시줄
function Bot(props) {
  let job = props.value.job;
  let jobResult = props.value.jobResult;
  let result = "";
  let timestamp = "";

  if ((job.length <= 0) || (jobResult.length <= 0)) {
    // 디버깅용 (job, jobResult 는 값이 반드시 있어야 함)
    console.assert();
  }
  else {
    // 상태 기록
    result = `latest job (${job}) is ${jobResult}.`;
    timestamp = `${props.value.timestamp}`;
  }

  return (
    <div className={styles.bot}>
      <p>{result}</p>
      <p>{timestamp}</p>
    </div>
  );
}

class Rule extends React.Component {
  constructor(props) {
    super(props);
    console.log('call constructor() for Rule');
    // 정책 확인
    this.state = {
      job: "",
      jobResult: false,
      timestamp: "",
      data: null,
    }
  }

  generateTimestamp() {
    return `${moment().format('MMMM Do YYYY, HH:mm:ss a')}`;
  }

  // 저장 이벤트
  storeRule(index) {
    if (window.confirm(`test ${index}`) === true) {
      //
      // TODO : 실제 저장
      //
      const result = true;
      this.setState({
        job: "storeRule",
        jobResult: result,
        timestamp: this.generateTimestamp(),
        data: null,
      });
    }
  }

  // 서버에 정책요청
  async componentDidMount(prevProps) {
    console.log('call componentDidMount() for Rule');
    const result = await axios.get('http://127.0.0.1:30001/getRule');
    console.log(`${JSON.stringify(result.data)}`);
    this.setState({
      job: "getRule",
      jobResult: (result.data) ? true : false,
      timestamp: this.generateTimestamp(),
      data: result.data,
    });
  }

  render() {
    console.log('call render() for Rule');
    return (
      <div>
        <Top value="Save" onClick={() => this.storeRule(1)} />
        {this.state.data && <>
          <Mid value={this.state} />
          <Bot value={this.state} />
        </>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Rule />,
  document.getElementById('root')
);