Create shop home page using react components and useState hook.


  {/* <div className="col mb-5">
        <div className="card h-100">
       
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
             
              <h5 className="fw-bolder">{data.title}</h5>
              {data.price}
          </div>
      </div>
     
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart+1)
                setToggle(false)
            }}>
                Art to Cart
            </button>:
            <button className="btn btn-outline-danger mt-auto" onClick={()=>{
                setCart(cart-1)
                setToggle(true)
            }}>
                Remove to Cart
            </button>
           }
          </div>
      </div>
  </div>
</div>  
 <div className="col mb-5">
     <div className="card h-100">
     
      <div className={data.sale?"badge bg-dark text-white position-absolute style={top: 0.5rem, right: 0.5rem}":""}>Sale</div>
      
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
     
      <div className="card-body p-4">
          <div className="text-center">
              
              <h5 className="fw-bolder">{data.title}</h5>
              
              <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
            
              <span className="text-muted text-decoration-line-through">$20.00</span>
              $18.00
          </div>
      </div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
             {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
          }}>Add to cart
          </button>:
          <button className="btn btn-outline-danger mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
          }}>Remove to cart
          </button>
       } 
      
          </div>
      </div>
  </div>
</div>
 <div className="col mb-5">
  <div className="card h-100">
     
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
     
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
     
      <div className="card-body p-4">
          <div className="text-center">
            
              <h5 className="fw-bolder">Sale Item</h5>
              
              <span className="text-muted text-decoration-line-through">$50.00</span>
              $25.00
          </div>
      </div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
          }}>Add to cart
          </button>:
          <button className="btn btn-outline-danger mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
          }}>Remove to cart
          </button>
       }
      </div>
      </div>
  </div>
</div>
 <div className="col mb-5">
  <div className="card h-100">
  <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
      
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
             
              <h5 className="fw-bolder">Popular Item</h5>
             
              <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
              
              $40.00
          </div>
      </div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
          }}>Add to cart
          </button>:
          <button className="btn btn-outline-danger mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
          }}>Remove to cart
          </button>
       }
            </div>
      </div>
  </div>
</div>
 <div className="col mb-5">
  <div className="card h-100">
      
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
         
              <h5 className="fw-bolder">Sale Item</h5>
              
              <span className="text-muted text-decoration-line-through">$50.00</span>
              $25.00
          </div>
      </div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart+1)
                setToggle(false)
            }}>
               Art to Cart
             </button>:  
             <button className="btn btn-outline-danger mt-auto" onClick={()=>{
                setCart(cart-1)
                setToggle(true)
            }}>
               Remove to Cart
             </button> 
            }
            </div>
      </div>
  </div>
</div>
 <div className="col mb-5">
  <div className="card h-100">
     
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    
      <div className="card-body p-4">
          <div className="text-center">
              
              <h5 className="fw-bolder">Fancy Product</h5>
              
              $120.00 - $280.00
          </div>
      </div>
     
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart+1)
                setToggle(false)
            }}>
               Art to Cart
             </button>:  
             <button className="btn btn-outline-danger mt-auto" onClick={()=>{
                setCart(cart-1)
                setToggle(true)
            }}>
               Remove to Cart
             </button> 
            }
            </div>
      </div>
  </div>
</div>
 <div className="col mb-5">
  <div className="card h-100">
  
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
     
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
              
              <h5 className="fw-bolder">Special Item</h5>
             
              <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
              
              <span className="text-muted text-decoration-line-through">$20.00</span>
              $18.00
          </div>
      </div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
          }}>Add to cart
          </button>:
          <button className="btn btn-outline-danger mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
          }}>Remove to cart
          </button>
       }
            </div>
      </div>
  </div>
</div>
 <div className="col mb-5">
  <div className="card h-100">
      
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
             
              <h5 className="fw-bolder">Popular Item</h5>
              
              <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
             
              $40.00
          </div>
      </div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {
            toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart+1)
              setToggle(false)
          }}>Add to cart
          </button>:
          <button className="btn btn-outline-danger mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
          }}>Remove to cart
          </button>
       }
            </div>
      </div>
  </div>
</div> */} 