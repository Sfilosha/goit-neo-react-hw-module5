import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";

export function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const queryValue = form.elements.query.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.query.value.trim() === "") {
      toast.error("Please enter the movie name!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля

    onSearch(queryValue);
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <button className={css.button} type="submit">
            <SearchIcon />
          </button>
          <input
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus="on"
            placeholder="Find movie by name"
          />
        </div>
      </form>
      <div>
        <Toaster position="bottom-center" />
      </div>
    </>
  );
}

export default SearchBar;
