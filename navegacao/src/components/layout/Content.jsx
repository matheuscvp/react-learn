import './Content.css'
import {Routes, Route} from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home';
import Param from './../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = props => {
    return (
        <main className='Content'>
            <Routes>
                <Route path="/About" element={<About/>}> </Route>
                <Route path="/Param/:id" element={<Param/>}> </Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </main>
    );
};

export default Content;