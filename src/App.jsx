import { useCallback, useState } from 'react';
import Features from './components/Features/Features';
import Final from './components/Final/Final';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Host from './components/Host/Host';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

// Одна страница, разделы — якоря меню
export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = useCallback(() => setFormOpen(true), []);
  const closeForm = useCallback(() => setFormOpen(false), []);

  return (
    <>
      <Header />
      <main>
        <Hero onRegister={openForm} />
        <Menu />
        <Features />
        <Host />
        <Final onRegister={openForm} />
      </main>
      <Footer />

      <Modal isOpen={formOpen} onClose={closeForm} labelledBy="registration-title">
        <RegistrationForm onClose={closeForm} />
      </Modal>
    </>
  );
}
