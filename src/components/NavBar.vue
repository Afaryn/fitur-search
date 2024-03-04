<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg bg-info-subtle">
      <div class="container-fluid ms-2 me-2">
        <img
          class="navbar-brand"
          href="#"
          src="assets/images/frame_pst_bps.png"
          height="45"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item btn p-0 ms-2 rounded-5" id="btnLogin">
              <a class="nav-link ms-3 me-3" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
#btnLogin {
  background-color: #e4561d;
  font-style: bold;
}
</style>
