"use client"

import { useEffect, useState } from "react";

export default function useCategories () {

const [categories, setCategories] = useState([]);

useEffect(() => {
    fetchCategories().then((data) => {
        setCategories(data.data)
    });
  }, [])

if(categories) {
    return categories
}
}

async function fetchCategories() {
    const categories = await fetch('/api/category')
    const finalDatas = await categories.json();
    return finalDatas;
};