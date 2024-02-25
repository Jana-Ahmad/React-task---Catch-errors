import {useState} from 'react'

function About() {

  let [count,setCounts] = useState(0);
  const changeCount = ()=>{
    setCounts(count + 1);
  };
  return (
    <div>
      <button onClick={changeCount}>count : {count}</button>
    </div>
  )
}

export default About
