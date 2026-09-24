import ProjectCard from "./components/ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Clientlane",
      description:
        "Client-portal SaaS untuk agensi kreatif — satu tempat rapi buat klien melihat progres, file, dan approval.",
      tags: ["Next.js", "SaaS", "Product Design"],
      link: "https://example.com/clientlane",
    },
    {
      title: "KPoin POS",
      description:
        "Sistem POS dan platform loyalty untuk Kalbe Group, dari desain sistem sampai strategi poin.",
      tags: ["POS", "Loyalty", "Design System"],
      link: "https://example.com/kpoin-pos",
    },
    {
      title: "Gigflow",
      description:
        "Konsep project-management tool untuk freelancer — fokus pada alur kerja yang ringan dan jelas.",
      tags: ["Product", "UX", "Concept"],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Hero */}
        <section>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Bram
          </h1>
          <p className="mt-3 text-lg text-zinc-600">
            Product Designer yang beralih ke Product Engineer — merancang sistem
            sekaligus membangunnya.
          </p>
        </section>

        {/* About */}
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            About
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            Selama tiga tahun terakhir saya merancang CRM, POS, dan produk
            fintech di Kalbe Group. Sekarang saya menutup jarak antara desain
            dan engineering dengan membangun produk end-to-end menggunakan
            TypeScript dan Next.js.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Projects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
