import type { Route } from './+types/page';
import { seo } from '@/lib/seo';
import { pages, faqs } from '@/data/content';
import { PageIntro } from '@/components/page-intro';
import { PackageList } from '@/components/package-list';
import { PackageFinder } from '@/components/package-finder';
import { FlavourCollection } from '@/components/flavour-collection';
import { GalleryCollection } from '@/components/gallery-collection';
import { BrandStory } from '@/components/brand-story';
import { FaqList } from '@/components/faq-list';
import { EnquiryForm } from '@/components/enquiry-form';
import { PrivacyContent } from '@/components/privacy-content';
import { CelebrationCta } from '@/components/celebration-cta';
export function loader({params}:Route.LoaderArgs){const slug=params.page!;if(!pages[slug])throw new Response('Not found',{status:404});return {slug,...pages[slug]};}
export function meta({matches,location,loaderData}:Route.MetaArgs){return seo({matches,location},{title:loaderData?`${loaderData.slug==='quote'?'Get a Quote':loaderData.slug==='find-my-package'?'Find My Package':loaderData.slug.charAt(0).toUpperCase()+loaderData.slug.slice(1)} | Velvet Roll Co.`:'Page not found',description:loaderData?.description||'This page could not be found.',...(loaderData?.slug==='faqs'?{jsonLd:{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}}:{})});}
export default function Page({loaderData:p}:Route.ComponentProps){return <main><PageIntro title={p.title} description={['quote','find-my-package','privacy'].includes(p.slug)?undefined:p.description}/>{p.slug==='packages'&&<PackageList/>}{p.slug==='find-my-package'&&<PackageFinder/>}{p.slug==='flavours'&&<FlavourCollection/>}{p.slug==='gallery'&&<GalleryCollection filters/>}{p.slug==='about'&&<BrandStory/>}{p.slug==='faqs'&&<FaqList/>}{p.slug==='quote'&&<EnquiryForm/>}{p.slug==='contact'&&<><div className="contact-links"><a href="mailto:velvetrollco@gmail.com">velvetrollco@gmail.com</a><a href="https://www.instagram.com/velvet_roll_co/" target="_blank" rel="noreferrer">@velvet_roll_co ↗</a></div><EnquiryForm short/></>}{p.slug==='privacy'&&<PrivacyContent/>}{!['quote','find-my-package','privacy','contact'].includes(p.slug)&&<CelebrationCta/>}</main>}
