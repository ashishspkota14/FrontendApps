import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/user-slice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log(users);

  console.log(userId);

  const author = users.find((user) => +user.id === userId);

  console.log(author);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
