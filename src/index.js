import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import styles from './index.module.css';  // css naming
import axios from 'axios';

//
function generateTimestamp() {
  return `${moment().format('MMMM Do YYYY, HH:mm:ss a')}`;
}

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
  let data = props.value.rule;
  let displayed = `${data}`;
  console.log(`displayed: ${JSON.stringify(data)}`);
  

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
        <p>{displayed}</p>
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

    // 정책 확인
    this.state = {
      rule: this.getRule(),
      job:"a",
      jobResult: "b",
      timestamp: "c",
    }
  }

  // 정책 호출
  getRule() {
    let result = null;
    Promise.resolve(axios.get('http://127.0.0.1:30001/getRule')
    .then(res1 => {
      console.log(`res1: ${res1}`);
    })).then((res2) => {
      console.log(`res2: ${res2}`);
      result = res2;
    });    

    return result;
  }

  // 저장 이벤트
  storeRule(index) {
    if (window.confirm(`test ${index}`) === true) {
      // TODO : 실제 저장
      
      this.setState({
        job:"storeRule",
        jobResult: "Success",
        //timestamp: `${moment().format('MMMM Do YYYY, HH:mm:ss a')}`,
      });
    }
  }

  render() {
    return (
      <div>
        <Top value="Save" onClick={() => this.storeRule(1)} />
        <Mid value={this.state} />
        <Bot value={this.state} />
      </div>
    );
  }
}

ReactDOM.render(
  <Rule />,
  document.getElementById('root')
);