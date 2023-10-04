import Image from 'next/image'
import padwebsite from '../../assets/pad1.png'
import lowpad from '../../assets/lowfidelity.png'
import highpad from '../../assets/highfidelity.png'
import homewed from '../../assets/homewedding.png'
import lowwed from '../../assets/weddingwireframe.png'
import highwed from '../../assets/highwedding.png'
import homefood from '../../assets/homefood.png'
import lowfood from '../../assets/lowfood.png'
import highhealth from '../../assets/highhealth.png'

export default function Projects() {
  return (
    <div className="mx-6 mt-24 flex flex-col items-center justify-center gap-5 lg:mx-20 lg:mt-40">
      <h1 className="text-center text-2xl font-bold text-gray-700 md:text-5xl lg:mb-10">
        Projetos de Design UX
      </h1>
      <div className="flex flex-col">
        <div className="mb-8 flex w-full flex-col rounded-lg p-2 md:p-8">
          <div className="w-full space-y-4 text-left">
            <h2 className="mb-12 mt-4 text-center text-2xl font-semibold text-gray-700 md:text-4xl">
              Aplicativo da Padaria Doces Sonhos
            </h2>
            <div className="flex w-full items-center justify-center">
              <a
                href="https://www.figma.com/proto/XpO1isL7UeGeLzxF39Batm/bakery_mockup(final)?type=design&node-id=516-379&t=ialFvjsgyIOJ49D9-1&scaling=scale-down&page-id=516%3A2&starting-point-node-id=516%3A379&show-proto-sidebar=1&mode=design"
                target="_blank"
              >
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={padwebsite}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </a>
            </div>
            <p className="cursor-pointer space-y-4 text-justify text-lg font-medium text-newpink-500 md:pb-8 md:text-xl lg:text-left">
              Clique aqui para acessar o protótipo de alta fidelidade
              <a
                href="https://www.figma.com/proto/XpO1isL7UeGeLzxF39Batm/bakery_mockup(final)?type=design&node-id=516-379&t=ialFvjsgyIOJ49D9-1&scaling=scale-down&page-id=516%3A2&starting-point-node-id=516%3A379&show-proto-sidebar=1&mode=design"
                target="_blank"
              ></a>
            </p>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Papel do designer no projeto
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-2 md:text-xl">
                Atuei como UX designer e UX researcher para a criação do
                aplicativo de padaria da Doces Sonhos
              </h4>
              <ul className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                {' '}
                Minhas responsabilidades envolveram:
                <li>Pesquisa de usuários;</li>
                <li>Condução dos estudos de usabilidade;</li>
                <li>Construção de wireframes de papel e digitais;</li>
                <li>Protótipos de alta e baixa fidelidade;</li>
              </ul>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-2 md:text-xl">
                Objetivo do projeto
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Criar um aplicativo para facilitar o processo do pedido e
                otimizar o tempo dos usuários aumentando assim a satisfação dos
                clientes
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium  text-gray-600 md:pb-8 md:text-xl">
                Público alvo
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Clientes da padaria que buscam uma maneira mais fácil e prática
                de fazer pedidos e de recebê-los no comforto de sua casa
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Principais desafios ou restrições
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                O projeto teve vários desafios, entre eles: determinar o que o
                público-alvo gostaria em um aplicativo e obter insights
                certeiros sobre o produto
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Detalhes do estudo de pesquisa
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                Primeiramente desenvolveu-se wireframes de papel e digitais e um
                protótipo de baixa fidelidade. Com o protótipo de baixa
                fidelidade realizou-se um estudo de usabilidade para obter-se
                insights sobre o produto. Após isso fez-se algumas alterações
                importantes com base no feedback dos entrevistado e assim
                desenvolveu-se o protótipo de alta fidelidade e outra pesquisa
                foi realizada para sasber do feedback dos usuários.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Conceitos iniciais do design
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                Buscou-se analisar aplicações de padarias já existentes no
                intuito de obter idéias e melhorias para a aplicação
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Esboços ou frameworks
              </h3>
              <div className="flex w-full items-center justify-center">
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={lowpad}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Resultado dos testes com usuários
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Com o feedback do teste com os usuários adicionou-se algumas
                melhorias a aplicação como uma identificação melhor dos métodos
                de entrega e uma tela de confirmação antes do pedido ser
                finalizado.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Mockups ou protótipos de alta fidelidade de designs finais
                refinados
              </h3>
              <div className="flex w-full items-center justify-center">
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={highpad}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Conclusão comentando o que foi aprendido com o processo de
                design e possíveis etapas
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Esse primeiro projeto me trouxe muitos conhecimentos. À partir
                dele entendi a importância dos testes com os usuários, pois
                muitas vezes eles nos mostram pontos importantes nos quais
                muitas vezes acabamos não dando tanta importância ou passam
                despercebidos.
              </h4>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400"></div>
      </div>
      <div className="flex flex-col">
        <div className="mb-8 flex w-full flex-col rounded-lg p-2 md:p-8">
          <div className="w-full space-y-4 text-left">
            <h2 className="mb-12 mt-4 text-center text-2xl font-semibold text-gray-700 md:text-4xl">
              Sistema de cadastramento online de casamentos no Garden Wedding
            </h2>
            <div className="flex w-full items-center justify-center">
              <a
                href="https://xd.adobe.com/view/17c16dd5-be1e-4751-be89-d6028c526ed8-4292/?fullscreen&hints=off"
                target="_blank"
              >
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={homewed}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </a>
            </div>
            <p className="cursor-pointer space-y-4 text-justify text-lg font-medium text-newpink-500 md:pb-8 md:text-xl lg:text-left">
              Clique aqui para acessar o protótipo de alta fidelidade
              <a
                href="https://xd.adobe.com/view/17c16dd5-be1e-4751-be89-d6028c526ed8-4292/?fullscreen&hints=off"
                target="_blank"
              ></a>
            </p>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Papel do designer no projeto
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-2 md:text-xl">
                Atuei como UX designer e UX researcher para a criação do
                aplicativo de padaria da Doces Sonhos
              </h4>
              <ul className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                {' '}
                Minhas responsabilidades envolveram:
                <li>Pesquisa de usuários;</li>
                <li>Condução dos estudos de usabilidade;</li>
                <li>Construção de wireframes de papel e digitais;</li>
                <li>Protótipos de alta e baixa fidelidade;</li>
              </ul>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-2 md:text-xl">
                Objetivo do projeto
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Criar um serviço que permita o agendamento de cerimônias online,
                facilitando assim para usuários que não possuem disponibilidade
                para ir até o local.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium  text-gray-600 md:pb-8 md:text-xl">
                Público alvo
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Pessoas que buscam realizar a cerimônia de casamento em um local
                ao ar livre e ter a melhor experiência de suas vidas
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Principais desafios ou restrições
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                O projeto teve vários desafios, entre eles: determinar o que o
                público-alvo gostaria em um aplicativo e aprender a desenvolver
                o projeto no Adobe Xd
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Detalhes do estudo de pesquisa
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                Primeiramente desenvolveu-se wireframes de papel e digitais e um
                protótipo de baixa fidelidade. Com o protótipo de baixa
                fidelidade realizou-se um estudo de usabilidade para obter-se
                insights sobre o produto. Após isso fez-se algumas alterações
                importantes com base no feedback dos entrevistado e assim
                desenvolveu-se o protótipo de alta fidelidade e outra pesquisa
                foi realizada para saber do feedback dos usuários.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Conceitos iniciais do design
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                Analisou-se sites na mesma proposta. Pensou-se em apresentar
                fotos do local, localicação e uma parte onde o usuário poderia
                fazer o cadastramento para o casamento.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Esboços ou frameworks
              </h3>
              <div className="flex w-full items-center justify-center">
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={lowwed}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Resultado dos testes com usuários
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Com o feedback do teste com os usuários adicionou-se algumas
                melhorias na aplicação baseados nos insights do estudo de
                usabilidade: adicionou-se o botão de voltar e uma tela de
                confirmação do cadastro.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Mockups ou protótipos de alta fidelidade de designs finais
                refinados
              </h3>
              <div className="flex w-full items-center justify-center">
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={highwed}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Conclusão comentando o que foi aprendido com o processo de
                design e possíveis etapas
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Esse projeto foi muito bacana e educativo. Com ele consegui
                entender melhor sobre responsividade e a importância deste. Além
                disso, consegui aprender a fazer designs no adobe xd
              </h4>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400"></div>
      </div>
      <div className="flex flex-col">
        <div className="mb-8 flex w-full flex-col rounded-lg p-2 md:p-8">
          <div className="w-full space-y-4 text-left">
            <h2 className="mb-12 mt-4 text-center text-2xl font-semibold text-gray-700 md:text-4xl">
              Aplicação para ensinar pessoas a preparar refeições mais saudáveis
            </h2>
            <div className="flex w-full items-center justify-center">
              <a
                href="https://xd.adobe.com/view/17c16dd5-be1e-4751-be89-d6028c526ed8-4292/?fullscreen&hints=ofhttps://www.figma.com/proto/qsg0uQ9sSl5rZprFzS9S0L/cooking-health_high_fidelity?type=design&node-id=1-3&t=pB0TgjEfaWyqgrCb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3&mode=design"
                target="_blank"
              >
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={homefood}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </a>
            </div>
            <p className="cursor-pointer space-y-4 text-justify text-lg font-medium text-newpink-500 md:pb-8 md:text-xl lg:text-left">
              Clique aqui para acessar o protótipo de alta fidelidade
              <a
                href="https://www.figma.com/proto/qsg0uQ9sSl5rZprFzS9S0L/cooking-health_high_fidelity?type=design&node-id=1-3&t=pB0TgjEfaWyqgrCb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3&mode=design"
                target="_blank"
              ></a>
            </p>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Papel do designer no projeto
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-2 md:text-xl">
                Atuei como UX designer e UX researcher para a criação da
                aplicação na versão desktop e na versão como aplicativo mobile
              </h4>
              <ul className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Minhas responsabilidades envolveram:
                <li>Pesquisa de usuários;</li>
                <li>Condução dos estudos de usabilidade;</li>
                <li>Construção de wireframes de papel e digitais;</li>
                <li>Protótipos de alta e baixa fidelidade;</li>
              </ul>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-2 md:text-xl">
                Objetivo do projeto
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Desenvolver uma aplicação que permita que as pessoas possam
                aprender a cozinhar refeições saudáveis de maneira fácil
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium  text-gray-600 md:pb-8 md:text-xl">
                Público alvo
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Pessoas que tem como objetivo aprender receitas de refeições
                mais saudáveis e equilibradas
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Principais desafios ou restrições
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                O maior desafio deste projeto foi determinar como o design
                ficaria nos diferentes tamanhos de tela
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Detalhes do estudo de pesquisa
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                Primeiramente desenvolveu-se wireframes de papel e digitais e um
                protótipo de baixa fidelidade. Com o protótipo de baixa
                fidelidade realizou-se um estudo de usabilidade para obter-se
                insights sobre o produto. Após isso fez-se algumas alterações
                importantes com base no feedback dos entrevistado e assim
                desenvolveu-se o protótipo de alta fidelidade e outra pesquisa
                foi realizada para saber do feedback dos usuários.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Conceitos iniciais do design
              </h3>
              <h4 className="font-regular text-lg  text-gray-600 md:pb-8 md:text-xl">
                Revisou-se sites de receitas existentes e com base neles
                trabalhou-se em uma aplicação para atender as necessidades do
                público alvo.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Esboços ou frameworks
              </h3>
              <div className="flex w-full items-center justify-center">
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={lowfood}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Resultado dos testes com usuários
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Com o feedback do teste com os usuários adicionou-se algumas
                melhorias: na opção mobile adicionou-se icones das categorias, o
                que facilita para o osuário, opção de favoritar receitas e um
                banner na página inicial que leva a uma sessão de informações
                sobre alimentos e saúde.
              </h4>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Mockups ou protótipos de alta fidelidade de designs finais
                refinados
              </h3>
              <div className="flex w-full items-center justify-center">
                <Image
                  priority={true}
                  height={300}
                  width={500}
                  src={highhealth}
                  alt="dance_website_template"
                  className="cursor-pointer hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 text-justify lg:text-left">
              <h3 className="text-lg font-medium text-gray-600 md:pb-8 md:text-xl">
                Conclusão comentando o que foi aprendido com o processo de
                design e possíveis etapas
              </h3>
              <h4 className="font-regular text-lg text-gray-600 md:pb-8 md:text-xl">
                Esse projeto foi bem interessante e desafiador. Agora pretendo
                trabalhar mais nos designs e desenvolver o design para as telas
                de tamanhos diferentes
              </h4>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400"></div>
      </div>
    </div>
  )
}
