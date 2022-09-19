import './TargetingBox.css'

function TargetingBox(props) {
    // console.log(props.x, props.y)

  function stopBubbling(event) {
    event.stopPropagation()
  }

  return (
    <div className="targetingBox" style={{top: props.watchedArea.yPos-50, left: props.watchedArea.xPos-50}}>
        <div onClick={stopBubbling} className='dropdown'>
            <div className='first'>
                Waldo
                <button onClick={props.submitArea}>X</button>
            </div>
        </div>
    </div>
  );
}

export default TargetingBox;
