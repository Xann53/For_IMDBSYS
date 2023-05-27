import { React } from 'react';

function PopupEdit(props) {
    return (props.trigger) ? (
        <div class="popupBG">
            <div class="popupDiv">
                <button onClick={() => props.setTrigger(false)}>CLOSE</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopupEdit;