import React from "react";
import Video from "./components/Videos/Videos";
import Data from "../data";
import { useState } from "react";

export default function AddVideos() {
  const [data, setData] = useState(Data);
  const [video, setVideo] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    verify: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (video.title && video.description) {
      setData((prev) => [...prev, video]);
      setVideo({
        id: 0,
        title: "",
        description: "",
        image: "",
        verify: true,
      });
    }
  }
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setVideo({
      ...video,
      id: data.length + 1,
      image: `https://picsum.photos/id/${data.length + 1}/200/300`,
      [name]: type === "checkbox" ? checked : value,
    });
    console.log(data.length);
  }

  function deleteHandler(id) {
    setData(data.filter((item) => item.id !== id));
  }

  const allElements = data.map((item, index) => (
    <Video
      title={item.title}
      description={item.description}
      image={item.image}
      verify={item.verify}
      id={item.id}
      key={item.id}
      deleteHandler={deleteHandler}
    />
  ));
  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={video.title}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={video.description}
        />
        <input
          type="checkbox"
          name="verify"
          onChange={handleChange}
          value={video.verify}
        />
        <button onClick={handleSubmit}>Add Videos</button>
      </form>

      <main>{allElements}</main>
    </div>
  );
}
