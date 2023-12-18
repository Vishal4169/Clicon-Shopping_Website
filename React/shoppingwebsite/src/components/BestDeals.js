import {Card} from 'react-bootstrap';


export function BestDeals(props){
    return (
            <Card style={{ width: '12rem'}}> 
            <Card.Body>
            <Card.Img variant="top" src={props.productImage} />
                <Card.Text>
                    {props.productContent}
                </Card.Text>
                <Card.Text>
                    {props.productPrice}
                </Card.Text>
            </Card.Body>
            </Card>
        
      );
}