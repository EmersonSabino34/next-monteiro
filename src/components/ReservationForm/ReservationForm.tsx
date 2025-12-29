'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ReservationForm.module.css';

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      alert('Reserva enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.campo}>
        <label>Nome completo</label>
        <input type="text" name="name" required />
      </div>
      <div className={styles.campo}>
        <label>Telefone / WhatsApp</label>
        <input type="tel" name="phone" placeholder="(00) 00000-0000" required />
      </div>
      <div className={styles.campo}>
        <label>Data</label>
        <input type="date" name="date" required />
      </div>
      <div className={styles.campo}>
        <label>Hora</label>
        <input type="time" name="time" required />
      </div>
      <div className={styles.campo}>
        <label>Nº de pessoas</label>
        <input type="number" name="people" min="1" placeholder="Quantas pessoas?" required />
      </div>
      <div className={styles.campo}>
        <label>Mensagem (opcional)</label>
        <textarea name="message" rows={4}></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
        {isSubmitting ? 'Enviando...' : 'Reservar Mesa'}
      </button>
    </form>
  );
}
