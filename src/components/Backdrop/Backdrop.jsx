import { asset } from '../../utils/asset';

// Декоративный фон раздела: своя картинка для каждой версии макета.
// Размеры и маски задаёт раздел через className
export default function Backdrop({ name, className }) {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={asset(`images/${name}-desktop.webp`)} />
      <source media="(min-width: 1024px)" srcSet={asset(`images/${name}-laptop.webp`)} />
      <img className={className} src={asset(`images/${name}-mobile.webp`)} alt="" aria-hidden="true" decoding="async" />
    </picture>
  );
}
