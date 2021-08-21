import Head from 'next/head';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Search from '../components/Search';

const useStyles = makeStyles(() => ({
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Box height={400} pt={10}>
        <Grid container justifyContent="center">
          <Grid item>
            <Search />
          </Grid>
        </Grid>
      </Box>
      <Box height={800}>

      </Box>
    </>
  )
}
