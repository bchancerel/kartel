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

      <div class="d-flex jsutify-content-center mt-5 mx-5">
        <p>Bienvenue sur la page d'accueil de Kartel, votre passerelle vers une exploration dynamique de la culture sous toutes ses formes ! En tant qu'association dévouée à la médiatisation et à la vulgarisation culturelle, nous sommes ici pour vous guider à travers un voyage passionnant où l'art, la musique, la littérature, et bien plus encore, prennent vie. Avec une équipe dédiée de passionnés, nous sommes fiers de vous offrir une plateforme où la découverte et l'enrichissement intellectuel se rencontrent. Préparez-vous à être inspiré, éduqué et divertis, car chez Kartel, la culture est bien plus qu'une simple expérience, c'est une aventure à partager ensemble. Bienvenue dans notre univers culturel !</p>
      </div>

      <div class="row my-5">
        <div class="col-4 my-auto">
          <div class="line"></div>
        </div>
        <div class="col-4 my-auto p-0 mx-auto">
          <h2 class="pill-bleu mb-0 police">Nos derniers projets</h2>
        </div>
        <div class="col-4 my-auto">
          <div class="line"></div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <iframe class="mb-3" style="border-radius:12px" width="560" height="315" src="https://www.youtube.com/embed/U4QOigcsHNE?si=RTPToYdMyyoEPfO3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="col-12 col-md-6">
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4sKENexsoGBMjzmoNO7oYE?utm_source=generator" width="100%" height="335" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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

.pill-bleu {
  color: #212ea5;
}

.line {
  border-top: 2px solid #f6dc75 !important;
  border-top-width: 2px !important;
  border-top-style: solid !important;
  border-top-color: #f6dc75 !important;
}
</style>
