import "./PitikList.css";
import Card from "../../shared/components/UIElements/Card";
import PitikItem from "./PitikItem";

const PitikList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="pitik-list center">
        <Card>
          <h2>No pitiks found. Maybe create one?</h2>
          <button>Share Pitik</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="pitik-list">
      {props.items.map((pitik) => (
        <PitikItem
          key={pitik.id}
          id={pitik.id}
          image={pitik.imageUrl}
          title={pitik.title}
          description={pitik.description}
          address={pitik.address}
          creatorId={pitik.creator}
          coordinates={pitik.coordinates}
        />
      ))}
    </ul>
  );
};

export default PitikList;
