<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center my-4" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item mx-4">
              <a class="nav-link m-2" aria-current="page" href="/agence">L'agence</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link m-2" href="/artistes">Les artistes</a>
            </li>
            <li class="nav-item mx-4">
              <div class="nav-link">
                <img src="" alt="">
              </div>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link m-2" href="/evenements">Les événements</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link m-2" href="/services">Nos services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background: #ffffff !important;
}
.nav-link{
  font-size: large;
  color: black;
}

.nav-item:hover{
  box-shadow: 0 1px 5px 0;
  animation: active-style 0.5s 1;
  background-color: #254196;
  border-radius: 50px;
}

@keyframes active-style{
  from{
      border-radius: 10px;
      background-color:  #ffffff;
  }
  to{
      border-radius: 50px;
      background-color: #254196;
  }
}

.nav-link{
  color: black;
}
.nav-link:hover{
  color: white;
}

</style>
