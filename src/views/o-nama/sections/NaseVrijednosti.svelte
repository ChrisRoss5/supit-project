<script lang="ts">
  const content = [
    {
      title: "SPECIJALIZIRANO I KVALITETNO",
      text: "Svi naši nastavni programi i procesi baziraju se na globalnim standardima i najrelevantnijim znanjima potrebnim za uspjeh na tržištu rada. Spajamo snažnu teorijsku podlogu s praktičnim znanjima kako bismo pomogli našim polaznicima da pronađu ono što vole raditi. Koliko smo uspješni u tome najbolje pokazuje činjenica da 100% naših studenata pronalazi posao unutar 6 mjeseci od diplome, dok čak 85% polaznika programa cjeloživotnog obrazovanja promijeni posao ili napreduje u roku 3 mjeseca nakon završetka programa.",
    },
    {
      title: "IZBALANSIRANO",
      text: "Obrazovanje za nas podrazumijeva akademsku, ali i društvenu komponentu čovjeka. Snažno vjerujemo da je čovjek spreman na napredak tek kada pronađe ravnotežu u životu. Stoga kreiramo okruženje koje će u jednakoj mjeri poticati kvalitetu obrazovanja i ispunjen i kvalitetan život. Ulaganje u obrazovanje uvijek znači ulaganje u sebe. Vjerujemo da upravo upisom studija ili programa obrazovanja postižemo balans između svakodnevnih obveza i kvalitetnog vremena koje odvajamo za sebe.",
    },
    {
      title: "IZVRSNO",
      text: "Izvrsnost je ključna emocionalna diferencijacija našeg branda – pomažemo našim polaznicima i studentima da pronađu ono što vole raditi i postanu izvrsni u tome. Našu izvrsnost dokazuju brojna priznanja i certifikati za kvalitetu naših nastavnih programa i procesa, ali i vrhunski strastveni predavači koji prenose tu iskru na sve studente i polaznike koji dođu u Algebru. Na putu do pronalaska onog što volimo postoji onaj trenutak kad shvatimo da mi to možemo i mi to želimo raditi, mi taj moment nazivamo iskra, zato želimo da svi koji su dio Algebre postanu izvrsni u onom što vole raditi odnosno da zaiskre u Algebri.",
    },
  ];
</script>

<div class="pt-4 pb-8">
  <div class="cursive">
    <div class="m-auto max-w-screen-xl md:w-3/5">
      Obećajemo pomoć u pronalasku onoga što voliš raditi i da ćemo te poticati
      na izvrsnost - kvalitetom programa i procesa, strastvenim predavačima,
      globalno aplikabilnim znanjem te poticanjem kvalitete života.
      <br /><br />
      Postoje vrijednosti u koje vjerujemo od prvog dana, koje dijele naši predavači,
      ali i naši polaznici, bez obzira imaju li oni 7 ili 77 godina. Pomno smo odabrali
      atribute koji su odraz tih naših vrijednosti i koji su ključni u kreiranju
      jasne i jedinstvene slike o našem brandu.
    </div>
  </div>
  <div class="m-auto grid max-w-screen-xl gap-4 px-3 lg:grid-cols-3">
    <div
      v-for="{(title, text)} in content"
      class="rounded-md border-2 p-4 text-justify"
    >
      <div class="mb-4 border-b-2 pb-4 font-semibold">{title}</div>
      <div>{text}</div>
    </div>
  </div>
</div>
