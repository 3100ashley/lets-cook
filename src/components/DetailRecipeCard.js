import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function DetailRecipeCard(props) {
  return (
    <Card className="max-w-4xl mb-10">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        
        <Card.Text>
            <h4>Ingredients:</h4>
          <ul>
            {props.ingredients &&
              props.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
          </ul>
          <p>{props.instructions}</p>
          <Button variant="dark"><a href={props.youtube} className="text-white no-underline">Youtube</a></Button> 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
