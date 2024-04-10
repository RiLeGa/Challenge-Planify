import React, { useEffect, useState } from 'react';

function Categorias({servicioSeleccionado}) {
    const [categoriaActiva, setCategoriaActiva] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const url = 'src/data/servicios.json';

    const fetchApi = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCategorias(data.services)
        } catch (error) {
            console.error('Error al cargar categorías:', error);
        }
    };
    
    const agruparCategorias = (data) => {
        const catAgrupadas = {};
        data.map(cat => {
            if (!catAgrupadas[cat.category]) {
                catAgrupadas[cat.category] = [];
            }
            catAgrupadas[cat.category].push(cat);
            
        });
        return catAgrupadas;
    }

    const verOpciones = (b) => {
        if (categoriaActiva === b) {
            setCategoriaActiva(null);
        } else {
            setCategoriaActiva(b);
        }
    }

    const seleccionarTurno = (servicio) => {
        sessionStorage.setItem("especialidadSeleccionada", servicio)
        servicioSeleccionado()
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const [categoriasAgrupadas, setCategoriasAgrupadas] = useState({}); 

    useEffect(() => {
        setCategoriasAgrupadas(agruparCategorias(categorias)); 
    }, [categorias]);

     
    return (
        <>
            <h4>Categorias</h4>
            {!categoriasAgrupadas ? 'Cargando...' : (
                <ul>
                {Object.keys(categoriasAgrupadas).map((categoria, index) => (
                    <React.Fragment key={index}>
                        <li onClick={() => verOpciones(categoria)}>
                            {categoria} { categoria != categoriaActiva ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i> } 
                        </li>
                        {categoriaActiva === categoria &&
                        <ul className='opcServ'>
                            {categoriasAgrupadas[categoria].map((cat, subIndex) => (
                                <>
                                    <h5>{cat.name}</h5>
                                    <span key={subIndex}> <p>{cat.description}</p> <button onClick={()=>seleccionarTurno(cat.name)}>Seleccionar</button>  </span>                                  
                                </>
                            ))}
                        </ul>
                        }
                    </React.Fragment>
                ))}
            </ul>
            )}
        </>
    );
}

export default Categorias;
