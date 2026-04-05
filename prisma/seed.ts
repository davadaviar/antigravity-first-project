import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Upsert SiteData
  await prisma.siteData.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      heroTitle: 'THE VERBAL\nARCHITECT.',
      heroSubtitle: 'I write Copywrites with 15 years of experience in building brand foundations through precise narrative engineering and structural storytelling.',
      heroCtaText: 'DEEP DIVE ABOUT ME',
      footerHeadline1: 'EVERY WORD IS A BRICK.',
      footerHeadline2: 'EVERY SENTENCE IS A STRUCTURE.',
      footerCtaTitle: 'READY TO BUILD?',
      footerCtaSubtitle: 'Let\'s engineer your brand\'s narrative. Accepting select projects for Q3 & Q4 2024.',
      footerCtaButton: 'DIG THE ARCHITECT'
    }
  })

  // TimelineItems
  await prisma.timelineItem.deleteMany()
  await prisma.timelineItem.createMany({
    data: [
      { order: 1, number: '01', title: '5 Years of Mastering the Word', description: 'A half-decade dedicated to the alchemy of syllables. From short-form ads to white papers; refining the balance between clarity and conversion.' },
      { order: 2, number: '02', title: 'From Junior to Senior Lead', scale: undefined, description: 'Scaling internal creative departments and leading multi-disciplinary teams. Orchestrating tone of voice across global markets with in-house protocols.' } as any, // scale is not in schema, ignoring it.
      { order: 3, number: '03', title: 'Drafting Brand Stories', description: 'Turning frequent into feelings and products into legacies. My work isn\'t just written; it\'s engineered to endure.' }
    ].map(item => ({ order: item.order, number: item.number, title: item.title, description: item.description }))
  })

  // Clients
  await prisma.client.deleteMany()
  await prisma.client.createMany({
    data: [
      { order: 1, name: 'META' },
      { order: 2, name: 'STRIPE' },
      { order: 3, name: 'AIRBNB' },
      { order: 4, name: 'NOTION' },
      { order: 5, name: 'SPOTIFY' },
      { order: 6, name: 'GOOGLE' }
    ]
  })

  // PortfolioItems
  await prisma.portfolioItem.deleteMany()
  await prisma.portfolioItem.createMany({
    data: [
      { order: 1, date: '01 / 2026', title: 'The Future of Fintech Narrative', description: '', imageUrl: '/placeholder-laptop.jpg' },
      { order: 2, date: '02 / 2026', title: 'Retention Engineering', description: 'Crafting high-conversion email sequences for a Silicon Valley unicorn.', imageUrl: null },
      { order: 3, date: '03 / MAR 2026', title: 'Verbal Branding for Redesels', description: '', imageUrl: null },
      { order: 4, date: '04 / SEP 2026', title: 'Tone of Voice Architecture', description: '', imageUrl: null, accentColor: '#6d28d9' }
    ]
  })

  // Testimonials
  await prisma.testimonial.deleteMany()
  await prisma.testimonial.createMany({
    data: [
      { order: 1, quote: '"He doesn\'t just write copy; he builds worlds. Our brand went from confusing to iconic in three months of collaboration."', author: 'ISAAC CHEN', role: 'CEO ZENITH TECH' },
      { order: 2, quote: '"Meticulous to the word. Every sentence serves a purpose. Our conversion rate increased by 40% after the web overhaul."', author: 'MARCUS THORNE', role: 'FOUNDER, RETAIL COFFEE' },
      { order: 3, quote: '"The verbal architect is a master of tone. We found our voice when we didn\'t even know what we wanted to say."', author: 'ELENA RODRIGUEZ', role: 'HEAD OF BRAND, ELLE STORE' }
    ]
  })

  console.log('Database seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
