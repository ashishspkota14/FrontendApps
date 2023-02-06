import React from "react";
import Card from "./common/Card";
import Spinner from "./common/Spinner";
import Feedback from "./Feedback";

function FeedbackList({ feedback, deleteFeedback }) {
  // 0, '', undefined, null, false, NaN
  console.log(feedback);
  console.log(feedback.length);

  // Validate feedback with PropTypes
  return (
    <div>
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => (
          <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default FeedbackList;
