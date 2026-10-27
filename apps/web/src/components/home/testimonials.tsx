const reviews = [
  {
    type: 'Wedding',
    label: 'HAMZA · WEDDING',
    text: 'A massive thanks and appreciation for Velvet roll, yous smashed it out the park. All my guests enjoyed the desserts and had nothing to complain about. Genuinely yous are the best in the game especially with this unique concept. Something different... not ur usual Dutch pancakes. In terms of service again no words to describe the fast prompt service. Its not easy Catering for 250 ppl however, yous made it look like a piece of cake and not a single person was left out. Would highly recommend to anyone for their wedding, events or parties. Yous will not be disappointed! 💯'
  },
  {
    type: 'Walima',
    label: 'IBRAHIM - VALIMA',
    text: "We hired Velvet Roll for my brother's walima, a fairly large event, to cater for roughly 250. We've had a very positive experience with the team, they manage themselves well and competently, with suitable prep. Guests reported queueing out to try the dessert sushi—a novel idea with the right mix of luxury and familiarity. I'll quite assuredly be looking to request the stall again for future events."
  },
  {
    type: 'Baby Shower',
    label: 'SAFFA · BABY SHOWER',
    text: 'Salam Safian, just wanted to say a massive thank you to you and Duncan. Our guests could not get over the dessert and yous were given lots of praise in the other room. May Allah swt put so much barakah into your business, Ameen.'
  }
];
export function Testimonials() {
  return (
    <section className="section testimonials">
      <span className="eyebrow">WORDS FROM YOUR CELEBRATIONS</span>
      <h2>Sweet <em>Memories</em></h2>
      <p>Every celebration has a story. We look forward to sharing yours.</p>
      <div className="review-grid">
        {reviews.map(r => (
          <div key={r.type}>
            <span className="quote-mark">“</span>
            <p>{r.text}</p>
            <small><span className="review-label">{r.label}</span></small>
          </div>
        ))}
      </div>
    </section>
  );
}
