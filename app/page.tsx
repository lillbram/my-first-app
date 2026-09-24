import ClientCard from "./components/ClientCard";

interface Client {
  name: string;
  city: string;
  active: boolean;
  phone: string;
}

export default function Home() {
  const clients: Client[] = [
    { name: "PT Maju Jaya", city: "Jakarta", active: true, phone: "021-555-0101" },
    { name: "CV Sinar Abadi", city: "Bekasi", active: false, phone: "021-555-0102" },
    { name: "PT Bumi Sentosa", city: "Bandung", active: true, phone: "022-555-0103" },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <h1 className="text-2xl font-semibold mb-6">My Clients</h1>

      <div className="flex flex-col gap-3 max-w-md">
        {clients.map((client) => (
          <ClientCard
            key={client.name}
            name={client.name}
            city={client.city}
            active={client.active}
            phone={client.phone}
          />
        ))}
      </div>
    </main>
  );
}
