import { useRef, useState } from 'react';
import { event } from '../../data/event';
import { validateRegistration } from '../../utils/validate';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import FormField from '../FormField/FormField';
import styles from './RegistrationForm.module.css';

const initialValues = { name: '', phone: '', email: '', consent: false };
const fieldOrder = ['name', 'phone', 'email', 'consent'];

// Форма регистрации. Демо: заявка никуда не отправляется
export default function RegistrationForm({ onClose }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const refs = { name: useRef(null), phone: useRef(null), email: useRef(null), consent: useRef(null) };
  const doneRef = useRef(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const next = { ...values, [name]: type === 'checkbox' ? checked : value };
    setValues(next);
    // после первой попытки ошибки пересчитываются на лету
    if (errors[name]) setErrors(validateRegistration(next));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateRegistration(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((key) => found[key]);
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }
    setSent(true);
    setValues(initialValues);
    setTimeout(() => doneRef.current?.focus(), 0);
  };

  if (sent) {
    return (
      <div className={styles.form}>
        <h2 id="registration-title" className={styles.form__title}>
          Спасибо!
        </h2>
        <p ref={doneRef} className={styles.form__demo} role="status" tabIndex={-1}>
          Это демо-версия: заявка не отправлена
        </p>
        <Button className={styles.form__submit} onClick={onClose}>
          Закрыть
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <h2 id="registration-title" className={styles.form__title}>
        Регистрация на мастер-класс
      </h2>
      <p className={styles.form__subtitle}>
        {event.finalDate}, {event.address}
      </p>

      <div className={styles.form__fields}>
        <FormField
          ref={refs.name}
          name="name"
          label="Имя"
          placeholder="Как к вам обращаться"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormField
          ref={refs.phone}
          name="phone"
          type="tel"
          label="Телефон"
          placeholder="+7 900 000-00-00"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
        />
        <FormField
          ref={refs.email}
          name="email"
          type="email"
          label="E-mail"
          placeholder="name@example.ru"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />
        <Checkbox
          ref={refs.consent}
          name="consent"
          label="Согласна(-ен) на обработку персональных данных"
          checked={values.consent}
          error={errors.consent}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className={styles.form__submit}>
        Отправить заявку
      </Button>
    </form>
  );
}
