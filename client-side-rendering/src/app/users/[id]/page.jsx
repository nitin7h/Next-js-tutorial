"use client";

import { useState, useEffect } from "react";

export default function page({ params }) {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFunction = async () => {
      const datafetch = await fetch(`https://dummyjson.com/users/${params.id}`);
      const userData = await datafetch.json();
      setData(userData);
    };
    dataFunction();
  }, []);

  console.log("****  : ", data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>ID : {params.id}</h1>
        <h1>Username : {data?.firstName}</h1>
        <h1>Username : {data?.lastName}</h1>
        <h1>Username : {data?.age}</h1>
      </main>
    </div>
  );
}
