<template>
  <div class="home mt-2">
    <div class="title py-5 d-block">
      <h1 class="art police">
        "L'art est inutile, c'est pour ça qu'il est essentiel."
      </h1>
      <span class="kartel">
        Le groupe Kartel
      </span>
    </div>
    <img src="../assets/images/nuit_etoile.png" class="w-25 nuit" alt="nuit">
    <div class="container">

      <h2 class="police mt-5 mb-3 mb-md-5">Qui sommes nous ?</h2>
      <div class="d-flex row mx-5 justify-content-center">
        <div class="col-12 col-md-6 mb-4">
          <img src="../assets/images/groupe1.png" alt="groupe" class="w-75">
        </div>
        <div class="col-12 col-md-6 my-auto">
          <p>L’agence Kartel, c’est nous, un groupe de jeunes avec l’envie d’expériences. Nous avons tous des compétences et parcours différents, mais un point commun : une sensibilité au monde de l’art. Nous voulons que l’art son accessible et nous sommes convaincue que chacun doit avoir la chance de partager sa créativité ; c’est pour ça que nous avons créer cette association en 2021.De jeunes artistes pourront ainsi gagner en visibilité par nos différents services et notre suivie (interviews, posts réseaux, expositions...)</p>
        </div>
      </div>

      <h2 class="police my-5">L’association Kartel s’occupe de vous !</h2>
      <div class="row justify-content-center mb-3">
        <div class="col-3 my-auto">
          <div class="col-12">
            <img class="w-25" src="../assets/icon/vue.png" alt="eye">
          </div>
          <div class="col-12 my-2">
            <span class="icon">visibilité</span>
          </div>
        </div>
        <div class="col-3 my-auto">
          <div class="col-12">
            <img class="w-25" src="../assets/icon/calendrier.png" alt="calendar">
          </div>
          <div class="col-12 my-2">
            <span class="icon">évènement</span>
          </div>
        </div>
        <div class="col-3 my-auto">
          <div class="col-12">
            <img class="w-25" src="../assets/icon/entretien.png" alt="media">
          </div>
          <div class="col-12 my-2">
            <span class="icon">interview</span>
          </div>
        </div>
        <div class="col-3 my-auto">
          <div class="col-12">
            <img class="w-25" src="../assets/icon/camera.png" alt="camera">
          </div>
          <div class="col-12 my-2">
            <span class="icon">shooting</span>
          </div>
        </div>
      </div>

      <div>
        <h2 class="police my-5">Nos derniers projets</h2>
        <!-- a remplir -->
        <div class="mb-5">
          <button class="btn btn-outline-primary">Voir nos projets</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView'
}
</script>

<style scoped>
.title{
  text-align: center;
  width: 100%;
  background-color: #f6dc75;
}

.title .art .kartel{
  text-transform: uppercase;
  display: block;
}
.police {
  font-family: 'Lettown Hills';
  font-weight: 900 !important;
}

.art{
  animation: text 2s 1;
  background-color: #f6dc75;
  position: relative;
}

.kartel{
  font-size: 20px;
}

@keyframes text{
  0%{
      color: black;
      margin-bottom: -40px;
  }
  50%{
      margin-bottom: -40px;
  }
}
.nuit {
  position: relative;
  margin-top: -30px;
}

.icon {
  font-size: 18px;
}
</style>
