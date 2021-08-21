import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles(() => ({
    root: {
        // display: "flex",
        // height: 250,
    },
    searchBar: {
        display: "flex",
        alignItems: "center",
        width: 700,
        height: 75,
        border: "1px solid lightgray",
        "&:hover": {
            background: "lightgray",
        },
        borderRadius: 40,
    },
    searchButton: {
        width: 75,
        height: 75,
        backgroundColor: "#E35242",
        "&:hover": {
            backgroundColor: "#C23C2F",
        },
        color: "white",
        borderRadius: "50%",
    },
}));

const Search = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item>
                    <Grid container justifyContent="space-evenly" className={classes.searchBar}>
                        <Grid item xs={5}>
                            <Box>
                                <Typography style={{ fontWeight: 600, fontSize: "0.9rem" }}>Keyword</Typography>
                                <TextField
                                    fullWidth
                                    id="searchKeyword"
                                    name="searchKeyword"
                                    placeholder="Where are you renting?"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box borderLeft={1} borderColor="grey.500" pl={1}>
                                <Typography style={{ fontWeight: 600, fontSize: "0.9rem" }}>Min. Rental</Typography>
                                <TextField
                                    disabled
                                    fullWidth
                                    id="searchMinRental"
                                    name="searchMinRental"
                                    placeholder="RM -"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box borderLeft={1} borderColor="grey.500" pl={1}>
                                <Typography style={{ fontWeight: 600, fontSize: "0.9rem" }}>Max. Rental</Typography>
                                <TextField
                                    disabled
                                    fullWidth
                                    id="searchMaxRental"
                                    name="searchMaxRental"
                                    placeholder="RM -"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button className={classes.searchButton}>
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Search
