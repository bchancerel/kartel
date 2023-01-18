<template>
  <div class="container mb-5">
    <h1 class="police mt-3 mb-5">Nos Services</h1>

    <div class="row mt-5 mb-2 justify-content-center">
      <div class="col-3 mx-3  d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="currentColor"
          stroke="None"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-horizontal align-middle"
          >
          <circle cx="15" cy="15" r="15" class="pill-jaune"></circle>
        </svg>
      </div>
      <div class="col-8 d-flex justify-content-start">
        <p class="mx-2">Promotion online des artistes (à travers les réseaux sociaux et le site)</p>
      </div>
    </div>

    <div class="row my-2 justify-content-center">
      <div class="col-3 mx-3 d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="currentColor"
          stroke="None"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-horizontal align-middle"
          >
          <circle cx="15" cy="15" r="15" class="pill-jaune"></circle>
        </svg>
      </div>
      <div class="col-8 d-flex justify-content-start">
        <p class="mx-2">Positionnement des artistes sur des évènements (expositions, concerts...)</p>
      </div>
    </div>

    <div class="row my-2 justify-content-center">
      <div class="mx-3 col-3  d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="currentColor"
          stroke="None"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-horizontal align-middle"
          >
          <circle cx="15" cy="15" r="15" class="pill-jaune"></circle>
        </svg>
      </div>
      <div class="col-8 d-flex justify-content-start">
        <p class="mx-2">Interviews de l’artiste sur les réseaux sociaux</p>
      </div>
    </div>

    <div class="row my-2 justify-content-center">
      <div class="mx-3 col-3  d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="currentColor"
          stroke="None"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-horizontal align-middle"
          >
          <circle cx="15" cy="15" r="15" class="pill-jaune"></circle>
        </svg>
      </div>
      <div class="col-8 d-flex justify-content-start">
        <p class="mx-2">Shooting photo (aide pour la création de book, pack photos sur un event)</p>
      </div>
    </div>

    <div style="background-color: #f6dc75;" class="d-flex justify-content-center px-5 mx-5 mt-5">
      <p class="my-5 mx-5">Vous êtes intéressées ? Appellez nous au 06 06 06 06 06</p>
    </div>
    <div class="d-flex justify-content-center forfait">
      <div style="background-color: #212ea5" class="rounded-pill mx-3">
        <p class="my-2 mx-3" style="color :white">Forfait mensuel</p>
      </div>
      <div style="background-color: #212ea5" class="rounded-pill mx-3">
        <p class="my-2 mx-3" style="color :white">Forfait annuel</p>
      </div>
      <div style="background-color: #212ea5" class="rounded-pill mx-3">
        <p class="my-2 mx-3" style="color :white">Forfait trimestrielle</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ServiceView'
}
</script>

<style scoped>
.forfait{
  position: relative;
  margin-top: -20px;
}
.police {
  font-family: 'Lettown Hills';
  font-weight: 900 !important;
}
.pill-bleu {
  color: #212ea5;
}
.pill-noir {
  color: black;
}
.pill-jaune {
  color: #f6dc75;
}
.line {
  border-top: 2px solid #f6dc75 !important;
  border-top-width: 2px !important;
  border-top-style: solid !important;
  border-top-color: #f6dc75 !important;
}
</style>
