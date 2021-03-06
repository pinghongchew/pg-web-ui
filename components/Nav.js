import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const Nav = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="primary" style={{fontWeight: 600, fontSize: "1.8rem"}}>Property Goal</Typography>
                    <Button color="primary">
                        {/* <AccountCircleTwoToneIcon fontSize="large"/> */}
                        <AccountCircleIcon fontSize="large"/>
                        {/* <img width="30" height="30" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQzNy4wMTk1MzEgNzQuOTgwNDY5Yy00OC4zNTE1NjItNDguMzUxNTYzLTExMi42NDA2MjUtNzQuOTgwNDY5LTE4MS4wMTk1MzEtNzQuOTgwNDY5LTY4LjM4MjgxMiAwLTEzMi42Njc5NjkgMjYuNjI4OTA2LTE4MS4wMTk1MzEgNzQuOTgwNDY5LTQ4LjM1MTU2MyA0OC4zNTE1NjItNzQuOTgwNDY5IDExMi42MzY3MTktNzQuOTgwNDY5IDE4MS4wMTk1MzEgMCA2OC4zNzg5MDYgMjYuNjI4OTA2IDEzMi42Njc5NjkgNzQuOTgwNDY5IDE4MS4wMTk1MzEgNDguMzUxNTYyIDQ4LjM1MTU2MyAxMTIuNjM2NzE5IDc0Ljk4MDQ2OSAxODEuMDE5NTMxIDc0Ljk4MDQ2OSA2OC4zNzg5MDYgMCAxMzIuNjY3OTY5LTI2LjYyODkwNiAxODEuMDE5NTMxLTc0Ljk4MDQ2OSA0OC4zNTE1NjMtNDguMzUxNTYyIDc0Ljk4MDQ2OS0xMTIuNjQwNjI1IDc0Ljk4MDQ2OS0xODEuMDE5NTMxIDAtNjguMzgyODEyLTI2LjYyODkwNi0xMzIuNjY3OTY5LTc0Ljk4MDQ2OS0xODEuMDE5NTMxem0tMzA4LjY3OTY4NyAzNjcuNDA2MjVjMTAuNzA3MDMxLTYxLjY0ODQzOCA2NC4xMjg5MDYtMTA3LjEyMTA5NCAxMjcuNjYwMTU2LTEwNy4xMjEwOTQgNjMuNTM1MTU2IDAgMTE2Ljk1MzEyNSA0NS40NzI2NTYgMTI3LjY2MDE1NiAxMDcuMTIxMDk0LTM2LjM0NzY1NiAyNC45NzI2NTYtODAuMzI0MjE4IDM5LjYxMzI4MS0xMjcuNjYwMTU2IDM5LjYxMzI4MXMtOTEuMzEyNS0xNC42NDA2MjUtMTI3LjY2MDE1Ni0zOS42MTMyODF6bTQ2LjI2MTcxOC0yMTguNTE5NTMxYzAtNDQuODg2NzE5IDM2LjUxNTYyNi04MS4zOTg0MzggODEuMzk4NDM4LTgxLjM5ODQzOHM4MS4zOTg0MzggMzYuNTE1NjI1IDgxLjM5ODQzOCA4MS4zOTg0MzhjMCA0NC44ODI4MTItMzYuNTE1NjI2IDgxLjM5ODQzNy04MS4zOTg0MzggODEuMzk4NDM3cy04MS4zOTg0MzgtMzYuNTE1NjI1LTgxLjM5ODQzOC04MS4zOTg0Mzd6bTIzNS4wNDI5NjkgMTk3LjcxMDkzN2MtOC4wNzQyMTktMjguNjk5MjE5LTI0LjEwOTM3NS01NC43MzgyODEtNDYuNTg1OTM3LTc1LjA3ODEyNS0xMy43ODkwNjMtMTIuNDgwNDY5LTI5LjQ4NDM3NS0yMi4zMjgxMjUtNDYuMzU5Mzc1LTI5LjI2OTUzMSAzMC41LTE5Ljg5NDUzMSA1MC43MDMxMjUtNTQuMzEyNSA1MC43MDMxMjUtOTMuMzYzMjgxIDAtNjEuNDI1NzgyLTQ5Ljk3NjU2My0xMTEuMzk4NDM4LTExMS40MDIzNDQtMTExLjM5ODQzOHMtMTExLjM5ODQzOCA0OS45NzI2NTYtMTExLjM5ODQzOCAxMTEuMzk4NDM4YzAgMzkuMDUwNzgxIDIwLjIwMzEyNiA3My40Njg3NSA1MC42OTkyMTkgOTMuMzYzMjgxLTE2Ljg3MTA5MyA2Ljk0MTQwNi0zMi41NzAzMTIgMTYuNzg1MTU2LTQ2LjM1OTM3NSAyOS4yNjU2MjUtMjIuNDcyNjU2IDIwLjMzOTg0NC0zOC41MTE3MTggNDYuMzc4OTA2LTQ2LjU4NTkzNyA3NS4wNzgxMjUtNDQuNDcyNjU3LTQxLjMwMDc4MS03Mi4zNTU0NjktMTAwLjIzODI4MS03Mi4zNTU0NjktMTY1LjU3NDIxOSAwLTEyNC42MTcxODggMTAxLjM4MjgxMi0yMjYgMjI2LTIyNnMyMjYgMTAxLjM4MjgxMiAyMjYgMjI2YzAgNjUuMzM5ODQ0LTI3Ljg4MjgxMiAxMjQuMjc3MzQ0LTcyLjM1NTQ2OSAxNjUuNTc4MTI1em0wIDAiIGZpbGw9IiNlMzUyNDIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" /> */}
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
