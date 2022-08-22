export function ContactForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Name
        <input
          name="name"
          value={props.info.name}
          onChange={props.handleChange}
          type="text"
        ></input>
      </label>
      <label>
        Tel
        <input
          name="tel"
          value={props.info.tel}
          onChange={props.handleChange}
          type="text"
        ></input>
      </label>
      <label>
        email
        <input
          name="email"
          value={props.info.email}
          onChange={props.handleChange}
          type="email"
        ></input>
      </label>
      <button type="submit">Submit</button>
      <button onClick={props.onEdit}>Edit</button>
    </form>
  );
}
