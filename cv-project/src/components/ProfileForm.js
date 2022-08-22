export function ProfileForm(props) {
  return (
    <div className="form">
      <label htmlFor="profile-text">Profile Text:</label>
      <textarea onChange={props.onChange} value={props.text}></textarea>
      <button type="submit" onClick={props.onSubmit}>
        Save
      </button>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}
