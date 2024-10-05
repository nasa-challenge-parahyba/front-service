import '../styles/ModalBox.css';

import { useState } from "react"

export default function ModalBox({ children, buttonText, textColor = "black", background = "white" }) {
    const [active, setActive] = useState(false);
    return (
        <div>
            <button
                id="myBtn"
                onClick={() => setActive(true)}
                style={{
                    color: textColor, backgroundColor: background,
                    border: "solid 1px red",
                }}>{buttonText}</button>

            {active && <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={() => setActive(false)}>&times;</span>
                    {children}
                </div>
            </div>}
        </div>
    )
}
