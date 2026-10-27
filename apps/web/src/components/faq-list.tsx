import { faqs } from '@/data/content';
export function FaqList(){return <section className="section faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>}
