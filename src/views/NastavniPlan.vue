<template>
  <main id="nastavni-plan">
    <h1 class="main-title w-50 mx-auto p-4 text-center">Nastavni plan</h1>
    <div
      id="signed-out"
      class="text-danger py-xl-5 py-2 text-center"
      style="display: none"
    >
      Niste prijavljeni! Prijavite se kako biste pristupili nastavnom planu.
      <br /><br />
      <a class="btn btn-primary" href="/prijava" router-link>Prijavi se</a>
    </div>
    <div id="courses" class="py-xl-5 container py-2" style="display: none">
      <div class="row row-cols-xl-2 row-cols-1 gx-xl-5 gx-0 gy-3">
        <div class="col">
          <label class="fw-bold pb-2">Naziv kolegija:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Započni unos naziva kolegija..."
            spellcheck="false"
          />
        </div>
        <div class="col mb-5 overflow-auto">
          <table class="w-100" style="display: none">
            <thead>
              <tr>
                <th>Kolegij</th>
                <th>ECTS</th>
                <th>Sati</th>
                <th>Predavanja</th>
                <th>Vježbe</th>
                <th colspan="2">Tip</th>
              </tr>
            </thead>
            <tbody>
              <tr id="totals" class="fw-bold">
                <td class="text-end">Ukupno:</td>
                <td id="ects"></td>
                <td id="sati"></td>
                <td id="predavanja"></td>
                <td id="vjezbe"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
