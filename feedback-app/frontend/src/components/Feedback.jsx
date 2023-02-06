import { FaTimes } from "react-icons/fa";
import Card from "./common/Card";
import styles from "./Feedback.module.css";

function Feedback({ item, deleteFeedback }) {
  function handleDelete() {
    deleteFeedback(item.id);
  }
  return (
    <Card bgColor="white">
      <h2>{item.text}</h2>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleDelete} className="close">
        <FaTimes color="purple" />
      </button>
    </Card>
  );
}

export default Feedback;
