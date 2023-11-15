// import React { useState, useEffect } from "react";

export default function Table({ data }) {
  console.log("recieved data prop in table component:", data);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>firstname</td>
                        <td>lastname</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
}
