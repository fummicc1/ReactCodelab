import React from 'react';

const style = {
    maxWidth: "700px",
};

const button = {
    cursor: "pointer",
};

function List(props) {
    return (
        <ul className="siimple-list">
            <li className="siimple-list-item siimple--bg-white" style={style}>
                Item 1 <span className="siimple-tag siimple-tag--error siimple-hover" style={button}>Delete</span>
            </li>
        </ul>
    )
}

export default List;