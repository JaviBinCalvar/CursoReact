import classes from './NavBar.module.css'
import CarWidget from '../CarWidget/CarWidget'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <Link to={"/"}><h1 className={classes.titulo}> Ecommerce Pesca </h1></Link>
            <section>
                <Link to={"/category/Moscas"}><Button label="Moscas"></Button></Link>
                <Link to={"/category/Anzuelos"}><Button label= "Anzuelos"></Button></Link>
                <Link to={"/category/Materiales"}><Button label="Materiales"></Button></Link>
            </section>
            <CarWidget />
        </nav>
    )
}
export default NavBar