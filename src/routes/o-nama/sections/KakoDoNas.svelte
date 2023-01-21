<script lang="ts">
  const content = [
    [
      {
        title: "Lokacija",
        text: "Algebra se nalazi u okviru kampusa Hrvatskog katoličkog sveučilišta (HKS) u Zagrebu, na adresi Ilica 242. Ulaz u kampus smješten je u Domobranskoj ulici. Unutar kampusa, Algebra djeluje na dvije lokacije: u novoobnovljenoj zgradi s početka 20. stoljeća koja se prostire na više od 3500 četvornih metara, te na 2. katu suvremene nove poslovne zgrade koja se nalazi u neposrednoj blizini.",
        icon: "location_on",
      },
      {
        title: "Kako do nas?",
        text: "Algebra je smještena u zapadnom dijelu grada Zagreba, na sto metara udaljenosti od tramvajske stanice Sv. Duh i na15-ak km udaljenosti od zagrebačke zračne luke.",
        icon: "explore",
      },
    ],
    [
      {
        title: "Javni prijevoz",
        text: "Od glavnog trga, Trga bana Jelačića, udaljena je 6 tramvajskih stanica vožnje, linijama 6 i 11 u smjeru Črnomerca. Od Glavnog željezničkog kolodvora udaljena je 8 stanica vožnje tramvajskom linijom 6, također u smjeru Črnomerca.",
        icon: "directions_bus",
      },
      {
        title: "Osobno vozilo",
        text: "O informacije o dolasku automobilom iz smjera Slavonska avenija dostupne su ovdje, iz smjera Zagrebačke avenije ovdje, a iz smjera Jadranske avenije",
        icon: "directions_car",
      },
      {
        title: "Parking",
        text: "Unutar kampusa posjetiteljima je na raspolaganju otvoreni parking koji se naplaćuje 4 kune po satu, dok se izvan kampusa nalazi III. parkirna zona Zagrebparkinga.",
        icon: "local_parking",
      },
    ],
  ];
</script>

<div id="find-us" class="pt-4 pb-8">
  <div class="m-auto grid max-w-screen-xl gap-6 px-3 lg:grid-cols-2">
    {#each content as box}
      <div class="border-2 bg-white pb-3">
        {#each box as { title, text, icon }}
          <div class="rounded-md p-4">
            <div class="mb-4 flex items-center font-semibold">
              <span class="material-icons text-3xl text-blue-500">
                {icon}
              </span>
              <span class="pl-3 text-2xl">
                {title}
              </span>
            </div>
            <div class="pl-16">{text}</div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
  <div class="m-auto w-full max-w-screen-xl px-3 pt-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.0500120319143!2d15.93893681556909!3d45.81025677910652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6d74e265877%3A0x1a4f4eae9fc461c5!2sAlgebra%20University%20College!5e0!3m2!1sen!2shr!4v1665771951174!5m2!1sen!2shr"
      class="w-full rounded-md border-2"
      height="450"
      allowfullscreen={true}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Google Maps"
    />
  </div>
</div>
