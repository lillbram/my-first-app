interface Client {
  name: string;
  city: string;
  active: boolean;
  email?: string;
}

export default function Home() {
  const clients = [
    {
      name: "PT Maju Jaya",
      city: "Jakarta",
      active: true,
      phone: "021-555-0101",
    },
    {
      name: "CV Sinar Abadi",
      city: "Bekasi",
      active: false,
      phone: "021-555-0102",
    },
    {
      name: "PT Bumi Sentosa",
      city: "Bandung",
      active: true,
      phone: "022-555-0103",
    },
    {
      name: "PT Cahaya Baru",
      city: "Surabaya",
      active: true,
      phone: "031-555-0104",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <h1 className="text-2xl font-semibold mb-6">My Clients</h1>

      <div className="flex flex-col gap-3 max-w-md">
        {clients
          .filter((c) => c.active)
          .map((client) => (
            <div
              key={client.name}
              className="rounded-lg border border-zinc-200 bg-white p-4"
            >
              <p className="font-medium">{client.name}</p>
              <p className="text-sm text-zinc-500">{client.city}</p>
              <p className="text-sm text-zinc-500">{client.phone}</p>
              <p className="text-sm text-zinc-500">{client.email?}</p>
            </div>
          ))}
      </div>
    </main>
  );
}
