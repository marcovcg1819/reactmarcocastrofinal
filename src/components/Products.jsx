import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavBarComponent from './NavBarComponent';
import SideBarComponent from './SideBarComponent';


import Product from './Product';

function Products(){
    const [products, setProducts] = useState([]);

    const manejarEnvio = (e) =>{
       // e.preventDefault();

        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((error)=>console.error('error al obtener los productos', error));

    };

    manejarEnvio();

    return(
        <div class="containera">  
              <NavBarComponent/>
        <SideBarComponent/>
  
    
        <div class="row">
            {
        products.map(function(item, i){
            
            return <div style={{width:'360px', justifyContent: 'center'}}>
                        <div class="col-md-12">
                            <div class="card" style={{width:'300px', height: '400px', margin:'50px'}}>
                                <div class="card-body">
                                <Link style={{ textDecoration: 'none', color:'black' }} 
                                        to={{
                                            pathname: `/product/${item.id}`,
                                            state: { item },
                                        }}
                                        >
                                    <img src={item.image} alt="" width={200} height={200}/>
                                    </Link>
                                    <h5>Nombre: {item.title}</h5>

                                    <Link style={{ textDecoration: 'none', color:'black' }} 
                                        to={{
                                            pathname: `/product/${item.id}`,
                                            state: { item },
                                        }}
                                        >
                                        Ver Producto
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        })} 
        </div>
        </div>
      
        
    )

}

export default Products;