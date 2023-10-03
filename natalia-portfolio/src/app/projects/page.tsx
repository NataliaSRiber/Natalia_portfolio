import Image from 'next/image'
import padwebsite from '../../assets/pad1.png'
import lowpad from '../../assets/lowfidelity.png'
import highpad from '../../assets/highfidelity.png'

// import grocerywebsite from '../../assets/grocery_store.png'

export default function Projects() {
  return (
    <div className="mx-6 mt-24 flex flex-col items-center justify-center gap-5 lg:mx-20 lg:mt-40">
      <h1 className="text-center text-2xl font-bold text-gray-700 md:text-5xl lg:mb-10">
        Projetos de Design UX
      </h1>
      <div className="flex flex-col">
        <div className="mb-8 flex w-full flex-col rounded-lg p-2 md:p-8">
          <div className="w-full space-y-4 text-left">
            <h2 className="mb-12 mt-8 text-center text-2xl font-semibold text-gray-700 md:text-4xl">
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
    </div>
  )
}
