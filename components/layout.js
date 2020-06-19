import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next Practice</title>
            <link rel='stylesheet' href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        {props.children}
    </div>
)

export default Layout