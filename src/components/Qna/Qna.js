import React from 'react';
import './Qna.css'

const Qna = () => {
  return (
    <div className='qna-container'>
      <h2>This is Qna section</h2>
      <div>
        <h3>Qes1: How React Works?</h3>
        <p>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
        <br /><br />
        <h3>Qes3: How useState Works?</h3>
        <p>Ans: When the request to setState() is triggered, React creates a new tree containing the reactive elements in the component (along with the updated state). This tree is used to figure out how the Search component's UI should change in response to the state change by comparing it with the elements of the previous tree.</p>
      </div>
    </div>
  );
};

export default Qna;