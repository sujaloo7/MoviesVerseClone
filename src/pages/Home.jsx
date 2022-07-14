import React from 'react'
// import Navbar from '../components/Navbar';
import requests from '../Request';
import Main from './Main';
import Row from '../pages/Row';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
// import requests from '../Requests';


const Home = () => {
    return (

        <>
            <div>
                <Main/>
                <Row title='Trending' fetchURL={requests.requestTrending} />
                <Row title='UpComing' fetchURL={requests.requestUpcoming} />
                <Row title='Popular' fetchURL={requests.requestPopular} />
                <Row title='Top Rated' fetchURL={requests.requestTopRated} />
                <Row title='Horror' fetchURL={requests.requestHorror} />
            </div>
            <Subscribe/>
            <Footer/>


        </>
    )
}

export default Home