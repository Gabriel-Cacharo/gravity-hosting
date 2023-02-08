import AstronautRocket from "../../assets/images/astronautRocket.png";

import Benefits from "../../components/Benefits/Benefits";
import MainProduct from "../../components/MainProduct/MainProduct";
import CommonQuestions from "../../components/CommonQuestions/CommonQuestions";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Home() {
  return (
    <main className="homeContainer">
      <section className="topSectionContainer">
        <div className="textsContainer" data-aos="zoom-in">
          <h2>
            Seja bem vindo à <span>Gravity Hosting</span>
          </h2>
          <p>
            Oferecemos uma infraestrutura de ponta para deixar seu projeto
            online, com servidores 100% em armazenamento SSD. Não importa o
            tamanho do seu projeto, temos a solução perfeita para você!
          </p>
        </div>

        <img src={AstronautRocket} alt="Astronaut Image" />
      </section>

      <section className="middleSection">
        <SectionHeader
          title="Conheça nossos principais produtos"
          subtitle="Conheça um pouco dos nossos produtos mais populares e coloque seu
            projeto online agora mesmo"
        />

        <div className="mainProductsContainer">
          <MainProduct
            name="VPS"
            description="Servidores VPS com infraestrutura de ponta e armazenamento 100% SSD."
            list={[
              "Anti DDOs Gaming",
              "Processador de ponta",
              "Tráfego ilimitado",
            ]}
            value="28,90"
            type="VPS"
            link="/products/vps"
          />
          <MainProduct
            name="Minecraft"
            description="Hospedagens para seu servidor de Minecraft com processador de ponta e armazenamento 100% SSD."
            list={["AntiDDOs Gaming", "Processador de ponta", "Livre de LAG"]}
            value="26,00"
            type="Minecraft"
            link="/products/minecraft"
          />
          {/* <MainProduct
            name="BotJS"
            description="Hospedagens para seu Bot de Discord com armazenamento 100% SSD."
            list={["AntiDDOs", "Armazenamento 100% SSD"]}
            value="5,90"
          /> */}
        </div>
      </section>

      <section className="oursBenefitsSection">
        <SectionHeader
          title="Nossos benefícios"
          subtitle="Saiba algum dos benefícios que você ganha colocando seu projeto online
        conosco"
        />

        <div className="benefitsContainer">
          <Benefits
            name="Anti DDOs"
            description="Oferecemos uma excelente proteção Anti DDOS, proporcionando um uptime de
              99.99%. Assim, evitamos que sua aplicação fique fora do ar."
            imageType="armor"
          />
          <Benefits
            name="Velocidade"
            description="Contamos com uma infraestrutura de ponta, garantindo a melhor experiência para você!"
            imageType="velocity"
          />
          <Benefits
            name="Suporte"
            description="Oferecemos um suporte prioritário. Nosso time sempre estará pronto para atender qualquer dúvida sua."
            imageType="sac"
          />
        </div>
      </section>

      <CommonQuestions />
    </main>
  );
}

export default Home;
