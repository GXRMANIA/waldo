import './Controls.css'

function Controls(props) {

 function btnClick() {
    props.setTimer();
    props.setShowControls(false)
    props.setShowTask(true);
    props.setEnableTargetingBox(true)
 }

  return (
    <div className="controls">
      <button onClick={btnClick}>Start</button>
    </div>
  );
}

export default Controls;
