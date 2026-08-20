import SiteClient from "./SiteClient";

const pageHtml = String.raw`
    <a class="skip-link" href="#conteudo">ir para o conteúdo</a>
    <div class="scroll-progress" aria-hidden="true"><span></span></div>

    <header class="site-header" data-header>
      <a class="brand" href="#inicio" aria-label="Soraya Farah, início">
        <img
          class="brand-logo brand-logo-positive"
          src="/assets/v6/soraya-rose.png"
          alt=""
          aria-hidden="true"
          width="815"
          height="132"
        />
        <span class="brand-copy">
          <strong class="sr-only">Soraya Farah</strong>
          <small>yoga · bem-estar · comunidade</small>
        </span>
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
        <span></span><span></span>
        <span class="sr-only">abrir menu</span>
      </button>

      <nav id="main-nav" class="main-nav" aria-label="Navegação principal">
        <a href="#sobre">sobre</a>
        <a href="#mente-clara">mente clara</a>
        <a href="#formatos">coletiva &amp; personal</a>
        <a href="#experiencias">experiências</a>
        <a href="#zenmind">zenmind</a>
        <a
          class="nav-cta"
          href="https://beta.sympla.com.br/evento/yoga-wellness-experience/3437907"
          target="_blank"
          rel="noreferrer"
        >
          yoga &amp; wellness <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>

    <main id="conteudo">
      <section id="inicio" class="hero section-shell">
        <div class="hero-copy reveal">
          <p class="eyebrow">yoga integrativa · respiração · ayurveda · meditação mindfulness · neurociência</p>
          <h1>compreenda o que acontece em você.<br /><em>pratique novas formas de responder.</em></h1>
          <p class="hero-lead">
            Mente Clara é um programa autoral que une yoga, respiração, meditação, mindfulness,
            ayurveda e uma linguagem acessível sobre corpo, mente e estresse.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#mente-clara">conhecer o mente clara</a>
            <a
              class="text-link"
              href="https://beta.sympla.com.br/evento/yoga-wellness-experience/3437907"
              target="_blank"
              rel="noreferrer"
            >
              26–27 set · brasília <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div class="hero-visual reveal" role="img" aria-label="experiência conceitual de yoga em comunidade">
          <div class="hero-orbit hero-orbit-one" aria-hidden="true"></div>
          <div class="hero-orbit hero-orbit-two" aria-hidden="true"></div>
          <figure class="hero-image-main">
            <img
              src="/assets/v6/yoga-community.webp"
              alt="Grupo participando de uma experiência de yoga e bem-estar em espaço com luz natural"
              width="1672"
              height="941"
              fetchpriority="high"
            />
          </figure>
          <figure class="hero-image-side">
            <img
              src="/assets/v6/yoga-circle.webp"
              alt="Roda de conversa e prática em ambiente integrado à natureza"
              width="941"
              height="1672"
            />
          </figure>
          <div class="hero-note">
            <span>desde</span>
            <strong>2000</strong>
            <small>prática contínua</small>
          </div>
        </div>

        <a class="scroll-cue" href="#fundacao" aria-label="Continuar para a próxima seção">
          <span>explore</span><i aria-hidden="true"></i>
        </a>
      </section>

      <section id="fundacao" class="manifesto section-shell">
        <div class="section-index reveal" aria-hidden="true">01</div>
        <div class="manifesto-main reveal">
          <p class="eyebrow">uma nova perspectiva</p>
          <blockquote>
            “seu corpo não está falhando. ele está tentando proteger você.”
          </blockquote>
        </div>
        <div class="pillars reveal">
          <article>
            <span>01</span>
            <h3>reconhecer</h3>
            <p>Antes de você nomear o que sente, corpo e mente podem iniciar uma resposta de proteção.</p>
          </article>
          <article>
            <span>02</span>
            <h3>compreender</h3>
            <p>O alerta pode permanecer mesmo quando não existe um risco imediato.</p>
          </article>
          <article>
            <span>03</span>
            <h3>responder</h3>
            <p>Compreender essa resposta reduz a culpa e abre espaço para escolhas mais conscientes.</p>
          </article>
        </div>
      </section>

      <section id="sobre" class="about section-shell">
        <div class="about-media reveal">
          <figure>
            <img
              src="/assets/v6/yoga-circle.webp"
              alt="Vivência de yoga e conversa em grupo"
              width="941"
              height="1672"
              loading="lazy"
            />
          </figure>
          <p>Yoga como prática, autoconhecimento e compreensão do que acontece no corpo e na mente.</p>
        </div>

        <div class="about-copy reveal">
          <p class="eyebrow">sobre soraya</p>
          <h2>uma trajetória que une ciência, tradição e prática.</h2>
          <p class="lead">
            Soraya Diniz Farah é cientista política, instrutora de yoga, terapeuta ayurvédica,
            reikiana e pesquisadora de práticas integrativas aplicadas ao bem-estar.
          </p>
          <p>
            Praticante desde 2000, aprofundou sua formação em cursos, retiros e vivências em
            Buenos Aires, Barcelona, Copenhagen e Boston. Em 2012, tornou-se instrutora de Hatha
            Yoga Integrativo, em formação reconhecida pela Aliança do Yoga, e também se formou
            pela Universidade Vivekananda, na Índia.
          </p>
          <figure class="about-portrait">
            <img
              src="/assets/v9/soraya-yoga-lateral.png"
              alt="Soraya Diniz Farah em uma postura lateral de yoga"
              width="855"
              height="1280"
              loading="lazy"
            />
          </figure>
          <p class="experience-line">
            Experiência aplicada na Sociedade Vipassana de Meditação (SVM), na Confederação
            Nacional da Indústria (CNI), nos Correios, no Shambala Yoga Suddha Dharma Mandalam e
            no Dhanvantari Ayurveda e Yoga, contribuindo para ampliar o acesso ao yoga em
            ambientes corporativos, terapêuticos e comunitários.
          </p>
          <blockquote class="about-quote">
            “O yoga faz parte da minha vida há mais de 25 anos. Ao longo desse caminho, percebi
            que muitas pessoas passam a se relacionar de outra forma com a ansiedade quando
            entendem que ela é uma resposta de proteção, não um sinal de fraqueza.”
          </blockquote>
        </div>
      </section>

      <section id="mente-clara" class="method">
        <div class="section-shell method-inner">
          <div class="method-heading reveal">
            <p class="eyebrow eyebrow-light">programa mente clara</p>
            <h2>compreender transforma a forma como você se vê.<br /><em>praticar transforma a forma como você responde.</em></h2>
            <a
              class="button button-light"
              href="https://www.instagram.com/asorayafarah/"
              target="_blank"
              rel="noreferrer"
            >
              conversar sobre o programa <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="method-grid reveal">
            <article>
              <span>01</span>
              <div class="method-mandala" aria-hidden="true"></div>
              <h3>compreender</h3>
              <p>Uma linguagem acessível para reconhecer respostas ao estresse sem julgamento.</p>
            </article>
            <article>
              <span>02</span>
              <div class="method-mandala" aria-hidden="true"></div>
              <h3>respirar</h3>
              <p>Práticas respiratórias para criar pausa e favorecer presença.</p>
            </article>
            <article>
              <span>03</span>
              <div class="method-mandala" aria-hidden="true"></div>
              <h3>movimentar</h3>
              <p>Hatha Yoga Integrativo com posturas progressivas e adaptadas.</p>
            </article>
            <article>
              <span>04</span>
              <div class="method-mandala" aria-hidden="true"></div>
              <h3>observar</h3>
              <p>Meditação e mindfulness para perceber pensamentos, sensações e padrões automáticos.</p>
            </article>
            <article>
              <span>05</span>
              <div class="method-mandala" aria-hidden="true"></div>
              <h3>integrar</h3>
              <p>Ayurveda, rotina e hábitos possíveis para levar a prática à vida cotidiana.</p>
            </article>
          </div>
          <p class="method-disclaimer reveal">
            O programa apoia bem-estar e autocuidado. Não substitui diagnóstico, psicoterapia,
            tratamento médico, fisioterapêutico ou qualquer cuidado de saúde necessário.
          </p>
        </div>
      </section>

      <section id="formatos" class="formats section-shell">
        <div class="formats-heading reveal">
          <p class="eyebrow">um método, duas formas de viver a prática</p>
          <h2>cada encontro começa por como você chega.</h2>
          <p>
            Uma breve anamnese que orienta a escolha das práticas e respeita o momento, os objetivos e
            os limites de quem está presente.
          </p>
        </div>

        <div class="formats-grid">
          <article class="format-card reveal">
            <span>01 · aula coletiva</span>
            <h3>a prática é construída a partir de como o grupo chega.</h3>
            <p>
              As aulas são coletivas, mas possuem um toque de individualidade, com a prática se
              adaptando ao grupo de acordo com o estado físico, emocional e mental do grupo, sem
              perder a sequência tradicional e a progressão da experiência.
            </p>
            <ol>
              <li>Presença e respiração para chegar ao momento.</li>
              <li>Mobilidade e posturas adaptadas.</li>
              <li>Relaxamento para integrar a experiência.</li>
            </ol>
            <strong>coletiva na experiência e individualidade na condução</strong>
          </article>

          <article class="format-card format-card-personal reveal">
            <span>02 · aula personal</span>
            <h3>acompanhamento personal adaptado ao seu momento, objetivos e limites.</h3>
            <p>
              O trabalho individual permite observar necessidades recorrentes, ajustar cada
              técnica e acompanhar como a prática se integra à rotina.
            </p>
            <p>
              O ritmo, a intensidade e as ferramentas são definidos em diálogo, com mais espaço
              para escuta, continuidade e evolução.
            </p>
            <strong>mais proximidade para sustentar consciência, escolhas e autonomia.</strong>
          </article>
        </div>

        <p class="formats-note reveal">
          A linguagem tradicional de Soraya também reconhece dimensões física, emocional, mental,
          energética e áurica. Essas dimensões integram sua abordagem autoral e não são apresentadas
          como diagnóstico clínico.
        </p>
      </section>

      <section class="organizations">
        <div class="section-shell organizations-inner">
          <div class="organizations-copy reveal">
            <p class="eyebrow eyebrow-light">projetos para organizações</p>
            <h2>mente clara para grupos, equipes e comunidades.</h2>
            <p>
              Vivências e programas adaptáveis para ambientes corporativos e comunitários, com
              objetivos, formato, indicadores e limites claramente definidos.
            </p>
            <a
              class="button button-light"
              href="https://www.instagram.com/asorayafarah/"
              target="_blank"
              rel="noreferrer"
            >
              iniciar uma conversa <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div class="organizations-image reveal">
            <img
              src="/assets/v7/corporate-wellness-mandala.webp"
              alt="grupo em prática de respiração diante de uma parede de madeira com mandala em baixo-relevo"
              width="1672"
              height="941"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="experiencias" class="paths section-shell">
        <div class="paths-heading reveal">
          <p class="eyebrow">quatro portas de entrada</p>
          <h2>um ecossistema, quatro formas de viver a experiência.</h2>
          <p>Cada iniciativa conduz para uma experiência certa.</p>
        </div>
        <div class="paths-grid">
          <article class="path-card path-featured reveal">
            <span class="path-number">01</span>
            <div>
              <img class="path-brand-logo path-brand-soraya" src="/assets/v6/soraya-rose.png" alt="" aria-hidden="true" width="815" height="132" />
              <p class="path-kicker">autoridade &amp; prática</p>
              <p>Programa Mente Clara, aulas coletivas, personal e projetos para organizações.</p>
              <a href="https://www.instagram.com/asorayafarah/" target="_blank" rel="noreferrer">
                conhecer o trabalho <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
          <article class="path-card reveal">
            <span class="path-number">02</span>
            <div>
              <div class="path-brand-lockup path-brand-lockup-ecomind" aria-label="Ecomind Events">
                <img class="path-brand-logo path-brand-ecomind" src="/assets/v6/ecomind-olive.png" alt="" aria-hidden="true" width="526" height="102" />
                <span>events</span>
              </div>
              <p class="path-kicker">produção &amp; operação</p>
              <p>Experiências transformadoras, parceiros e sustentabilidade.</p>
              <a href="#evento">ver a experiência <span aria-hidden="true">↓</span></a>
            </div>
          </article>
          <article class="path-card reveal">
            <span class="path-number">03</span>
            <div>
              <img class="path-brand-logo path-brand-zenmind" src="/assets/v6/zenmind-purple.png" alt="" aria-hidden="true" width="529" height="102" />
              <p class="path-kicker">objetos &amp; cotidiano</p>
              <p>Produtos conscientes, kits e apoios para sustentar a prática.</p>
              <a href="#zenmind">conhecer a proposta <span aria-hidden="true">↓</span></a>
            </div>
          </article>
          <article class="path-card reveal">
            <span class="path-number">04</span>
            <div>
              <img
                class="path-yw-logo"
                src="/assets/v11/yoga-wellness-logo-clean.png"
                alt="Yoga &amp; Wellness Experience"
                width="360"
                height="497"
                loading="lazy"
              />
              <p class="path-kicker">comunidade &amp; encontro</p>
              <p>Festival, experiências participativas e pertencimento.</p>
              <a
                href="https://beta.sympla.com.br/evento/yoga-wellness-experience/3437907"
                target="_blank"
                rel="noreferrer"
              >
                ver o evento <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="evento" class="event-section">
        <div class="event-image" aria-hidden="true">
          <img src="/assets/v6/yoga-community.webp" alt="" width="1672" height="941" loading="lazy" />
        </div>
        <div class="section-shell event-inner">
          <div class="event-copy reveal">
            <img
              class="event-yw-logo"
              src="/assets/v11/yoga-wellness-logo-clean.png"
              alt="Yoga &amp; Wellness Experience"
              width="360"
              height="497"
              loading="lazy"
            />
            <h2>um lugar para pertencer, participar e continuar.</h2>
            <p>
              Mais do que uma agenda de aulas, o encontro combina práticas, vínculos e
              desenvolvimento pessoal em uma experiência aberta à descoberta.
            </p>
            <div class="event-meta">
              <div><span>quando</span><strong>26 e 27 de setembro</strong></div>
              <div><span>onde</span><strong>brasília · df</strong></div>
            </div>
            <a
              class="button button-dark"
              href="https://beta.sympla.com.br/evento/yoga-wellness-experience/3437907"
              target="_blank"
              rel="noreferrer"
            >
              acessar o evento <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="event-panel reveal">
            <p>faltam</p>
            <div class="countdown" data-countdown="2026-09-26T09:00:00-03:00" aria-live="polite">
              <div><strong data-days>--</strong><span>dias</span></div>
              <div><strong data-hours>--</strong><span>horas</span></div>
              <div><strong data-minutes>--</strong><span>min</span></div>
            </div>
            <div class="event-principles">
              <span>comunidade com propósito</span>
              <span>liberdade para ser autêntico</span>
              <span>experiências participativas</span>
              <span>desenvolvimento pessoal</span>
              <span>sensação de pertencimento</span>
            </div>
          </div>
        </div>
      </section>

      <section class="fourth-space section-shell">
        <div class="fourth-intro reveal">
          <p class="eyebrow">fourth space</p>
          <h2>interesses compartilhados criam vínculos fora da tela.</h2>
          <p>
            A referência ajuda a desenhar ambientes acolhedores, participação espontânea e
            continuidade depois do encontro.
          </p>
        </div>
        <div class="stats reveal">
          <div><strong>81%</strong><span>valorizam interesses de nicho</span></div>
          <div><strong>79%</strong><span>buscam combinar interesses</span></div>
          <div><strong>62%</strong><span>preferem estrutura leve</span></div>
        </div>
        <p class="source-note reveal">
          Fonte: Eventbrite, <em>Fourth Spaces</em>, jan. 2025. Pesquisa nos EUA, 18–35 anos,
          n=2.000. Referência de experiência, não prova de demanda local.
        </p>
      </section>

      <section id="zenmind" class="zenmind section-shell">
        <div class="zenmind-image reveal">
          <img
            src="/assets/v8/zenmind-ritual-vitalizante.png"
            alt="Vela Zenmind Vitalizante ao lado de objetos de autocuidado consciente"
            width="960"
            height="1280"
            loading="lazy"
          />
          <span>para criar momentos de presença</span>
        </div>
        <div class="zenmind-copy reveal">
          <img class="section-brand-logo section-brand-zenmind" src="/assets/v6/zenmind-purple.png" alt="" aria-hidden="true" width="529" height="102" />
          <p class="eyebrow">produtos</p>
          <h2>rituais de autocuidado consciente.</h2>
          <p>Produtos feitos por pequenas artesãs brasileiras.</p>
          <div class="collection-list">
            <div><span>01</span><strong>chás</strong></div>
            <div><span>02</span><strong>velas</strong></div>
            <div><span>03</span><strong>incensos</strong></div>
            <div><span>04</span><strong>almofadas de olhos</strong></div>
            <div><span>05</span><strong>tapetes</strong></div>
            <div><span>06</span><strong>acessórios</strong></div>
          </div>
          <a
            class="button button-outline"
            href="https://www.instagram.com/souzenmind/"
            target="_blank"
            rel="noreferrer"
          >
            conhecer @souzenmind <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section class="product-gallery" aria-labelledby="product-gallery-title">
        <h2 id="product-gallery-title" class="sr-only">Produtos Zenmind</h2>
        <p class="product-gallery-hint">arraste para o lado <span aria-hidden="true">→</span></p>
        <div
          class="product-gallery-viewport"
          data-product-gallery
          role="group"
          aria-label="Galeria de produtos Zenmind. Arraste para o lado para ver mais."
          tabindex="0"
        >
          <div class="product-gallery-track">
            <div class="product-gallery-sequence">
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/mask-therapy-navy.webp" alt="Máscara térmica azul-marinho com ervas Zenmind" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/candle-crystal.webp" alt="Vela Detox Zenmind em copo de cristal" width="1195" height="1600" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/tea-trio.webp" alt="Trio de chás Detox, Vitalizante e Zen" width="1195" height="1600" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/eye-pillow-purple.webp" alt="Almofada de olhos Zenmind em estampa floral roxa" width="1080" height="1350" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/candle-cloche.webp" alt="Vela Detox Zenmind ao lado de uma redoma de vidro" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/mask-beige.webp" alt="Máscara térmica cinza Zenmind sobre fundo bege" width="768" height="1376" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/candle-zen.webp" alt="Vela Zen acesa em um ambiente acolhedor" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/eye-pillow-multicolor.webp" alt="Protetor de olhos Zenmind com estampa multicolorida" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/candle-vitalizante.webp" alt="Vela Vitalizante Zenmind" width="896" height="1200" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/eye-pillow-caramel.webp" alt="Almofada de olhos Zenmind em estampa de tons terrosos" width="768" height="1376" loading="lazy" decoding="async" />
              </figure>
            </div>

            <div class="product-gallery-sequence" aria-hidden="true">
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/mask-therapy-navy.webp" alt="" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/candle-crystal.webp" alt="" width="1195" height="1600" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/tea-trio.webp" alt="" width="1195" height="1600" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/eye-pillow-purple.webp" alt="" width="1080" height="1350" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/candle-cloche.webp" alt="" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/mask-beige.webp" alt="" width="768" height="1376" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/candle-zen.webp" alt="" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-wide">
                <img src="/assets/v9/product-gallery/eye-pillow-multicolor.webp" alt="" width="1376" height="768" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/candle-vitalizante.webp" alt="" width="896" height="1200" loading="lazy" decoding="async" />
              </figure>
              <figure class="product-gallery-frame product-gallery-frame-portrait">
                <img src="/assets/v9/product-gallery/eye-pillow-caramel.webp" alt="" width="768" height="1376" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="closing section-shell">
        <p class="eyebrow reveal">sua próxima prática</p>
        <h2 class="reveal">você gostaria de praticar novas formas de responder ao estresse<br /><em>com mais presença, calma e segurança?</em></h2>
        <div class="closing-actions reveal">
          <a
            class="button button-primary"
            href="https://www.instagram.com/asorayafarah/"
            target="_blank"
            rel="noreferrer"
          >
            conhecer o mente clara <span aria-hidden="true">↗</span>
          </a>
          <a
            class="button button-outline"
            href="https://beta.sympla.com.br/evento/yoga-wellness-experience/3437907"
            target="_blank"
            rel="noreferrer"
          >
            yoga &amp; wellness <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="section-shell footer-inner">
        <div>
          <a class="brand brand-footer" href="#inicio">
            <img
              class="brand-logo brand-logo-negative"
              src="/assets/v6/soraya-negative.png"
              alt=""
              aria-hidden="true"
              width="815"
              height="132"
            />
            <span class="brand-copy"><strong class="sr-only">Soraya Farah</strong><small>yoga · bem-estar · comunidade</small></span>
          </a>
          <p>Ciência, tradição e comunidade com uma linguagem contemporânea e humana.</p>
        </div>
        <div class="footer-links">
          <p>explore</p>
          <a href="#sobre">sobre</a>
          <a href="#mente-clara">mente clara</a>
          <a href="#formatos">coletiva &amp; personal</a>
          <a href="#evento">yoga &amp; wellness</a>
          <a href="#zenmind">zenmind</a>
        </div>
        <div class="footer-links">
          <p>conecte-se</p>
          <a href="https://www.instagram.com/asorayafarah/" target="_blank" rel="noreferrer">
            @asorayafarah <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.instagram.com/souzenmind/" target="_blank" rel="noreferrer">
            @souzenmind <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://beta.sympla.com.br/evento/yoga-wellness-experience/3437907"
            target="_blank"
            rel="noreferrer"
          >
            ingressos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div class="section-shell footer-bottom">
        <span>© <span data-year></span> Soraya Farah.</span>
        <span>Yoga · bem-estar · comunidade.</span>
      </div>
    </footer>
`;

export default function Home() {
  return (
    <>
      <div className="site-root" dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <SiteClient />
    </>
  );
}
