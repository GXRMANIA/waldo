import './Scoreboard.css'

function Scoreboard(props) {

  

  return (
    <div className='scoreboard'>
        <h2>Top ten players:</h2>
        <br/>
        {props.scoreboard.sort((a,b) => {
          if(a.time > b.time) {
            return 1
          } else {
            return -1
          }
          }).slice(0,11).map((ele, id) => {
          return <ul key={id}>
            <li className='player'>
              <div>{id+1}. {ele.name}</div>
              <div>Time: {ele.time}</div>
            </li>
            
            </ul>
        })}
    </div>
  );
}

export default Scoreboard;
