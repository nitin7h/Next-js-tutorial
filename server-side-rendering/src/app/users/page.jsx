import Link from "next/link";

export default async function page() {
  const data = await fetch("https://dummyjson.com/users");
  const users = await data.json();
  console.log(users);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Users Information :</h1>

        {users.users.map((details, index) => {
          return (
            <div>
              <Link key={index} href={`/users/${details.id}`}>
                <li>{details.firstName}</li>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
