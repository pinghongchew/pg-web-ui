import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Divider />
            <Toolbar>
                <Typography className={classes.root} align="center">© 2021 Property Goal</Typography>
                {/* <Typography className={classes.root}>© 2021 Property Goal</Typography> */}
            </Toolbar>
        </div>
    )
}

export default Footer
