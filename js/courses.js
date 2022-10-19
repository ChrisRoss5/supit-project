/* https://api.jqueryui.com/autocomplete/ */

const coursesURL = "https://www.fulek.com/VUA/SUPIT/GetNastavniPlan";
const courseURL = "https://www.fulek.com/VUA/supit/GetKolegij";

export default {
  $table: $("#nastavni-plan table"),
  $totals: $("#totals"),
  $totalECTS: $("#total-ects"),
  $totalHours: $("#total-hours"),
  selectedCoursesIds: [],
  async init() {
    $("#nastavni-plan input").focus();
    if ($("#nastavni-plan input").hasClass("ui-autocomplete-input")) return;
    const courses = await $.getJSON(coursesURL);
    $("#nastavni-plan input").autocomplete({
      source: courses.map((i) => i.label),
      delay: 0,
      select: (e, ui) => {
        const id = courses.find((i) => i.label == ui.item.label).value;
        if (!this.selectedCoursesIds.includes(id))
          $.getJSON(courseURL + "/" + id, this.addCourse.bind(this));
      },
    });
  },
  addCourse(course) {
    this.selectedCoursesIds.push(course.id);
    this.updateTotal(course.ects, course.sati);
    const $tr = $(`<tr>
      <td>${course.kolegij}</td>
      <td>${course.ects}</td>
      <td>${course.sati}</td>
      <td>${course.predavanja}</td>
      <td>${course.vjezbe}</td>
      <td>${course.tip}</td>
    </tr>`);
    const $del = $("<td><button class='btn btn-danger'>Obriši</button></td>");
    $del.on("click", () => {
      const index = this.selectedCoursesIds.indexOf(course.id);
      this.selectedCoursesIds.splice(index, 1);
      this.updateTotal(-course.ects, -course.sati);
      $tr.remove();
    });
    this.$totals.before($tr.append($del));
  },
  updateTotal(ects, hours) {
    this.$totalECTS.text(parseInt(this.$totalECTS.text() || 0) + ects);
    this.$totalHours.text(parseInt(this.$totalHours.text() || 0) + hours);
    const display = this.selectedCoursesIds.length ? "table" : "none";
    this.$table.css("display", display);
  },
};
