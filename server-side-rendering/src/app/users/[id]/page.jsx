export default async function page({ params }) {
  const data = await fetch(`https://dummyjson.com/users/${params.id}`);
  const usersData = await data.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div key={usersData.id}>
          <li>{usersData.firstName}</li>
          <li>{usersData.lastName}</li>
          <li>{usersData.age}</li>
          <li>{usersData.university}</li>
        </div>
      </main>
    </div>
  );
}
