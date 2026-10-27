import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { Experience } from '@/components/home/experience';
import { FlavourCollection } from '@/components/flavour-collection';
import { Occasions } from '@/components/home/occasions';
import { Process } from '@/components/home/process';
import { GalleryCollection } from '@/components/gallery-collection';
import { Testimonials } from '@/components/home/testimonials';
import { CelebrationCta } from '@/components/celebration-cta';
export function meta({ matches, location }: Route.MetaArgs) { return seo({matches,location},{title:'Velvet Roll Co. | Luxury Dessert Sushi Cart Glasgow',description:'Dessert sushi, rolled live at your event. Discover Velvet Roll Co.’s luxury dessert cart for Glasgow weddings, Mehndis and unforgettable celebrations.',jsonLd:{'@context':'https://schema.org','@type':'Organization',name:'Velvet Roll Co.',email:'velvetrollco@gmail.com',areaServed:'Glasgow and surrounding areas',sameAs:['https://www.instagram.com/velvet_roll_co/']}}); }
export default function HomePage(){return <main><Hero/><Experience/><FlavourCollection/><Occasions/><Process/><GalleryCollection/><Testimonials/><CelebrationCta/></main>}
