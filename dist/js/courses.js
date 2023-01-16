/* https://api.jqueryui.com/autocomplete/ */

import { signOut } from "./auth.js";

const coursesURL = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
const courseURL = "https://www.fulek.com/data/api/supit/get-curriculum";

const init = async () => {
  if (!window.isSignedIn()) return $("#signed-out").show().next().hide();
  $("#courses").show();

  const { data: courses } = await $.getJSON(coursesURL).fail(() => {
    alert("Greška prilikom dohvaćanja nastavnog plana! Bit ćete odjavljeni.");
    signOut();
  });

  const selectedCourses = [];
  const addCourse = ({ data: course }) => {
    selectedCourses.push(course);
    updateTotals();
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
      selectedCourses.splice(selectedCourses.indexOf(course), 1);
      updateTotals();
      $tr.remove();
    });
    $("#totals").before($tr.append($del));
  };

  const updateTotals = () => {
    for (const val of ["ects", "sati", "predavanja", "vjezbe"])
      $("#" + val).text(selectedCourses.reduce((a, b) => a + b[val], 0));
    $("#nastavni-plan table")[selectedCourses.length ? "show" : "hide"]();
  };

  $("#nastavni-plan input").autocomplete({
    source: courses.map((i) => i.kolegij),
    delay: 0,
    select: (e, ui) => {
      const { id } = courses.find((i) => i.kolegij == ui.item.label);
      if (selectedCourses.every((i) => i.id != id))
        $.getJSON(courseURL + "/" + id, addCourse);
    },
  });
};

export default init;
