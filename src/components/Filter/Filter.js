import s from "./Filter.module.css";
export default function Filter({ filter, handleChangeFilter }) {
  return (
    <>
      <p className={s.nameFilter}>Find contacts by name</p>
      <input
        className={s.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
}
