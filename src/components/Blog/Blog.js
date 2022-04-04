import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        style={{ marginTop: "100px", width: "420px" }}
        className=" mx-auto border p-4"
      >
        <h3>
          <a href="#">What is React Context API?</a>
        </h3>
        <p>
          The React context API is a way for a React app to effectively produce
          global variables that can be passsed arround.This is the alternative
          to <strong>Props drilling</strong> or moving props from grandparent to
          child to paren,and so on.Context is also touted as an easier,ligter
          approach to state management.
        </p>
      </div>
      <div
        style={{ marginTop: "100px", width: "420px" }}
        className="mx-auto border p-4 mt-4"
      >
        <h3>
          <a href="#">What are Semantic Elements?</a>
        </h3>
        <p>
          Semantic Elements are those that clearly describe the meaning is a
          humane and machine-readable way. like <strong>Header</strong>,
          <strong>footer</strong>,<strong>form</strong>,<strong>article</strong>
          , , are all considered semantic because they are accurately describe
          what is the purpose of the element and the type of content that is
          inside them
        </p>
      </div>
      <div
        style={{ marginTop: "100px", width: "420px" }}
        className="  mx-auto border p-4 mt-4"
      >
        <h3>
          <a href="#">Whats the difference Inline elements and Inline-Block?</a>
        </h3>
        <p>
          <strong>display: inline-block</strong> brought a new way to create
          side by side boxes that collapse and wrap properly depending on the
          available space in the containing element. It makes layouts that were
          previously accomplished with floats easier to create. No need to clear
          floats anymore.the major difference is that inline-block allows to set
          a width and height on the element.
          <strong>Inlice elements</strong>
          Displays an element as an inline element. Any height and width
          properties will have no effect.
        </p>
      </div>
    </div>
  );
};

export default Blog;
