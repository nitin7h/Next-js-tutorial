"use client";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

export default function Id({ params }) {
  const [userData, setuserData] = useState();

  useEffect(() => {
    const data = async () => {
      const response = await fetch(`https://dummyjson.com/users/${params.id}`);
      setuserData(await response.json());
    };
    data();
  }, []);
  // console.log("userData : ", userData);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          {" "}
          <h1>User Details</h1>
        </div>
        <div>
          <div>
            <p>Name : {`${userData?.firstName} ${userData?.lastName}`}</p>
            <p>Address: {userData?.address?.address}</p>
            <p>City: {userData?.address?.city}</p>
            <p>State: {userData?.address?.state}</p>
            <p>Postal Code: {userData?.address?.postalCode}</p>
            <p>Country: {userData?.address?.country}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
