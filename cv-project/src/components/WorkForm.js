export function WorkForm(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label>Company</label>
      <input
        name="company"
        value={props.info.company}
        onChange={props.handleChange}
        type="text"
      ></input>
      <label>Position</label>
      <input
        name="position"
        value={props.info.position}
        onChange={props.handleChange}
        type="text"
      ></input>
      <label>From</label>
      <input
        name="from"
        value={props.info.from}
        onChange={props.handleChange}
        type="text"
      ></input>
      <label>To</label>
      <input
        name="to"
        value={props.info.to}
        onChange={props.handleChange}
        type="text"
      ></input>
      <label>Description</label>
      <input
        name="description"
        value={props.info.description}
        onChange={props.handleChange}
        type="text"
      ></input>
      <button type="submit">Submit</button>
      <button onClick={props.onEdit}>Edit</button>
    </form>
  );
}
