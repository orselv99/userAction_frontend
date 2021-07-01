import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';    // 조건부 css 적용을 위한 라이브러리
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='홈' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary='정책관리' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='사용자관리' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='차트' />
        </ListItem>
    </div>
);
const drawerWidth = 240;
const Styles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolBar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuShow: {
        marginRight: 36,
    },
    menuHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaperOpen: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    fixedHeight: {
        height: 240,
    },
}));
const DashBoard = () => {
    // styles
    const classes = Styles();
    // state hooks
    const [open, setDrawerOpen] = useState(true);
    // events
    const onClickDrawerOpen = (e) => {
        setDrawerOpen(true);
    }
    const onClickDrawerClose = (e) => {
        setDrawerOpen(false);
    }

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <AppBar position='absolute' className={clsx(classes.appBar, open === true && classes.appBarShift)}>
                <Toolbar className={classes.toolBar}>
                    <IconButton
                        // 메뉴 보이기/숨김 버튼
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        className={clsx(classes.menuShow, open === true && classes.menuHidden)}
                        onClick={onClickDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
                        관리자 페이지
                    </Typography>
                    <IconButton color='inherit'>
                        <Badge badgeContent={4} color='secondary'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer
                variant='permanent'
                classes={{
                    paper: clsx(classes.drawerPaperOpen, open === false && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={onClickDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List>{mainListItems}</List>
            </Drawer>
        </div>
    );
}

export default DashBoard;