import { useState } from "react";
import Card from "./common/Card";
import Button from "./common/Button";
import FeedbackRating from "./FeedbackRating";
import { v4 as uuidv4 } from "uuid";

function FeedbackForm({ addFeedback, createFeedback }) {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(0);

  console.log(text);

  function handleChange(e) {
    if (text === "") {
      setErrorMessage(null);
      setIsDisabled(true);
    } else if (text !== "" && text.trim().length < 10) {
      setErrorMessage("Your text should be greater then 10 characters");
      setIsDisabled(true);
    } else {
      setErrorMessage(null);
      setIsDisabled(false);
    }
    setText(e.target.value);
  }

  function grabRating(inputRating) {
    setRating(inputRating);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newFeedback = { text, rating, id: uuidv4() };

    // addFeedback(newFeedback);
    createFeedback(newFeedback);
    setText("");

    // TODO
    // clear input rating as well
  }

  return (
    <Card>
      <h3>Input your feedback!</h3>
      <FeedbackRating grabRating={grabRating} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Input your feedback!"
            value={text}
          />
          <Button isDisabled={isDisabled}>Submit</Button>
        </div>
      </form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Card>
  );
}

export default FeedbackForm;
