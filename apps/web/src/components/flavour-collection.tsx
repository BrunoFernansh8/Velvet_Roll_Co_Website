import { Link } from 'react-router';
import { flavours } from '@/data/content';
import { PhotoPlaceholder } from '@/components/photo-placeholder';
export function FlavourCollection(){return <section className="section flavour-section"><div className="section-heading"><div><span className="eyebrow">SIX REASONS TO FALL IN LOVE</span><h2>Our <em>Flavours</em></h2></div><Link className="text-link" to="/flavours">Explore Our Flavours</Link></div><div className="flavour-grid">{flavours.map((f,i)=><article key={f.name}><PhotoPlaceholder label={f.name} src={f.image}/><small>0{i+1} / SIGNATURE COLLECTION</small><h3>{f.name}</h3></article>)}</div></section>}
