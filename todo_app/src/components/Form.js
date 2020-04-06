import React from 'react';

function Form(props) {
    return (
        <form className="">
            <div className="">
                <label className="">ToDo Content: </label>
                <input name="title" type="text" className=""></input>
                <input type="submit" value="Add" className=""></input>
            </div>
        </form>
    )
}

export default Form;