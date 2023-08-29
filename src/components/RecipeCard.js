import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecipeCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant='dark'>Go to recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;