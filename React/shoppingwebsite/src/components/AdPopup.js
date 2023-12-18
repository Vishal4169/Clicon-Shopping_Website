import  { Container } from "react-bootstrap";
import { ButtonCreation } from "./button";

import './header.css';

export function AdPopup(){
    return(
        <div style={{background:"#191C1F"}}>
            <Container>
            <div className="advertisementPopup d-flex justify-content-between p-2">
                <div className="advertisement__blackFriday">
                    <span className="ad_alignText">Black</span>&nbsp;&nbsp;
                    <span>Friday</span>
                </div>
                
                <div className="advertisement__offers d-flex gap-2">
                    <span >Up to</span>
                    <span className="adOffer--bold text-center">59%</span>
                    <span>OFF</span>
                </div>

              <ButtonCreation btnColor="yellow" />

            </div>
            </Container>
        </div>
            

           
    );
}