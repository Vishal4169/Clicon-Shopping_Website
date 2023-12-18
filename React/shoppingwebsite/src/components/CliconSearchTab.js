import {Container} from 'react-bootstrap'



export function CliconSearchTab(){
    return(
        <div>
            <Container>
            <section className="socialMediaLinks d-flex justify-content-between p-2">
                <div class="socialMediaLinks--content">
                    <span>Welcome to Clicon online eCommerce store</span>
                </div>
                <div class="socialMediaComponents d-flex justify-content-between">
                    <div class="socialMediaLinks--followUs ">
                        <span>Follows Us:</span>
                       
                        <i class="fa-brands fa-youtube fa-x"></i>&nbsp;
                        <i class="fa-brands fa-pinterest fa-x"></i>&nbsp;
                        <i class="fa-brands fa-reddit fa-x"></i>
                    </div>

                    <div class="blank_line"></div>
                    <div class="socialMedia_language-country d-flex gap-1">
                        <select class="form-select" aria-label="Disabled select example">
                            <option selected>Eng</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Disabled select example">
                            <option selected>USD</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                    </div>
                </div>
            </section>


            </Container>
        </div>
        
    )
}