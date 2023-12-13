import {useState} from "react";

export function Admin({ onPostSubmit, onClearList }) {
  const [msg, setMsg] = useState('');

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    const {title, content} = event.target.elements;

    onPostSubmit({
      title: title.value,
      content: content.value
    })

  }

  const handleOnCopy = (event) => {
    event.preventDefault();
    alert('copy is not allowed!')
  }

  const handleOnPaste = (event) => {
    event.preventDefault();
    setMsg('paste is not allowed!');
  }

  return (
      <div>
        <h1>Admin</h1>
        <form className='form' onSubmit={handleNewPostSubmit}>
          <label htmlFor="title">Title</label>
          <input onPaste={handleOnPaste}
                 onCopy={handleOnCopy}
                 id="title"
                 name="title"
                 type="text"/>
          <span>{msg}</span>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content"/>
          <button type="submit">Create</button>
        </form>
        <button onClick={onClearList}>CLEAR</button>
      </div>
  );
}
