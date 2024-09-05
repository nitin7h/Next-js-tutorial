"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState();

  //   console.log("user Data : ", users);

  useEffect(() => {
    const data = async () => {
      const response = await fetch("https://dummyjson.com/users");
      setUsers(await response.json());
    };
    data();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          {" "}
          <h1>User Page</h1>
        </div>
        <div>
          {users?.users?.map((items, index) => {
            return (
              <div key={index}>
                <Link href={`/users/${items.id}`}>
                  <li>{items.firstName}</li>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
