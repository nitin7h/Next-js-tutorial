export default async function Id({ params }) {
  const fetchData = await fetch(`https://dummyjson.com/users/${params.id}`);
  const data = await fetchData.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>ID : {params.id}</h1>
        <div>
          <li>First Name : {data.firstName}</li>
          <li>Last Name : {data.lastName}</li>
          <li>Gender : {data.gender}</li>
          <li>Age : {data.age}</li>
        </div>
      </main>
    </div>
  );
}
