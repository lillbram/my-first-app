interface ClientCardProps {
  name: string;
  city: string;
  active: boolean;
  phone: string;
}

export default function ClientCard({ name, city, active, phone }: ClientCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-zinc-500">{city}</p>
      <p className="text-sm text-zinc-500">{phone}</p>
      <p className="text-xs text-zinc-400">{active ? "Active" : "Inactive"}</p>
    </div>
  );
}
