import { Component } from "react";
import s from "./ContactForm.module.css";
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

    render() {
      const { handleChange, handleSubmit, state: { name, number } } = this;
    return (
      <form className={s.formBox} onSubmit={handleSubmit}>
        <label className={s.labelName}>
          <p className={s.itemName}>Name</p>
          <input
            className={s.inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label className={s.labelNumber}>
          <p className={s.itemNumber}>Number</p>
          <input
            className={s.inputNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <button className={s.buttonAdd} type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};