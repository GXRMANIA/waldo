import './TargetingBox.css'

function TargetingBox(props) {

  function stopBubbling(event) {
    event.stopPropagation()
  }

  return (
    <div className="targetingBox" style={{top: props.watchedArea.yPos, left: props.watchedArea.xPos}}>
        <div onClick={stopBubbling} className='dropdown'>
            <div className='first'>
                Tiger
                <button data-id="tiger" onClick={props.submitArea}>X</button>
            </div>
            <div className='second'>
                Kid
                <button data-id="kid" onClick={props.submitArea}>X</button>
            </div>
        </div>
    </div>
  );
}

export default TargetingBox;
