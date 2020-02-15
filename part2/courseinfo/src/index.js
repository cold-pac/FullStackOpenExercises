import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div> 
      <h1>Web Development Curriculum</h1>
      {courses.map(elem => <Course id = {elem.id} name = {elem.name} parts = {elem.parts} /> )}
    </div> 
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)