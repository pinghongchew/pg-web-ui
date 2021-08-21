import '../styles/index.css';
// import App from 'next/app'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';


const theme = createTheme({
    palette: {
        primary: {
            main: '#E35242'
        },
    },
    typography: {
        fontFamily: [
            "Montserrat",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif"
        ].join(','),
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <Box px={{ lg: 10}}>
                    <Nav />
                    <Component {...pageProps} />
                    <Footer />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp