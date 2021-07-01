import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';

const Styles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxWidth: '500px',
        minWidth: '500px',
        transform: 'translate(-50%,-50%)',
    },
    header: {
        display: 'flex',
        verticalAlign: 'bottom',
    },
    status: {
        height: '21px',
        textAlign: 'right',
        color: 'red',
    },
    checkBox: {
        padding: '0 0 5px 0'
    },
    links: {
        display: 'flex',
        padding: '10px 0 10px 0',
    },
    linkRight: {
        marginLeft: 'auto',
    },
    copyright: {
        textAlign: 'center',
        padding: '20px 0 20px 0',
    },
}));
const Entry = () => {
    // styles
    const classes = Styles();
    // state hooks
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [focus, setFocus] = useState(true);
    const [status, setStatus] = useState('');
    // redirect
    const history = useHistory();

    // events
    const onChangeId = (e) => {
        // 아이디
        setId(e.currentTarget.value);
    }
    const onChangePassword = (e) => {
        // 패스워드
        setPassword(e.currentTarget.value);
    }
    const onFocus = (e) => {
        setFocus(true);
    }
    const onClickLogin = (e) => {
        // validation
        if ((id !== 'orseL') && (password !== 'zzzzzzzz')) {
            setFocus(false);
            setStatus('Incorrect user info.');
            return;
        }

        history.push('/dashboard');
    }

    // <form> 태그의 noValidate 속성: 
    //  입력값이 input control 의 type 에 맞는지 데이터의 유효성을 검사하지 않음
    return (
        <div>
            <Container className={classes.root} >
                <div className={classes.header}>
                    <Typography variant="h4">Sign in</Typography>
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        // helptext
                        margin='normal'
                        required                // * (필수 입력사항 표시)
                        fullWidth
                        id='id'
                        label='아이디'   // hint text
                        //name='email'
                        autoComplete='id'
                        autoFocus
                        onChange={onChangeId}
                        onFocus={onFocus}
                        aria-describedby='idHelperText'
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        //name='password'
                        label='비밀번호'        // hint text
                        type='password'         // password 형태로 text 표기
                        id='password'
                        autoComplete='current-password'
                        onChange={onChangePassword}
                        onFocus={onFocus}
                        InputProps={{
                            endAdornment: <InputAdornment position='start'> "Icon here" </InputAdornment>,
                        }}
                    />
                    <Grid className={classes.status}>
                        <Typography variant='p'>
                            {
                                // 에러 + 아이디 & 비밀번호가 focus 가 아닐때만 상태표시
                                focus === false
                                    ? status
                                    : ''
                            }
                        </Typography>
                    </Grid>
                    <FormControlLabel
                        className={classes.checkBox}
                        control={<Checkbox value='remember' color='primary' />}
                        label='아이디 저장'
                    />
                    <Button
                        id='buttonLogin'
                        type='button'
                        // type='submit' 인 경우, <form> 에서 재갱신이 발생함
                        // <form> 을 이용해 service 호출하려면, $('formName').submit(function) 이렇게 처리하면 된다는데
                        // 해보진 않음
                        fullWidth
                        variant='contained'
                        color='primary'
                        onClick={onClickLogin}
                    >
                        로그인
                    </Button>
                    <Grid className={classes.links}>
                        <Grid>
                            <Link href='#' variant='body2'>
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid className={classes.linkRight}>
                            <Link href='#' variant='body2'>
                                가입요청
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid >
                        <Typography className={classes.copyright}>
                            Copyright © {new Date().getFullYear()} Editor O. All rights reserved.
                        </Typography>
                    </Grid>
                </div>
            </Container >
        </div >
    );
}

export default Entry;