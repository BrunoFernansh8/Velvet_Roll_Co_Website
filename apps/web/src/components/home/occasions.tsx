import { events } from '@/data/content';
import { Link } from 'react-router';
import { PhotoPlaceholder } from '@/components/photo-placeholder';
export function Occasions(){return <section className="section occasions"><div className="section-heading"><div><span className="eyebrow">EVERY OCCASION DESERVES SOMETHING SPECIAL</span><h2>Perfect <em>For</em></h2></div><p>From intimate moments<br/>to the grandest celebrations.</p></div><div className="occasion-grid">{events.map((name)=><Link to={`/quote?event=${encodeURIComponent(name)}`} key={name}><PhotoPlaceholder label={name}/><h3>{name}</h3></Link>)}</div></section>}
