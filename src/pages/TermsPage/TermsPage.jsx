import SectionHeader from "../../components/SectionHeader/SectionHeader";

const TermsPage = () => {
  return (
    <div className="termsPageContainer">
      <SectionHeader
        title={"Nossos termos"}
        subtitle={
          "Veja os nossos termos que você está automaticamente aceitando ao comprar qualquer produto conosco."
        }
        type={"termsPage"}
      />

      <div className="termsContainer">
        <div className="termContainer" data-aos="zoom-in">
          <h5>
            <span>1.</span> Reembolso
          </h5>
          <p>
            Nós, da Gravity Hosting, oferecemos um reembolso total do dinheiro
            em até 7 dias, caso o cliente não venha a gostar do produto, ou
            queira cancelar o serviço. Porém, o reembolso não é válido nas
            situações: Abuso de serviço e/ou descumprimento de qualquer termo.
            Após o reembolso aceito, a empresa possui até 30 dias para retornar
            o valor.
          </p>
        </div>

        <div className="termContainer floatRight" data-aos="zoom-in">
          <h5>
            <span>2.</span> Cancelamentos
          </h5>
          <p>
            A empresa Gravity Hosting pode suspender o serviço a qualquer
            momento daquele cliente que não seguir os termos e/ou abusar do
            serviço de alguma maneira, tais como: utilizar com intenções
            maliciosas, tentar de alguma forma prejudicar a Hospedagem, utilizar
            VPS para mineração, utilizar VPS para Botnet, hospedar
            arquivos/sites maliciosos ou que fujam da lei e/ou tentar qualquer
            abuso. Lembrando que, caso o seu serviço seja cancelado por qualquer
            motivo citado acima, você não terá o direito de pedir reembolso do
            produto.
          </p>
        </div>

        <div className="termContainer" data-aos="zoom-in">
          <h5>
            <span>3.</span> Arquivos
          </h5>
          <p>
            Nós protegemos os seus arquivos com criptografia de ponta a ponta,
            porém, Gravity Hosting não se responsabiliza por nenhuma perda de
            arquivos dentro de seus serviços. A partir do momento da compra a
            responsabilidade é totalmente do cliente.
          </p>
        </div>

        <div className="termContainer floatRight" data-aos="zoom-in">
          <h5>
            <span>4.</span> Compartilhamento de Dados
          </h5>
          <p>
            A empresa não se responsabiliza pelo compartilhamento de dados de
            seus serviços, como por exemplo para uma pessoa de má índole, e nem
            por possíveis danos causados.
          </p>
        </div>

        <div className="termContainer" data-aos="zoom-in">
          <h5>
            <span>5.</span> Tempo de ativação
          </h5>
          <p>
            Normalmente, todos os nossos serviços são ativados dentro de 10
            minutos, podendo demorar até 1 dia útil. Caso seu serviço não seja
            ativado nesse tempo, pedimos que procure o Suporte para investigar o
            caso e ativá-lo.
          </p>
        </div>

        <div className="termContainer floatRight" data-aos="zoom-in">
          <h5>
            <span>6.</span> Quebra do sigilo para a aplicação da lei
          </h5>
          <p>
            A empresa pode fornecer qualquer dado de qualquer cliente para as
            autoridades competentes caso seja solicitado, para que essas possam
            colocar a lei em vigor.
          </p>
        </div>

        <div className="termContainer" data-aos="zoom-in">
          <h5>
            <span>7.</span> Renovação / cancelamentos
          </h5>
          <p>
            Você pode realizar a renovação de seus serviços em nossa Área do
            Cliente, ou, caso o seu método de pagamento seja débito automático,
            ele será renovado automaticamente no dia previsto. Caso o seu
            pagamento não seja automático, nós da Gravity Hosting sugerimos que
            você faça o pagamento manual da renovação alguns dias antes de
            vencer, pois, a qualquer momento depois do vencimento o seu produto
            pode expirar
          </p>
        </div>

        <div className="termContainer floatRight" data-aos="zoom-in">
          <h5>
            <span>8.</span> Suporte e ajuda
          </h5>
          <p>
            A equipe de Suporte da Gravity Hosting tem o papel <b>APENAS</b> de
            tirar as suas dúvidas/ajudar em serviços fornecidos por nós.
            Qualquer outra ajuda que você precise, que não seja de erros/dúvidas
            de nossos serviços, nossa equipe não é obrigada a lhe ajudar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
