<template>
  <div class="c-loading">
    <div class="c-loading__text">Loading</div>
    <div class="c-loading__frame"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>


<style lang="scss">
.c-loading {
  position: fixed;
  background-color: $color-primary;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.c-loading__text {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  color: $color-grey;
  width: 100px;
  height: 30px;
  margin: -7px 0 0 -45px;
  text-align: center;
}

.c-loading__frame {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  margin: -85px 0 0 -85px;
  border: 3px solid #f00;
}

.c-loading__frame:after {
  content: '';
  position: absolute;
  border: 3px solid #0f0;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
}

.c-loading__frame:before {
  content: '';
  position: absolute;
  border: 3px solid #00f;
  left: 5px;
  right: 5px;
  top: 5px;
  bottom: 5px;
}

.c-loading__frame {
  border: 3px solid transparent;
  border-top-color: $color-primary-light;
  border-bottom-color: $color-primary-light;
  border-radius: 50%;
  -webkit-animation: loader 2s linear infinite;
  -moz-animation: loader 2s linear infinite;
  -o-animation: loader 2s linear infinite;
  animation: loader 2s linear infinite;
}

.c-loading__frame:before {
  border: 3px solid transparent;
  border-top-color: $color-primary-green;
  border-bottom-color: $color-primary-green;
  border-radius: 50%;
  -webkit-animation: loader 3s linear infinite;
  -moz-animation: loader 2s linear infinite;
  -o-animation: loader 2s linear infinite;
  animation: loader 3s linear infinite;
}

.c-loading__frame:after {
  border: 3px solid transparent;
  border-top-color: #84417c;
  border-bottom-color: #84417c;
  border-radius: 50%;
  -webkit-animation: loader 1.5s linear infinite;
  animation: loader 1.5s linear infinite;
  -moz-animation: loader 2s linear infinite;
  -o-animation: loader 2s linear infinite;
}

@-webkit-keyframes loaders {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
