"use client";
import React from "react";

const EventExample = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!`);
  };

  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
};

export default EventExample;
