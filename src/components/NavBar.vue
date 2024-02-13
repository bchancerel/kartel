<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light pt-0">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center my-4" id="navbarNavDropdown">
          <ul class="navbar-nav row">
            <li class="nav-item my-auto col">
              <a class="nav-link m-2" aria-current="page" href="/kartel/agence">L'agence</a>
            </li>
            <li class="col d-lg-flex d-none">
              <a href="/">
                <img class="w-100" src="../assets/logo.svg" alt="logo">
              </a>
            </li>
            <li class="col d-lg-none d-block nav-item my-auto">
              <a class="nav-link m-2" href="/kartel">Home</a>
            </li>
            <li class="nav-item my-auto col">
              <a class="nav-link m-2" href="/kartel/podcast">Notre Podcast</a>
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
  background-color: #212ea5;
  border-radius: 50px;
}

@keyframes active-style{
  from{
      border-radius: 10px;
      background-color:  #ffffff;
  }
  to{
      border-radius: 50px;
      background-color: #212ea5;
  }
}

.nav-link{
  color: black;
}
.nav-link:hover{
  color: white;
}

</style>
