const coursesURL = "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan";

export default {
  $table: $("#nastavni-plan table"),
  init() {
    $.getJSON(coursesURL, (data) => {
      $("#nastavni-plan input").autocomplete({
        source: data.map((i) => i.label),
        delay: 0,
        select: (event) => {
          console.log(event);
        },
      });
    });
  },
};
