import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxWidth: '500px',
        minWidth: '500px',
        transform: 'translate(-50%,-50%)',
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
        color: '#757575',
        padding: '20px 0 20px 0',
    },
}));
const Entry = () => {
    const classes = Styles();

    // <form> 태그의 noValidate 속성: 
    //  입력값이 input control 의 type 에 맞는지 데이터의 유효성을 검사하지 않음
    return (
        <div>
            <Container className={classes.container} >
            <Typography variant="h4" className={classes.signIn}>Sign in</Typography>
            <form noValidate>
                <TextField
                variant='outlined'
                margin='normal'
                required                // * (필수 입력사항 표시)
                fullWidth
                id='email'
                label='이메일'   // hint text
                //name='email'
                autoComplete='email'
                autoFocus
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
                />
                <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='아이디 저장'
                />
                <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
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
            </form>
            </Container>
        </div>
    );
}

export default Entry;