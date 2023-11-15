import { useState } from "react";

export default function NamesForm() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = { first_name, last_name };
        console.log(name);

        resetForm();

        await fetch("http://localhost:3333/names", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(name),
        });
    };

    function resetForm() {
        setFirstName("");
        setLastName("");
    }

    return (
        <div className="">
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" required value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" required value={last_name} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <button type="submit">submit</button>
            </form>

        </div>
    )
}