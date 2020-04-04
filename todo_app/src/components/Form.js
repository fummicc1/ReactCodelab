import React from 'react';

function Form(props) {
    return (
        <form className="siimple-form">
            <div className="siimple-form-field">
                <label className="siimple-label siimple--color-white">ToDo Content: </label>
                <input name="title" type="text" className="siimple-input"></input>
                <input type="submit" value="Add" className="siimple-btn siimple-btn--teal"></input>
            </div>
        </form>
    )
}

export default Form;