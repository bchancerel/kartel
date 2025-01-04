<template>
    <div class="container mt-5">

        <div class="d-flex jsutify-content-center">
            <p class="mx-auto">N'hésitez pas à nous suivre sur nos réseaux sociaux pour ne rien perdre de nos dernères actualités !</p>
        </div>

        <div class="wrapper">
            <div class="button">
                <div class="icon">
                    <a href="https://www.instagram.com/agencekartel/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="button">
                <div class="icon">
                    <a href="https://www.tiktok.com/@agencekartel?_t=8kdp0Fcyjon&_r=1" target="_blank">
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
            <div class="button">
                <div class="icon">
                    <a href="https://youtube.com/@KartelAgence?si=ljVQ38KfnpjAatFr" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="row my-5">
            <div class="col-3 my-auto">
                <div class="line"></div>
            </div>
            <div class="col-6 my-auto p-0 mx-auto">
                 <h2 class="pill-bleu mb-0 police">Pour vos téléphones ? Flachez nous !</h2>
            </div>
            <div class="col-3 my-auto">
                <div class="line"></div>
            </div>
        </div>
        <div class="row justify-content-center mb-3">
            <img src="../assets/images/agencekartel_qr.png" alt="" style="width: 350px" class="mx-3 h-100 col-12 col-md-6">
            <img src="../assets/images/code_tk.jpg" alt="" style="width: 330px;" class="mx-3 col-12 col-md-6">
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ReseauxView'
}
</script>

<style scoped>
a {
    color: #2c3e50
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
.card {
  border: none !important;
  box-shadow: 3px 6px 6px rgb(0 0 0 / 10%);
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

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

.wrapper .button{
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 0 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease-out;
}

.wrapper .button .icon{
  display: inline-block;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50px;
  box-sizing: border-box;
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.wrapper .button:nth-child(1):hover .icon{
  background: #E1306C;
}
.wrapper .button:nth-child(2):hover .icon{
  background: #333;
}
.wrapper .button:nth-child(3):hover .icon{
  background: #ff0000;
}
.wrapper .button .icon i{
  font-size: 25px;
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.wrapper .button:hover .icon i{
  color: #fff;
}

</style>
