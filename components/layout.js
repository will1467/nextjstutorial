import Navbar from './navbar';
import Head from 'next/head';


const layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/cerulean/bootstrap.css"/>
        </Head>
        <Navbar/>
        <div className="container">{props.children}</div>
    </div>
)

export default layout;