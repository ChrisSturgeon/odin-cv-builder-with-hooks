import '../styles/contact.css';

export function Contact(props) {
  return (
    <div className="contact-info">
      <div className="contact-name">{props.info.name}</div>
      <div className="contact-other">{props.info.tel}</div>
      <div className="contact-other">{props.info.email}</div>
      <div className="contact-other">{props.info.website}</div>
      <div className="contact-other">{props.info.location}</div>
    </div>
  );
}
