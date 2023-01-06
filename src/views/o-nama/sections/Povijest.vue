<template>
  <div class="pt-4 pb-8">
    <div class="cursive">
      <div class="m-auto max-w-screen-xl md:w-3/5">
        Zajedno gradimo povijest Algebre. Počeli smo prije gotovo dvadeset
        godina i s tobom nastavljamo put prema novim uspjesima.
        <br /><br />
        Otvorili smo Algebra LAB, jedinstveni inovacijski centar koji pomaže
        tvrtkama, javnim službama i start-up projektima razviti inovativna
        poslovna rješenja koja će potaknuti konkurentnost gospodarstva.
        Investicijom od čak tri milijuna kuna, jedini u Hrvatskoj smo objedinili
        tri ključna elementa – odjel primijenjenog istraživanja i razvoja u
        digitalnom području, start-up inkubator s coworking prostorom te
        inovativnu edukacijsku platformu namijenjenu širenju najnaprednijih
        tehnoloških i poslovnih znanja. Algebra LAB novo je mjesto je za
        inovacije, kreacije, ideje i snove o budućnosti.
      </div>
    </div>
    <div
      class="m-auto grid max-w-screen-xl gap-4 px-3 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="{ year, title, text } in content"
        class="rounded-md border-2 p-4 text-justify"
      >
        <div class="mb-4 border-b-2 pb-4 font-semibold">
          <span class="text-blue-500">{{ year }}.</span> – {{ title }}
        </div>
        <div>{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = [
  {
    year: 1998,
    title: "OSNOVAN ALGEBRA D.O.O. – PODUZEĆE ZA OBRAZOVANJE ODRASLIH",
    text: "Algebra d.o.o. osnovana je u travnju 1998. godine kao poduzeće za obrazovanje odraslih. U lipnju 1998. bilježi prve polaznike seminara primjene računala i računalnih aplikacija. U rujnu 1998. bilježi prvi znatniji porast broja korisnika usluga, da bi se kroz višeznamenkasti rast u godinama 1999. i 2000. etablirala na tržištu edukacije odraslih, na području korisničke primjene informacijskih tehnologija (IT).",
  },
  {
    year: 2000,
    title: "MICROSOFT AUTHORIZED TRAINING CENTER (ATC)",
    text: "Nakon dosta napora i truda uvjerili smo 2000 godine lokalni ured Microsoft Hrvatska da zadovoljavamo postavljene uvjete kako bismo mogli postati autorizirani obrazovni centar za njihove tehnologije. Ova, prva u nizu, autorizacija distancirala nas je do drugih obrazovnih ponuđača iz tog vremena te nam je osigurala dostup službenim nastavnim materijalima i povoljnije uvjete licenciranja softvera. Ovaj smo status naknadno značajno unaprijedili kako bismo dosegli „Gold“ epitet.",
  },
  {
    year: 2001,
    title: "ADOBE, MACROMEDIA I AUTODESK TRANING CENETER",
    text: "Potaknuti uspjehom dobivanja Microsoft akreditacije, u 2001 godini smo svu snagu uložili upravo na zadovoljavanje uvjeta za uspostavu službenog trening centra i za druge proizvođače te smo iste godine postali: Macromedia Authorized Training Center Adobe Authorized Training Provider Autodesk Authorized Training Center i IBM Business Partner.",
  },
  {
    year: 2002,
    title: "OSNOVANO UČILIŠTE ALGEBRA",
    text: "Početkom 2002. godine Algebra d.o.o. osniva Učilište Algebra, a iste godine seli se u znatno veći i kvalitetniji prostor u Maksimirsku 58a, Zagreb gdje se polazincima na raspolaganje stavlja ukupno 6 učionica i oko 800 m2 uređenog obrazovnog prostora. Prema procjenama Microsoft Hrvatska udio Algebre na hrvatskom tržištu edukacijskih usluga za Microsoft alate narastao je u toj godini na 30%–35%.",
  },
  {
    year: 2003,
    title: "UČILIŠTE ALGEBRA POSTALO VODEĆI PONUĐAČ OBRAZOVANJA U IT-U",
    text: "Uvođenjem niza novih programa obrazovanja odraslih u akreditiranih kod Ministarstva zaduženog za obrazovanje kroz nekoliko prethodnih godina, Algebra je u 2003 u samo godinu dana sa 5. skočila na 1. mjesto ponuđača informatičke edukacije (mjereno prema ostvarenom prihodu i broju polaznika), ostvarivši rast u jednoj godini poslovanja od 91,8%. Poziciju vodećeg obrazovnog sustava u obrazovanju odraslih držimo još i danas.",
  },
  {
    year: 2007,
    title: "VISOKO UČILIŠTE ALGEBRA DOBIVA AKREDITACIJU",
    text: "Nakon više od 2 godine intenzivnih priprema, krajem 2007. je osnovana Visoka škola za primijenjeno računarstvo koja je dopusnicu Ministarstva znanosti, obrazovanja i sporta dobila u lipnju 2008. godine. Ovaj događaj postavio je nove smjernice razvoja Algebra obrazovne grupe te je na određeni način uspješno zaokružio nastojanja za pokretanjem visokoškolskog obrazovnog program koja su inicirana još u 2002. godini kroz provedbu IBM ACE obrazovnog programa. Provedba nastavnog programa započinje u prostorijama FER-a te u zgradi Algebre u Maksimirskoj ulici.",
  },
  {
    year: 2013,
    title:
      "IZVRSNI REZULTATI U EUROPSKIM PROJEKTIMA, KVALITETA I DALJE U FOKUSU",
    text: "Dodatno smo proširili svoje kapacitete dodavanjem novih učionica na adresi u Ilici, a uspješno smo prošli i provjeru kvalitete provedbe programa u organizaciji FER-a i do 2016. produžili certifikat „Odobreno od FER-a“. Čitava Algebra grupa je ocijenjena kao vodeći ECDL centar u Hrvatskoj, a istaknuti smo i kao primjer u provedbi EU projekata što je okrunio i posjet povjerenika EU g. Andora. Visoko učilište Algebra od ove godine ima novi logotip i vizualni identitet.",
  },
  {
    year: 2015,
    title: "STUDIJ DIGITALNOG MARKETINGA – PONOVO POMIČEMO GRANICE",
    text: "Nakon dvije godine intenzivnih priprema te provedenog postupka inicijalne akreditacije, Visoko učilište Algebra dobilo je u siječnju 2015. dopusnice novi preddiplomski i diplomski Studij digitalnog marketinga, prvi u ovom dijelu Europe. Znamo da je još mnogo toga što treba napraviti ispred nas. Znamo da se tek ponekad smijemo okrenuti i pogledati unazad kako bismo se prisjetili lijepih trenutaka koji su obilježili naših skoro 20 godina rada. Hvala Vam što ste u nas vjerovali sve ove godine i pomogli nam da rastemo.",
  },
  {
    year: 2016,
    title:
      "POKREĆEMO MBA E-LEADERSHIP STUDIJ – DOING BUSINESS IN DIGITAL ECONOMY",
    text: "U svoj sustav pripojili smo jednu od prvih hrvatskih poslovnih škola: International Graduate Business School (IgBS Zagreb) a u svoj program uvodimo i diplomski MBA studij eLeadershipa (eVođenja) na engleskom jeziku. Ovaj studij u većem dijelu izvode nastavnici s University of Indiana, Kelley School of Business, jedne od pet vodećih američkih poslovnih škola prema uglednom poslovnom časopisu Bloomberg, dok su pojedine specifične teme rezervirane za hrvatske i europske profesore.",
  },
];
</script>
