import React, { useEffect } from "react";
import { useState } from "react";

export default function Members() {
    const [data, setData] = useState({});

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await fetch("http://localhost:3000/members")
            }
        }
    }
    )
}