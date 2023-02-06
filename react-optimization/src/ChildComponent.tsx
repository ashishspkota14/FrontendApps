import { useMemo } from "react";
import AnotherChild from "./AnotherChild";

function ChildComponent({ handleUpdate }: { handleUpdate(): void }) {
  console.log("child component rendered");
  {
    handleUpdate();
  }

  return (
    <div>
      <h1>Hello World</h1>
      {useMemo(
        () => (
          <AnotherChild />
        ),
        []
      )}
    </div>
  );
}

export default ChildComponent;
