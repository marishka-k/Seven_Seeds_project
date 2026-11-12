// Проверка полей формы регистрации. Возвращает объект { поле: текст ошибки }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[A-Za-zА-Яа-яЁё\s-]{2,}$/;

export function validateRegistration(values) {
  const errors = {};
  const name = values.name.trim();
  const phoneDigits = values.phone.replace(/\D/g, '');

  if (!name) errors.name = 'Введите имя';
  else if (!NAME_RE.test(name)) errors.name = 'Только буквы, не короче 2 символов';

  if (!values.phone.trim()) errors.phone = 'Введите телефон';
  else if (/[^\d\s()+-]/.test(values.phone) || phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.phone = 'Например: +7 900 000-00-00';
  }

  if (!values.email.trim()) errors.email = 'Введите e-mail';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Проверьте e-mail';

  if (!values.consent) errors.consent = 'Нужно согласие';

  return errors;
}
