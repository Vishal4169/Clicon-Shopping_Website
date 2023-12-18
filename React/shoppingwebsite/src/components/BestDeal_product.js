import { playstationProduct } from "../resources";


export function BestDealProduct(){
    return(
         
        <div className="d-flex flex-column align-self-center gap-2">
            <div class="offersPercentage--image">
                <img src={playstationProduct} alt="BigCo Inc. logo"/> 
            </div>
            <div class="customerRating">
              
                <span>(52,677)</span>
            </div>

            <h5>Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version</h5>


            <span class="highlight_color"><span class="highlight">$865.99</span> $442.12</span>


            <p>Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>

            <div class="addToCart--button d-flex justify-content-center  align-self-center">
                <i class="fa-regular fa-heart btn--add_cart align-self-center"></i>
                <div class="btn--cart d-flex">
                    <i class="fa-solid fa-cart-shopping align-self-center"></i>
                    <span>ADD TO CART</span>
                </div>
                <i class="fa-regular fa-eye btn--add_cart align-self-center"></i>
            </div>
        </div>
        
    );
}