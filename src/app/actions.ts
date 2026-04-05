'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateSiteData(formData: FormData) {
  await prisma.siteData.update({
    where: { id: 'singleton' },
    data: {
      heroTitle: formData.get('heroTitle') as string,
      heroSubtitle: formData.get('heroSubtitle') as string,
      heroCtaText: formData.get('heroCtaText') as string,
      footerHeadline1: formData.get('footerHeadline1') as string,
      footerHeadline2: formData.get('footerHeadline2') as string,
      footerCtaTitle: formData.get('footerCtaTitle') as string,
      footerCtaSubtitle: formData.get('footerCtaSubtitle') as string,
      footerCtaButton: formData.get('footerCtaButton') as string,
    }
  });
  revalidatePath('/');
}

export async function updatePortfolioItem(id: string, formData: FormData) {
  await prisma.portfolioItem.update({
    where: { id },
    data: {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      date: formData.get('date') as string,
      imageUrl: formData.get('imageUrl') as string,
      accentColor: formData.get('accentColor') as string,
    }
  });
  revalidatePath('/');
}

export async function updateTestimonial(id: string, formData: FormData) {
  await prisma.testimonial.update({
    where: { id },
    data: {
      quote: formData.get('quote') as string,
      author: formData.get('author') as string,
      role: formData.get('role') as string,
    }
  });
  revalidatePath('/');
}
