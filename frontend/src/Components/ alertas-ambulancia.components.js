const Home = () => { 

    const handleClick = () => {
        console.log("hola")
    }

    return ( 
        <div className="Atropellamiento">
        <h2>Seleccione el tipo de emergencia</h2>
        <button onClick={handleClick}> Atropellamiento</button>
        </div>
    );


}

export default Home;