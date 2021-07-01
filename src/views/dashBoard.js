import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';    // 조건부 css 적용을 위한 라이브러리

// material
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// material-icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

// features
import Chart from './features/chart'
import Rule from './features/rule'
import Users from './features/users'

const Styles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));
const DashBoard = () => {
    // styles
    const classes = Styles();
    // overview (홈)
    const overview = (
        <Grid container spacing={3} className={classes.container}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={classes.fixedHeight}>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={classes.fixedHeight}>
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                </Paper>
            </Grid>
        </Grid>
    )
    // state hooks
    const [page, setPage] = useState(overview);
    // menu navigation
    const menus = (
        <div>
            {/* 홈 */}
            <ListItem button onClick={(e) => {
                setPage(overview);
            }}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='홈' />
            </ListItem>
            {/* 정책관리 */}
            <ListItem button onClick={(e) => {
                setPage(<Rule />);
            }}>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary='정책관리' />
            </ListItem>
            {/* 사용자관리 */}
            <ListItem button onClick={(e) => {
                setPage(<Users />);
            }}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary='사용자관리' />
            </ListItem>
            {/* 차트 */}
            <ListItem button onClick={(e) => {
                setPage(<Chart />);
            }}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary='차트' />
            </ListItem>
        </div >
    );
    return (
        <div className={classes.root}>
            {/* 상단 */}
            <AppBar position="absolute">
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        관리자 페이지
                    </Typography>
                    {/* 알림 */}
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main>
                {/* 좌측 메뉴 */}
                <div className={classes.appBarSpacer} />
                <List>{menus}</List>
            </main>
            <main className={classes.content}>
                {/* 우측 화면 */}
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg">
                    <Grid>
                        {
                            page === null
                                ? null
                                : page
                        }
                    </Grid>
                    <Box pt={4}>
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default DashBoard;