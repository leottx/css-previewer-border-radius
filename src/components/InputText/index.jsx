import {
  brPreviewer__label,
  brPreviewer__labelText,
  brPreviewer__inputWrapper,
  brPreviewer__input,
} from "./style.module.css";

export const InputText = ({ labelText, setBorder, borders, border }) => {
  return (
    <label className={brPreviewer__label}>
      <span className={brPreviewer__labelText}>{labelText}</span>
      <div className={brPreviewer__inputWrapper}>
        <input
          className={brPreviewer__input}
          type="text"
          onChange={(e) => setBorder(e, border)}
          value={borders[border]}
        />
      </div>
    </label>
  );
};
