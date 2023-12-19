import { Container } from "react-bootstrap";
import '../CssStyling/Navigation.css'
import {Font}
export function Navigation(){

    return(
        <Container className="socialMediaLinks">

           <div className="d-flex justify-content-between p-2">

                <span>Welcome to Clicon online eCommerce store</span>
               

                <div className="socialMediaComponents d-flex">
                    <div className="socialMediaLinks--followUs  ">
                        <span>Follows Us:</span>

                        <FontAwesomeIcon icon="fa-brands fa-facebook" />

                        <i class="fa-brands fa-instagram fa-x"></i>&nbsp;
                        <i class="fa-brands fa-facebook fa-x"></i>&nbsp;
                        <i class="fa-brands fa-youtube fa-x"></i>&nbsp;
                        <i class="fa-brands fa-pinterest fa-x"></i>&nbsp;
                        <i class="fa-brands fa-reddit fa-x"></i>
                    </div>

                    <div class="blank_line"></div>

                    <div className="socialMediaLinks--Language--Currency d-flex">
                        <select name="Language">
                            <option value="Eng">Eng</option>
                        </select>
                        <select name="Currency">
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </div>


            </div>

        </Container>
    )
    
}