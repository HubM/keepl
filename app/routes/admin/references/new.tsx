export default function NewReferenceRoute() {
  return (
    <div>
      <div>Add a new reference</div>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content:{" "}
            <textarea name="content" rows={5} cols={33}>
              Content of your reference
            </textarea>
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add a new reference
          </button>
        </div>
      </form>
    </div>
  );
}
