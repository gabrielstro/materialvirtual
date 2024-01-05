'use client'
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LiRoundedChecked = ({ text, subtext, size } : { text: string, subtext?: string, size?: string}): JSX.Element => {
  const sizeClass = size === 'sm' ? 'md:max-w-full max-w-[15px]' : ''
  return (
    <li className="md:pt-5 pt-4 w-[297px] flex leading-[17px]">
      <Image src="/lp/talitaperosa/roundcheck.svg" width={25} height={25} className={`inline-block mr-2 ${sizeClass}`} alt={''} />
      <div>
        <p className="inline-block">{text}</p>
        {subtext && <span className="text-sm">({subtext})</span>}
      </div>
    </li>
  )
}

const SquaredChecked = ({ text, subtext } : { text: string, subtext?: string}): JSX.Element => {
  const paddingClass = subtext ? 'px-0' : 'px-10'
  return (
    <div className={`w-[304px] shrink-0 ${paddingClass}`}>
      <Image src="/lp/talitaperosa/squarecheck.svg" width={50} height={50} className="mb-4 m-auto" alt={''} />
      <p>{text}</p>
      {subtext && <span className="text-xs whitespace-pre-wrap	">({subtext})</span>}
    </div>
  )
}

const CollapsableFAQ = ({ text, subtext } : { text: string, subtext?: string}): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="md:w-[679px] w-full">
      <div className="flex justify-between mt-2 border-b border-[#691817] p-2  cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="md:text-lg text-sm" onClick={() => setIsOpen(!isOpen)}>{text}</h4>
        <Image src={`/lp/talitaperosa/${isOpen ? 'arrowup' : 'arrowdown'}.svg`} width={12} height={20} className="text-[#691817]" alt={''}/>
      </div>
      {isOpen&&
        <p className="text-base p-3">{subtext}</p>
      }
    </div>
  )
}

const TestimonyImage = ({ fileName } : { fileName: string}): JSX.Element => {
  return (
    <div className="md:mr-3">
      <Image src={`/lp/talitaperosa/testimony/${fileName}`} width={315} height={558} className="rounded-xl md:max-w-[214px] md:max-h-[379px]" alt={''}/>
    </div>
  )
}

const onClickCTA = () => {
  window.open('https://go.hotmart.com/G89585077S?ap=63f2', '_blank');
}
  
function LandingPage() {
  const sliderSettings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <main className="flex flex-col w-full items-center justify-center min-h-screen text-[#222222]">
      <section className="bg-center bg-cover md:bg-[url('/lp/talitaperosa/bg01desk.webp')] bg-[url('/lp/talitaperosa/bg01mob.webp')] min-w-full h-[772px] flex">
        <div className="md:w-[984px] xl:w-[1170px] p-5 w-full h-full m-auto flex flex-col justify-end">
          <Image src="/lp/talitaperosa/logo.svg" width={200} height={200} className="md:pt-12 md:w-full md:max-w-[200px] max-w-[151px] pb-6" alt={''} />
          <h1 className="md:text-5xl text-3xl font-semibold md:w-1/2 pb-6">Você ainda não consegue emagrecer apesar de <span className="text-[#691817]">ter tentado várias vezes?</span></h1>
          <p className="md:w-[409px] leading-[26px]">Eu vou te ajudar a entender porque você não consegue emagrecer e como você pode começar a perder peso ainda hoje!</p>
          <button onClick={() => onClickCTA()} className="bg-gradient-to-r from-[#620D19] to-[#B8162D] md:w-[269px] w-full mx-auto md:mx-0 text-white text-xl rounded-sm px-8 py-4 mt-8">Quero emagrecer</button>
        </div>
      </section>
      
      <section className="bg-center bg-cover md:bg-[url('/lp/talitaperosa/bg02desk.webp')] bg-[url('/lp/talitaperosa/bg02mob.webp')] min-w-full md:h-[652px] h-[1138px] flex">
        <div className="md:w-[984px] xl:w-[1170px] p-5 w-full h-full m-auto flex justify-end">
          <div className="md:w-3/5 md:my-auto lg:pt-24 pt-14">
            <h2 className="md:text-[32px] text-2xl ml-0">O que eu estou te propondo é um <span className="text-[#691817] font-bold">programa de emagrecimento completo que consiste em:</span></h2>
            <ul className="md:columns-2 md:gap-x-[10px] list-image-[url(/lp/talitaperosa/roundcheck.svg)]">
              <LiRoundedChecked size="sm" text="Plano alimentar verão e Inverno" subtext="potencializar a queima de gordura"/>
              <LiRoundedChecked size="sm" text="Plano alimentar para vegetarianos"/>
              <LiRoundedChecked size="sm" text="Plano alimentar para homens" subtext="voltado para o emagrecimento"/>
              <LiRoundedChecked size="sm" text="10 aulas para te guiar no seu processo de emagrecimento"/>
              <LiRoundedChecked size="sm" text="E-book de shakes proteicos"/>
              <LiRoundedChecked size="sm" text="E-book de saladas e molhos"/>
              <LiRoundedChecked size="sm" text="E-book de sopas"/>
              <LiRoundedChecked size="sm" text="Planejamento mensal"/>
              <LiRoundedChecked size="sm" text="Suporte no Whatsapp"/>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-center bg-cover md:bg-[url('/lp/talitaperosa/bg03desk.webp')] bg-[url('/lp/talitaperosa/bg03mob.webp')] min-w-full md:h-[772px] h-[953px] flex">
        <div className="md:w-[984px] xl:w-[1170px] p-5 w-full h-full m-auto flex flex-col md:justify-center md:pt-0 pt-12">
          <h2 className="md:text-[32px] text-[22px] md:w-2/5 w-full pb-6">Você não fará apenas mais uma dieta, você vai <span className="text-[#691817] font-bold">aprender a comer do jeito certo!</span></h2>
          <p className="md:w-2/5 w-full md:text-base text-[15px]">Nas aulas vou te falar tudo sobre o plano alimentar, jejum intermitente, como potencializar o emagrecimento, como não descontar as emoções na comida, como lidar com o doce, como lidar com o álcool e muito mais!</p>
          <button onClick={() => onClickCTA()} className="bg-gradient-to-r from-[#620D19] to-[#B8162D] md:w-[269px] w-full text-white text-xl rounded-sm px-8 py-4 mt-8 md:mx-0 mx-auto">Quero emagrecer</button>
        </div>
      </section>

      <section className="bg-center bg-cover bg-[url('/lp/talitaperosa/bg04desk.webp')] min-w-full md:h-[574px] h-[1120px] flex">
        <div className="md:w-[984px] xl:w-[1170px] p-5 w-full h-full m-auto flex flex-col">
          <h2 className="md:text-[32px] text-[22px] pb-10 pt-6 leading-10 mx-auto md:w-[432px] text-center">Esse programa foi pensado para você que:</h2>
          <div className="flex justify-evenly text-center md:gap-3 gap-2 flex-wrap">
            <SquaredChecked text="Está cansada de tentar de tudo e mesmo assim não consegue emagrecer."/>
            <SquaredChecked text="Está se sentindo triste e insegura quando se olha no espelho."/>
            <SquaredChecked text="Começa uma dieta na segunda-feira, mas desiste no final de semana."/>
            <SquaredChecked text="Não consegue vencer a vontade de comer doces."/>
            <SquaredChecked text="Desconta as emoções na comida."/>
            <SquaredChecked text="Tem problemas de saúde" subtext="esteatose hepática, colesterol alto, triglicerídeos alto, resistência à insulina, endometriose, menopausa, diabetes tipo 2 e SOP"/>
          </div>
        </div>
      </section>

      <section className="bg-center bg-cover bg-[url('/lp/talitaperosa/bg05desk.webp')] min-w-full md:h-[630px] h-[746px] flex">
        <div className="md:w-[984px] xl:w-[1170px] w-full h-full m-auto p-5 flex flex-col">
          <h2 className="md:text-[32px] text-[22px] pt-12 pb-8 leading-10 text-center">Conheça algumas mulheres que já <span className="text-[#691817] font-bold">começaram a emagrecer:</span></h2>
          <Slider {...sliderSettings} className="md:max-w-full max-w-[315px] m-auto">  
          {['t01.png', 't02.png', 't03.png', 't04.png', 't05.png', 't06.png', 't07.png', 't08.png', 't09.png', 't10.png', 't11.png', 't12.png', 't13.png', 't14.png', 't15.webp', 't16.png', 't17.png', 't18.png', 't19.png'].map((fileName, index) => (
            <TestimonyImage fileName={fileName} key={fileName}/>
          ))}
          </Slider>
        </div>
      </section>

      <section className="bg-center bg-cover bg-[url('/lp/talitaperosa/bg06desk.webp')] min-w-full md:h-[700px] h-[1000px] flex">
        <div className="md:w-[984px] xl:w-[1170px] p-5 w-full h-full m-auto flex md:flex-row flex-col items-center justify-center">
          <div className="h-[499px] md:w-[421px] border border-[#691817] rounded-lg bg-[#F8EFE8] flex flex-col p-6 text-center text-2xl gap-5">
            <h3>Você terá acesso a todo o programa completo</h3>
            <p className="font-bold text-[#691817]">Por apenas</p>
            <p className="text-4xl">12xR$<span className="text-7xl font-bold text-[#139624]">19,66</span></p>
            <p className="text-base">Ou à vista por: R$197,00</p>
            <button onClick={() => onClickCTA()} className="bg-gradient-to-r from-[#620D19] to-[#B8162D] md:w-[328px] w-full text-white text-xl rounded-sm md:px-8 py-4 my-4 mx-auto">Quero minha vaga agora</button>
            <p className="text-lg font-bold">Pagamento único e acesso imediato!</p>
          </div>
          <div className="h-[446px] md:w-[427px] md:rounded-r-lg rounded-b-lg bg-[#F8EFE8] flex flex-col md:pl-6 p-4 justify-center text-sm md:gap-0 gap-3">
            <LiRoundedChecked text="Pagamento seguro!"/>
            <LiRoundedChecked text="Seus dados estão protegidos e a sua compra é 100% segura!"/>
            <LiRoundedChecked text="Acesso imediato!"/>
            <LiRoundedChecked text="Você acessa a aula imediatamente pagando via PIX ou cartão de crédito!"/>
            <LiRoundedChecked text="7 dias de garantia!"/>
            <LiRoundedChecked text="Caso você não goste do conteúdo, devolveremos 100% do seu dinheiro!"/>
          </div>
        </div>
      </section>
      
      <section className="bg-top bg-cover md:bg-[url('/lp/talitaperosa/bg07desk.webp')] bg-[url('/lp/talitaperosa/bg07mob.webp')] min-w-full md:h-[939px] h-[1042px] flex">
        <div className="md:w-[984px] xl:w-[1170px] p-5 h-full m-auto flex md:flex-row flex-col justify-end">
          <div className="md:w-2/5 md:my-auto">
            <h2 className="md:text-[32px] text-[22px] md:mb-10 md:ml-0">Quem será <span className="text-[#691817] font-bold">sua professora?</span></h2>
            <p className="md:py-0 py-3 leading-[22px]">
              Talita Perosa, nutricionista há mais de 10 anos, inicialmente evitou atendimentos clínicos, preferindo trabalhar com públicos vulneráveis.
              <br/><br/>
              Após uma mudança de cidade e circunstâncias pessoais, começou a atender pacientes e percebeu que, apesar de fornecer dietas e planos alimentares excelentes, suas pacientes lutavam para perder peso.
              <br/><br/>
              Isso a levou a estudar comportamento e perceber que suas pacientes precisavam mais de uma mudança de estilo de vida do que de uma dieta.
              <br/><br/>
              Ao ensinar suas pacientes a adotar hábitos alimentares saudáveis, Talita viu resultados positivos e agora se dedica a compartilhar esse conhecimento com o maior número possível de mulheres.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-[#C2AC9F] min-w-full md:min-h-[660px] min-h-[900px]">
        <div className="md:w-[984px] xl:w-[1170px] p-5 h-full m-auto flex flex-col items-center py-10">
          <h3 className="md:text-[32px] text-[22px] mb-10">Dúvidas Frequentes</h3>
          <CollapsableFAQ text='O pagamento é recorrente ou pago apenas uma vez?' subtext='Pagamento é único e o acesso é imediato (assim que o pagamento for aprovado)'/>
          <CollapsableFAQ text='Quais são as formas de pagamento?' subtext='É possível realizar o pagamento através de em cartão de crédito, débito, boleto bancário, ou PIX'/>
          <CollapsableFAQ text='O curso serve para qualquer idade?' subtext='Sim, o método vai te trazer uma reeducação alimentar para ter uma vida mais saudável. Portanto, pode ser utilizado por pessoas de qualquer idade.'/>
          <CollapsableFAQ text='Por quanto tempo terei acesso ao curso?' subtext='Você terá acesso a todo o curso e bônus descritos nessa página por 1 ano!'/>
          <CollapsableFAQ text='Pagando por boleto o acesso é imediato?' subtext='Não. O boleto bancário demora até 2 dias úteis para ser processado após o pagamento. Assim que o pagamento for processado, você já terá acesso aos primeiros materiais.'/>
          <CollapsableFAQ text='Cancelamento e reembolso' subtext={`Se você quer cancelar e ter o reembolso da sua compra, basta seguir as instruções desses tutoriais que a Hotmart preparou:
            – Se você comprou via cartão de crédito ou pay pal: https://bit.ly/3j92SHw
            – Se você comprou via boleto bancário ou débito bancário: https://bit.ly/3k8XvJx
            Lembre-se que o cancelamento só pode ser feito em até 7 dias após a compra, depois desse prazo nenhum valor será reembolsado. Portanto, fique atento ao prazo.`}/>
          
          <button onClick={() => onClickCTA()} className="bg-gradient-to-r from-[#620D19] to-[#B8162D] md:w-[269px] w-full text-white text-xl rounded-sm px-8 py-4 mt-8 mb-10 md:mx-0 mx-auto">Quero aprender!</button>

          <div className="py-14 text-center">
            <p className="max-w-[772px] text-sm leading-[26px]">Aviso legal: O produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, por meio da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações. Os termos e políticas da Hotmart podem ser acessados aqui, antes mesmo da conclusão da compra.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;