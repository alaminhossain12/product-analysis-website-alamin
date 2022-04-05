import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Question #1 : What is Semantic Tags?
          </Accordion.Header>
          <Accordion.Body>
            <strong>
              Semantic elements: header, main, footer, form, article etc.
            </strong>{" "} <br />
            A semantic element clearly describes its meaning to the browser and
            the developer. <br /> Examples of non-semantic elements: div and span -
            Tells nothing about its content. <br /> Semantic elements: header, main,
            footer, form, article - Clearly define its content. <br /> HTML5 introduces
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Question #2 : What is Context api?
          </Accordion.Header>
          <Accordion.Body>
            <strong>
            This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on
            </strong>{" "} <br />
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. <br /> Context Api, allows us to pass data through our component trees,
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question #3 Inline and block level Elements
          </Accordion.Header>
          <Accordion.Body>
            <strong>Inline Elements and Inline Block Elements.</strong> <br /> i. Block
            Level Elements: A block-level element always starts on a new line,
            takes up the full width available. <br /> ii. Inline Elements: An inline
            element does not start on a new line, only takes up as much width as
            necessary. <br /> iii. Inline element does not support width height,
            padding, etc. <br /> iv. But using inline-block support width-height,
            padding, etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
