// Generate static params for the 10 pages
export async function generateStaticParams() {
  // Create an array of numbers from 1 to 10
  return Array.from({ length: 10 }, (_, i) => ({
    slug: (i + 1).toString(),
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DynamicPage({ params }: any) {
  const s = await params.slug;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">Page {s}</h1>
      <div className="text-xl">This is dynamic page number {s} of 10</div>
    </div>
  );
}
