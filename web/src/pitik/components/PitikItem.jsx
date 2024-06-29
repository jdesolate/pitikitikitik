import "./PitikItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

const PitikItem = (props) => {
  return (
    <li className='pitik-item'>
      <Card className='pitik-item__content'>
        <div className='pitik-item__image'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='pitik-item__info'>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className='pitik-item__actions'>
          <Button inverse>VIEW MAP</Button>
          <Button to={`/pitiks/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PitikItem;
