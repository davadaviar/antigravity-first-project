import { prisma } from '@/lib/prisma';
import { HeroSection, TimelineSection, MarqueeSection, PortfolioSection, TestimonialsSection, FooterSection } from '@/components/Sections';

// Disable caching for this dynamic landing page to reflect admin changes instantly
export const dynamic = 'force-dynamic';

export default async function Home() {
  const [siteData, timelineItems, clients, portfolioItems, testimonials] = await Promise.all([
    prisma.siteData.findUnique({ where: { id: 'singleton' } }),
    prisma.timelineItem.findMany({ orderBy: { order: 'asc' } }),
    prisma.client.findMany({ orderBy: { order: 'asc' } }),
    prisma.portfolioItem.findMany({ orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ orderBy: { order: 'asc' } })
  ]);

  if (!siteData) return <div>Site data not found. Please run seed.</div>;

  return (
    <main>
      <HeroSection data={siteData} />
      <TimelineSection items={timelineItems} />
      <MarqueeSection clients={clients} />
      <PortfolioSection items={portfolioItems} />
      <TestimonialsSection items={testimonials} />
      <FooterSection data={siteData} />
    </main>
  );
}
