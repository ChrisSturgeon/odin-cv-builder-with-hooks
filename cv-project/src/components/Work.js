import '../styles/contact.css';

export function Work(props) {
  return props.history.map((work) => {
    return (
      <div key={work.id}>
        <div className="contact-name">{work.company}</div>
        <div className="contact-other">{work.position}</div>
        <div className="contact-other">{work.from}</div>
        <div className="contact-other">{work.to}</div>
        <div className="contact-other">{work.description}</div>
      </div>
    );
  });
}
