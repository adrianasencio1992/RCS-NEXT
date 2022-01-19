import React from "react";
import jQuery from "jquery";
import SCPrueba from "./prueba.styled";

function Prueba({ page, name }) {
  if (typeof $ !== "undefined") {
    // browser code por si algo no funciona ponerlo despues de typeof y escribir le codigo dentro
    var scroll_offset = 120;
    $(window).scroll(function () {
      var $this = $(window);
      if ($(".sticky-btn").length) {
        if ($this.scrollTop() > scroll_offset) {
          $(".sticky-btn").addClass("revealed");
        } else {
          $(".sticky-btn").removeClass("revealed");
        }
      }
    });
  }

  return (
    <SCPrueba>
      <div id="page-top"></div>

      <h1 class="h1">Multiple Sticky Buttons Revealed On Scroll</h1>
      <h2 class="h2">
        Just 12 Javascript Lines 😲 <br />
        Only 1 Class For All Your Buttons
      </h2>
      <h2 class="h2">
        Use the class <span>.sticky-btn</span> and customize it in for every{" "}
        <span>ID</span> purpose.
      </h2>

      <div id="contact-wa">
        <a href="https://spirumax.com.br" target="blank" class="sticky-btn">
          <img src="https://byjaris.com/code/icons/whatsapp-icon.svg" />
        </a>
      </div>

      <div class="content">
        <p>
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quasi quis culpa a maiores quam atque eos libero aliquid, neque cumque
          officia vitae voluptatem, quaerat distinctio debitis dicta natus
          quibusdam obcaecati, alias perferendis dolore aperiam impedit! Autem,
          aperiam illum suscipit debitis distinctio perspiciatis quibusdam nemo
          fuga perferendis ea veniam! Molestias necessitatibus veniam sit
          consequuntur saepe maiores accusamus animi, neque reiciendis
          perferendis. Possimus at impedit doloribus recusandae maiores!
          Repellendus, ipsam quod eveniet tempora laboriosam sint expedita in
          temporibus quia nam. Debitis, animi repudiandae repellat optio aperiam
          exercitationem eligendi ut officiis illo voluptatem corporis maxime!
          Ex quas ad unde excepturi quo tempora necessitatibus. Illo, soluta
          laudantium sunt temporibus porro consequuntur, fugiat ab sit
          consequatur alias totam rerum impedit nihil dolor dolorum
          voluptatibus.
        </p>
        <p>
          Id corrupti rem vel laboriosam dolore, sapiente suscipit cumque
          facilis aliquid corporis enim illum reiciendis repellendus mollitia
          aperiam quos quas laudantium officia porro error nulla. Reiciendis
          reprehenderit labore aliquid tempore, error, ab officia repudiandae
          soluta aliquam maxime quibusdam nobis, libero exercitationem numquam
          officiis temporibus! A labore optio doloremque nesciunt ab voluptates.
          Perferendis excepturi quo omnis eligendi vero! Cumque quasi asperiores
          dolorum fugiat, officiis qui consequuntur architecto saepe tempore
          adipisci inventore ut, dolore quaerat sit beatae ea molestiae cum
          accusamus ducimus, rerum possimus ex harum quod. Culpa temporibus aut
          at quia labore fugit nam dicta minus cum veniam ipsam odio, veritatis
          quisquam consequuntur optio animi nihil earum debitis, asperiores
          vitae tempora rerum sunt voluptates iste? Et exercitationem impedit
          temporibus amet dolor!
        </p>
        <p>
          Delectus, neque laboriosam molestias dolor ea, ipsa ut temporibus quos
          dolore animi enim, ipsum aperiam repellat eaque labore dicta numquam
          quaerat qui atque! Aliquam placeat dolorem enim ratione? Amet officiis
          quae harum provident sed eos expedita soluta! Explicabo cumque
          consectetur molestiae fuga ipsam quisquam, omnis illo nam debitis
          excepturi ex ullam. Cupiditate cumque, ullam tenetur libero corrupti
          labore sequi ipsa dolore fugiat, adipisci obcaecati ab qui explicabo
          amet eos reiciendis similique accusantium officia? Ipsa accusamus,
          corrupti recusandae veniam voluptatibus nihil quam nobis porro sed
          cum! Odio aspernatur libero, ipsum deleniti officia, minus consequatur
          doloribus fugiat nemo harum nostrum eligendi expedita quisquam
          possimus delectus quidem dicta dignissimos itaque. Tempore, quaerat,
          eaque aliquid, voluptatem illo rem dicta nemo ea reprehenderit cumque
          placeat?
        </p>
        <p>
          Iste, soluta cumque! Vel nihil commodi doloremque tempora blanditiis
          accusamus modi necessitatibus ipsa rerum neque fugiat deserunt minus
          quae provident, exercitationem maiores eaque sunt reiciendis id.
          Numquam nihil aut aliquid molestias, provident deleniti! Ipsam itaque
          est doloribus dicta commodi nihil non ad corrupti totam, culpa earum
          perferendis praesentium rem fugit architecto adipisci blanditiis!
          Excepturi magnam tempore hic cupiditate veritatis impedit illo eius
          architecto assumenda, totam velit, suscipit error. Eos, animi quia
          provident tempora doloremque molestiae nesciunt magni pariatur! Minima
          adipisci est blanditiis sapiente delectus facilis autem laborum
          cupiditate deserunt expedita, dolor culpa temporibus repellat nemo
          aliquid voluptates aliquam maxime a earum facere tenetur magni
          architecto? Mollitia aliquam odit explicabo nihil? Quod atque nulla
          magnam quibusdam eum sit dicta pariatur doloremque.
        </p>
        <p>
          Sint doloremque consectetur distinctio. Cumque necessitatibus id culpa
          nobis odio debitis doloremque facilis vitae fugit at, quisquam nemo ut
          assumenda excepturi porro illum minus alias delectus nostrum, laborum
          rem maxime unde quos! Animi iusto ea mollitia saepe ex nam debitis
          autem minima accusantium impedit odio illum laudantium repellat, iste
          cum in adipisci labore culpa, commodi suscipit quam cumque? Voluptas,
          in accusantium veniam at cum repellat assumenda nulla voluptatem nam
          quasi consequatur illo ipsum laboriosam vel voluptatibus vitae tempore
          repudiandae dolor? Inventore ipsum nobis, reprehenderit sint facere
          quasi sunt ullam consequuntur dignissimos quibusdam corporis eveniet
          eum sit vitae, consequatur quod! Nulla magni eveniet vel maxime
          aliquam quaerat saepe dolore repudiandae. Hic maxime tenetur possimus
          fugiat unde explicabo dolores laudantium voluptas quas.
        </p>
        <p>
          Ipsa commodi error totam. Illum cupiditate corrupti, amet molestias
          ullam voluptatem ut! Eveniet vero unde eos fugiat aut. Iusto voluptas
          illo explicabo. Quibusdam aperiam accusantium atque dolore. Laboriosam
          eaque perspiciatis accusantium voluptatem doloremque tenetur corrupti
          doloribus cupiditate, animi molestiae reprehenderit possimus et
          repellat. Dolore repudiandae itaque eligendi recusandae nesciunt
          delectus vel provident porro. Obcaecati asperiores molestias aliquam
          dolores expedita quo unde vel ipsum eum repudiandae, voluptatum earum
          corrupti, iure molestiae nisi id neque quis? Accusamus nemo quae
          consequatur culpa odit reprehenderit voluptatum aspernatur dolorum
          nesciunt officia cumque facere, alias itaque fugit! Aspernatur soluta
          aliquid quaerat nisi placeat enim, vel ducimus adipisci est doloremque
          neque repudiandae voluptate maiores qui quo labore quos, rerum saepe.
          Nihil id deserunt numquam atque aliquam officia.
        </p>
        <p>
          Possimus saepe labore dolorum, voluptatibus facilis id optio porro
          odio incidunt obcaecati soluta cupiditate nisi neque nostrum quibusdam
          atque. Beatae iste recusandae, harum repellendus quisquam consequuntur
          ducimus ex aliquid nostrum voluptatum amet labore nulla ratione
          reprehenderit expedita quidem enim, et esse nobis modi sequi quae,
          quibusdam atque facere. Aperiam odit modi ut veniam eaque unde in
          sapiente repellendus pariatur, laboriosam inventore reprehenderit
          labore maxime ipsum placeat ratione fuga distinctio magnam deleniti
          vel quidem nesciunt ducimus architecto mollitia. Nulla, facere.
          Possimus accusamus doloremque error cumque facere! Facere aliquam,
          vitae, consectetur deserunt corporis a in adipisci cumque ex ducimus
          asperiores aspernatur eum recusandae illo id sequi. Sit cupiditate
          eveniet nihil suscipit! Sequi sapiente corrupti at vitae, minima optio
          dolorem harum vero excepturi.
        </p>
        <p>
          Minus non, quaerat commodi a inventore nam dolore temporibus
          exercitationem, molestiae praesentium ullam dignissimos rem mollitia
          debitis cupiditate ratione consequatur illum quia error? Quas
          similique natus assumenda dolor non pariatur placeat perspiciatis eum
          perferendis voluptatem soluta quisquam, eveniet qui hic, corrupti
          laboriosam sint amet nulla repellendus corporis! Totam similique
          repellendus est voluptatum consectetur tenetur autem numquam fugit
          enim expedita, maiores consequatur odio, laboriosam temporibus?
          Doloremque aut pariatur dolorum nostrum assumenda rerum repellat
          asperiores temporibus! Suscipit ad blanditiis ex, laborum explicabo
          omnis molestias iusto eius magnam dolorum, rerum pariatur dolor quod a
          eum ut laudantium facilis odit dignissimos aspernatur aliquid minima
          vel reprehenderit repellat! Veritatis numquam corporis, quasi,
          eligendi adipisci nesciunt deleniti, culpa beatae eos incidunt
          explicabo ad nulla totam quidem!
        </p>
        <p>
          Eos quisquam nemo assumenda voluptate! Accusantium, debitis officia!
          Aspernatur vel, ea eos neque odio illo temporibus libero voluptate
          quod ratione magnam nulla praesentium minima pariatur soluta quis
          ducimus iusto, sunt vero ipsam voluptatum! Fugit ipsum numquam
          officiis cum, sapiente voluptatem! Cumque accusantium nisi aspernatur
          aperiam blanditiis magnam impedit nostrum! Placeat odio voluptatem
          perspiciatis earum doloremque nobis quibusdam asperiores
          necessitatibus ratione quia excepturi fuga facere natus incidunt ipsa,
          atque nam porro distinctio nemo recusandae sequi molestias. Rerum
          facilis, totam earum modi, aut ea obcaecati accusantium perferendis
          magni praesentium officiis nobis aspernatur incidunt. Nesciunt, sit?
          Corrupti, placeat, facere nisi inventore recusandae dolorum quia
          expedita sed, sunt fuga enim officia doloremque adipisci doloribus
          accusamus nam numquam dolorem animi architecto aliquid rerum.
          Sapiente, nostrum.
        </p>
      </div>
      <script src="https://byjaris.com/code/js/jquery.min.js"></script>
    </SCPrueba>
  );
}

export default Prueba;
