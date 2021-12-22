import './Menu.css'

import {Link} from 'react-router-dom';

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Param/55">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/Param/Matheus">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/About">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;