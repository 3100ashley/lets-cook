
import Card from 'react-bootstrap/Card';

function RecipeCard(props) {
  return (
    <Card className={"mb-10 " +props.width}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
       {props.children}
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;