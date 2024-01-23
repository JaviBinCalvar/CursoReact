import classes from './NavBar.module.css'
import CarWidget from '../CarWidget/CarWidget'
import Button from '../Button/Button'

const NavBar = () => {
    return (
        <nav>
            <h1 className={classes.titulo}> Ecommerce Pesca </h1>
            <section>
                <Button>Moscas</Button>
                <Button>Anzuelos</Button>
                <Button>Plumas</Button>
            </section>
            <CarWidget />
        </nav>
    )
}
export default NavBar