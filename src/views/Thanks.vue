<template>
  <div class="thanks">
      <md-card>
          <md-card-media>
              <img src="../assets/logo.png" alt="Vue-Logo" class="logo-redirect">
          </md-card-media>
          <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
          </md-card-content>
          <md-card-actions>
              <md-button class="md-primary">
                  <router-link to="/">Home</router-link>
              </md-button>
          </md-card-actions>
      </md-card>
  </div>
</template>

<style>
    .thanks {
        width: 25%;
        min-width: 200px;
        margin: 30px auto;
    }
</style>