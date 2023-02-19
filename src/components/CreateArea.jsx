import React, { useState } from "react";
//import functionality with external packages

function CreateArea(props) {
    //conditional rendering
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
        //setExpanded to true upon click => listen to event and execute action in form
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    onClick={expand}
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <div in={isExpanded}>
                    {/* 'in' prop boolean */}
                    <button onClick={submitNote}>
                        +
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateArea;
