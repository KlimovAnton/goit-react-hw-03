import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <>
      <div>
        <p>
          {name}
        </p>
        <p>
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={css.btnDelete}>
        Delete
      </button>
    </>
  );
}