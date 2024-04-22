<template>
  <nav class="navbar navbar-expand-lg bg-white main-nav">
    <div class="container-fluid">
      <img src="../assets/hrmlogo.jpg" class="img-fluid logo">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="ri-align-justify"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-pills " id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true" @click="HomeView">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
              type="button" role="tab" aria-controls="pills-profile" aria-selected="false"
              @click="ProfilePage">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
              type="button" role="tab" aria-controls="pills-contact" aria-selected="false"
              @click="ContactPage">Contact</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
              type="button" role="tab" aria-controls="pills-contact" aria-selected="false"
              @click="ImagePage">Contact</button>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control  mt-2 me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
        tabindex="0"></div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    HomeView() {
      this.$router.push({
        path: '/HomeView',
        query: {
          name: 'HomeView'
        }
      });
    },
    ProfilePage() {
      this.$router.push({
        path: '/ProfilePage',
        query: {
          name: 'ProfilePage'
        }
      });
    },
    ContactPage() {
      this.$router.push({
        path: '/ContactPage',
        query: {
          name: 'ContactPage'
        }
      });
    },
    ImagePage() {
      this.$router.push({
        path: '/ImagePage',
        query: {
          name: 'ImagePage'
        }
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 100px;
  height: 40px;
}

.main-nav {
  border-bottom: 1px solid #AAC1DD;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: Poppins;
  overflow: auto;
}
</style>
