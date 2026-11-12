// Путь к файлу из public/ с учётом base (сайт открывается из подпапки)
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
