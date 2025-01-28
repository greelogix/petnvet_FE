
import Header from '../Header';
import Footer from '../Footer'

import { Outlet } from 'react-router-dom';






function Mainlayout() {


    return (
        <>
            <Header />
            <Outlet />
            <Footer/>

        </>
    );
}

export default Mainlayout;
