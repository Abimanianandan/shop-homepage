import React, { useState } from 'react';

const Card = ({item,cart,setCart}) => {
  const[toggle,setToggle]=useState(true);
  
    return (
      <div>
        <div class="card" style={{ width: "18rem" }}>
          {item.sale ? (
            <div
              class="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            ""
          )}
          <img src={item.url} class="card-img-top" alt="img" />
          <div class="card-body">
            <h4 class="card-title text-center">{item.title}</h4>
            {item.star?<div class="text-center">
              <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
              <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
              <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
              <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
              <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
            </div>:""}
            {item.sale ? (
              <div class="text-center mb-3">
                <span class="text-muted text-decoration-line-through text-center">
                  {item.price1}
                </span>
                {item.price2}
              </div>
            ) : (
              <p class="text-center ">{item.price}</p>
            )}
            {toggle?<button class="btn btn-outline-dark mt-auto"
             onClick={()=>{setCart(cart+1)
            setToggle(false)}}>Add to Cart</button>:
            <button class="btn btn-outline-danger mt-auto" 
            onClick={()=>{setCart(cart-1)
            setToggle(true)}}>Remove to Cart</button>}
          </div>
        </div>
      </div>
    );
};

export default Card;