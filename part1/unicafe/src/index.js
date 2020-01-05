import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>{props.content}</h1>;

const Button = props => <button onClick = {props.onClick}>{props.text}</button>;

const Statistic = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {   
    return (
      <table>
        <tbody>
        <Statistic text="good" value = {props.info.good}/>
        <Statistic text="neutral" value = {props.info.neutral}/>
        <Statistic text="bad" value = {props.info.bad}/>
        <Statistic text="all" value = {props.info.good + props.info.bad + props.info.neutral}/>
        <Statistic text="average" value = {(props.info.good + props.info.bad + props.info.neutral)/3}/>
        <Statistic text="positive" value = {props.info.good*100/(props.info.good + props.info.neutral + props.info.bad) + "%"}/> 
        </tbody>
      </table>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let goodClick = function () {
      setGood(good + 1);
  }

  let neutralClick = function () {
      setNeutral(neutral + 1);
  }

  let badClick = function () {
      setBad(bad + 1); 
  }

  if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <Header content = "give feedback"/>
                <Button text = "good" onClick = {goodClick} />
                <Button text = "neutral" onClick = {neutralClick} />
                <Button text = "bad" onClick = {badClick} />
                <Header content = "statistics"/>
                <p>No feedback given</p>
            </div>
        ) 
  } else {
        return (
            <div>
                <Header content = "give feedback"/>
                <Button text = "good" onClick = {goodClick} />
                <Button text = "neutral" onClick = {neutralClick} />
                <Button text = "bad" onClick = {badClick} />
                <Header content = "statistics"/>
                <Statistics info = {{good: good, neutral: neutral, bad: bad}}/>
            </div>
        )
  }
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)