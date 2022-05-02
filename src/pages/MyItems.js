import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UploadedList from "../components/items/UploadedList";

const MyItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [myItems, setMyItems] = useState([]);
  const username = useSelector((state) => state.authSlice.userData.username);
  useEffect(() => {
    fetch(`http://localhost:3000/api/item/get/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        // The json data is directly passed to the child component where the loop + render will occurr.
        setMyItems(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>로딩중...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>My Listed Items:</h1>
      <UploadedList items={myItems} />
    </div>
  );
};

export default MyItems;
