import React, {useState, useEffect} from "react";
import NavBarComponent from "./NavBarComponent";
import SideBarComponent from "./SideBarComponent";

function Product(props){
    
    const [product,setProduct] = useState({
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 120
        }
        });

   

    useEffect(() => {
        const manejarEnvio = async () => {
            try {
                const resp = await fetch('https://fakestoreapi.com/products/'+window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1));
                const prod = await resp.json();
                const data = {
                        id: prod.id,
                        title: prod.title,
                        price: prod.price,
                        description: prod.description,
                        category: prod.category,
                        image: prod.image,
                        rating: {
                        rate: prod.rating.rate,
                        count: prod.rating.count
                        }
                };
                console.log(data);
                 setProduct(data);
            } catch(error) {
                console.log(error);
            }
        };
        manejarEnvio();
    }, []);


    return(
        <div class="containera">  
              <NavBarComponent/>
        <SideBarComponent/>
        <div>
        <div class="row">
        <div class="col-sm-4">
        <div className='imagedetail'>
            <img src={product.image} alt="" width={250} height={400}/>
        </div>
        </div>
        <div class="col-sm-8">
        <div className='detail' style={{width:'380px'}}>
            SKU:{product.id}
            <br/>
            <h1>{product.title}</h1>
            <br/>
            <h3>${product.price}</h3>
            <br/>
            <h5>{product.description}</h5>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Product;