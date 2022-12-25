/* https://api.jqueryui.com/autocomplete/ */

const coursesURL = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
const courseURL = "https://www.fulek.com/data/api/supit/get-curriculum";

export default async () => {
  if (!window.isSignedIn()) return $("#signed-out").show().next().hide();

  const courses = (await $.getJSON(coursesURL)).data;
  const $table = $("#nastavni-plan table");
  const $totals = $("#totals");
  const $totalECTS = $("#total-ects");
  const $totalHours = $("#total-hours");
  const selectedCoursesIds = [];

  const addCourse = ({ data: course }) => {
    selectedCoursesIds.push(course.id);
    updateTotal(course.ects, course.sati);
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
      selectedCoursesIds.splice(selectedCoursesIds.indexOf(course.id), 1);
      updateTotal(-course.ects, -course.sati);
      $tr.remove();
    });
    $totals.before($tr.append($del));
  };

  const updateTotal = (ects, hours) => {
    $totalECTS.text(parseInt($totalECTS.text() || 0) + ects);
    $totalHours.text(parseInt($totalHours.text() || 0) + hours);
    $table.css("display", selectedCoursesIds.length ? "table" : "none");
  };

  const config = {
    source: courses.map((i) => i.kolegij),
    delay: 0,
    select: (e, ui) => {
      const { id } = courses.find((i) => i.kolegij == ui.item.label);
      if (!selectedCoursesIds.includes(id))
        $.getJSON(courseURL + "/" + id, addCourse);
    },
  };

  $("#nastavni-plan input").autocomplete(config).focus();
};
