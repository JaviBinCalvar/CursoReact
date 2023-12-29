import classes from './NavBar.modules.css'
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {
    return (
        <nav>
            <h1 className={classes.titulo}> Ecommerce Pesca </h1>
            <section>
                <Button>Moscas</button>
                <Button>Anzuelos</button>
                <Button>Plumas</button>
            </section>
            <CarWidget />
        </nav>
    )
}
export default NavBar