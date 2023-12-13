import  { Container,Row,Col } from "react-bootstrap";

import './ui.css';

export function UiLayerAdPopup(){
    return(
        <Container>
            <div className="advertisementPopup d-flex justify-content-between p-2">
                <div className="advertisement__blackFriday">
                    <span className="ad_alignText">Black</span>
                    <span>Friday</span>
                </div>
                
                <div className="advertisement__offers">
                    <span>Up to</span>
                    <span className="adOffer--bold">59%</span>
                    <span>OFF</span>
                </div>

                <button type="button" className="btn btn-warning">SHOP NOW &nbsp;   
                    </button>

            </div>
         </Container>
       
    );
}