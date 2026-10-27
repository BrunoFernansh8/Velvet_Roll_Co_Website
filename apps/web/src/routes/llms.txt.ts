import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';
import { flavours, pages } from '@/data/content';
export function loader({request}:Route.LoaderArgs){const origin=siteOrigin(request);return new Response(`# Velvet Roll Co.\n\n> Luxury live dessert sushi cart for Glasgow and surrounding areas. Enquiries only; booking and payment are arranged directly.\n\n## Flavours\n${flavours.map(f=>f.name).join(', ')}\n\n## Pages\n${Object.entries(pages).map(([slug,p])=>`- [${p.title}](${origin}/${slug}): ${p.description}`).join('\n')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});}
