import guy1 from "../../guy1.png"
import guy2 from "../../guy2.png"
import './Task.css'

function Task(props) {

    if(props.foundTiger) {
      const image1 = document.querySelector(".guy1");
      image1.classList.add("found")
    } else if (props.foundKid) {
      const image2 = document.querySelector(".guy2");
      image2.classList.add("found")
    }

    return (
      <div className="task">
            <p>Can you spot these <code>2</code> people?</p>
            <img className="guy1" src={guy1}/>

            <img className="guy2" src={guy2}/>
      </div>
    );
  }
  
  export default Task;
  