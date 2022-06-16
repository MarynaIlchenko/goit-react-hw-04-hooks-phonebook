import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './InputForm.module.css';
import { nanoid } from 'nanoid';

export const InputForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // static propTypes = {
  //   onSubmitForm: PropTypes.func,
  // };

  const onChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit({
      name: name,
      number: number,
      id: nanoid(),
    });
    reset(event);
  };

  const reset = event => {
    setName('');
    setNumber('');
    event.currentTarget.reset();
  };

  // render() {
  //   const { name, number } = this.state;
  return (
    <form onSubmit={onSubmitForm} className={style.form}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          value={name}
          type="text"
          name="name"
          required
          onChange={onChangeInput}
        />
      </label>

      <label className={style.label}>
        Number
        <input
          className={style.input}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
// export default InputForm;
