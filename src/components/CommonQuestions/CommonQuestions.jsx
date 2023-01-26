import { useState } from "react";

import AstronautDoubt from "../../assets/images/astronautDoubt.png";
import { FaQuestion } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";

const CommonQuestions = () => {
  const [questionOneOpen, setQuestionOneOpen] = useState(false);
  const [questionTwoOpen, setQuestionTwoOpen] = useState(false);
  const [questionThreeOpen, setQuestionThreeOpen] = useState(false);

  return (
    <section className="frequentlyAskedQuestionsSection">
      <SectionHeader
        title="Dúvidas frequentes"
        subtitle="Tem dúvidas? Veja se ela se encaixa em alguma das nossas dúvidas
            mais frequentes"
      />

      <div className="frequentlyAskedQuestionsContainer">
        <img src={AstronautDoubt} alt="" data-aos="zoom-in" />

        <div className="frequentlyAskedQuestions" data-aos="fade-up">
          <button onClick={() => setQuestionOneOpen((p) => !p)}>
            <FaQuestion className="iconMarginRight" /> Qual o prazo de ativação
            dos serviços?
          </button>
          {questionOneOpen && (
            <div>
              <p>
                O prazo de ativação de nossos serviços é <b>normalmente</b> em
                torno de 2 minutos. Porém, esse valor pode variar em até 1 dia
                útil.
              </p>
            </div>
          )}
          <button onClick={() => setQuestionTwoOpen((p) => !p)}>
            <FaQuestion className="iconMarginRight" /> Qual o uptime dos
            serviços?
          </button>
          {questionTwoOpen && (
            <div>
              <p>
                Nós garantimos um uptime de <b>98%</b> em todos os nosso
                serviços.
              </p>
            </div>
          )}
          <button onClick={() => setQuestionThreeOpen((p) => !p)}>
            <FaQuestion className="iconMarginRight" /> Todos os serviços contam
            com suporte?
          </button>
          {questionThreeOpen && (
            <div>
              <p>
                <b>Claro</b>! Todos os nosso serviços contam com um suporte
                prioritário por todos os meios ( Discord, Ticket, Chat Site,
                Whatsapp ).
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
