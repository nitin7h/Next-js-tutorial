import Link from "next/link";

export default async function Users() {
  // fetch data direct and make funtion async
  const response = await fetch("https://dummyjson.com/users");

  const responseData = await response.json();
  // console.log("responseData : ", responseData);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          {responseData.users.map((items, index) => {
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
