import { Link } from "react-router-dom";

const Home = () => { 

    const handleClick = () => {
        console.log("hola")
    }

    return ( 
        <div>
        <h2></h2>
        <Link className="Ambulancia" 
          to={"/alerta-ambulancia/"} style={{ textDecoration: 'none' }}>
         Ambulancia
        </Link>
        <Link className="Bomberos" 
          to={"/alerta-bomberos/"}>
         <button onClick={handleClick}></button>
         Bomberos
        </Link>
        </div>
        
    );


}

export default Home;