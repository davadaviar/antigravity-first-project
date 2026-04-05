import { prisma } from '@/lib/prisma';
import AdminUI from '@/components/AdminUI';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [siteData, portfolioItems, testimonials] = await Promise.all([
    prisma.siteData.findUnique({ where: { id: 'singleton' } }),
    prisma.portfolioItem.findMany({ orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ orderBy: { order: 'asc' } })
  ]);
  
  if (!siteData) return <div>Data missing. Ensure you seeded the DB.</div>;

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 style={{fontSize: '3rem', marginBottom: '2rem'}}>Admin Dashboard</h1>
      <AdminUI siteData={siteData} portfolioItems={portfolioItems} testimonials={testimonials} />
    </div>
  );
}
