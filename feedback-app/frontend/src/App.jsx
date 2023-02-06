import { useEffect, useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
// import { feedbackData } from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState([]);
  // Primitive
  // string, number, null, undefined, NaN
  // console.log([1, 2] === [1, 2]);
  // console.log(undefined === undefined);

  const fetchFeedback = async () => {
    try {
      console.log("Fetching data from db");
      const response = await fetch("http://localhost:4000/feedbacks");
      const data = await response.json();

      setFeedback(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createFeedback = (newFeedback) => {
    fetch("http://localhost:4000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
  };

  // TODO: Implement update feedback
  const updateFeedback = () => {
    fetch("http://localhost:4000/feedbacks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteFeedbackFromDB = (id) => {
    fetch(`http://localhost:4000/feedbacks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  // CRUD
  // Create: POST
  // Read: GET
  // Update: PUT/PATCH
  // Delete: DELETE

  useEffect(() => {
    console.log("Running useEffect Hook");
    fetchFeedback();
  }, []);

  function deleteFeedback(clickedId) {
    // console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      // setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
      deleteFeedbackFromDB(clickedId);
    }
  }

  function addFeedback(newFeedback) {
    setFeedback([...feedback, newFeedback]);
  }

  return (
    <div className="container">
      <Header text="Feedback App" />
      <FeedbackForm addFeedback={addFeedback} createFeedback={createFeedback} />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      <FeedbackStats feedback={feedback} />
    </div>
  );
}

export default App;
