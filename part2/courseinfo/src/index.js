import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

/* const Total = props => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return <p>Total number of exercises {total}</p>
} */ 
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    {props.parts.map((elem, index) =><Part key = {index} part={elem} />)}
  </div>
)

const Course = props => {
  return (
    <>
      <Header course = {props.name}/> 
      <Content parts = {props.parts}/> 
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  } 

  return (
    <Course name = {course.name} parts = {course.parts}/> 
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)