import { useState } from 'react';
import './index.css';
import personImg from '../../../public/persuao.png';

const faqs = [
  {
    question: '¿Qué ventajas ofrece el Plan Crédito Protegido en comparación con otros productos financieros?',
    answer:
      'El Plan Crédito Protegido le permite ahorrar frente a créditos financieros, proporcionando seguridad y garantizando un ahorro efectivo antes de enfrentar compromisos financieros.',
  },
  {
    question: '¿Cómo beneficia el servicio de grúa en casos de accidente o avería a los asegurados de Escobar y Duque?',
    answer: 'Brinda asistencia inmediata para el traslado del vehículo, reduciendo costos y tiempos de espera en situaciones imprevistas.',
  },
  {
    question: '¿Cuál es la vigencia de las asistencias para motocicletas en el plan de Escobar y Duque?',
    answer: 'Las asistencias están vigentes durante todo el período de la póliza activa.',
  },
  {
    question: '¿Ofrecen servicios de transporte en caso de choque o avería para motocicletas?',
    answer: 'Sí, el plan incluye transporte y asistencia vial para motocicletas en caso de accidente o avería.',
  },
  {
    question: '¿Cómo funciona la telemedicina en las pólizas de Escobar y Duque?',
    answer: 'Permite atención médica remota con profesionales de la salud, disponible desde cualquier lugar.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <div className="faq-left">
        <img src={personImg} alt="Asesora" />
      </div>

      <div className="faq-right container">
        FAQs
        <h2>
          ALGUNAS PREGUNTAS Y<br />
          RESPUESTAS FRECUENTES
        </h2>
        <p className="faq-description">
          Simplificamos la información para brindarle una comprensión completa de cómo podemos satisfacer sus necesidades de seguro y asistencia. Explore ahora
          para obtener la claridad que busca.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="icon">{openIndex === index ? '−' : '+'}</span>
              </button>

              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <button className="faq-button">HACER UNA PREGUNTA</button>
      </div>
    </section>
  );
}
