export function ContactForm(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label>Name</label>
      <input
        name="name"
        value={props.info.name}
        onChange={props.handleChange}
        type="text"
      ></input>
      <label>Tel</label>
      <input
        name="tel"
        value={props.info.tel}
        onChange={props.handleChange}
        type="text"
      ></input>
      <label>email</label>
      <input
        name="email"
        value={props.info.email}
        onChange={props.handleChange}
        type="email"
      ></input>
      <button type="submit">Submit</button>
      <button onClick={props.onEdit}>Edit</button>
    </form>
  );
}
