"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function page() {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFunction = async () => {
      const datafetch = await fetch("https://dummyjson.com/users");
      const userData = await datafetch.json();
      setData(userData);
    };
    dataFunction();
  }, []);

  console.log("data : ", data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>User Page </h1>
        {data?.users?.map((usersDetails, index) => {
          return (
            <div key={index}>
              <Link href={`/users/${usersDetails.id}`}>
                <li>
                  {usersDetails.firstName} {usersDetails.lastName}
                </li>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
