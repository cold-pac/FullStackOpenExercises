import React from 'react'

const Header = props =>
  <h2>{props.course}</h2>

const Total = props => {
  const total = props.parts.map(elem => elem.exercises).reduce((a,b) => a + b)
  return <b>Total of {total} exercises</b>
}  
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    {props.parts.map((elem, index) =><Part key = {index} part={elem} />)}
  </div>
)

const Course = props => {
  return (
    <div>
      <Header course = {props.name}/> 
      <Content parts = {props.parts}/> 
      <Total parts = {props.parts} />
    </div>
  );
}

export default Course