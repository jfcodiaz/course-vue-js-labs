<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Vue Music
    select(v-model="selectedCountry")
      option(v-for="country in coutries" v-bind:value="country.value") {{country.name}}
    sppiner(v-show="loading")
    ul
      artist(
        v-for="artist in artists" 
        :artist="artist"
        :key="artist.mbid"
      )
</template>

<script>
import {getArtists} from './api'
import Artist from './components/Artist'
import Sppiner from './components/Spinner'
export default {
  name: 'app',
  data () {
    return {
      loading:true,
      artists:[],
      coutries: [
        {name:'México', value:'mexico'},
        {name:'Argentina', value:'argentina'},
        {name:'Colombia', value:'colombia'},
        {name:'España', value:'spain'},
      ],
      selectedCountry: 'mexico',
    }
  },
  watch: {
    selectedCountry: function(value) {
        this.refreshArtist(value)
    }
  },
  components:{
    Artist, Sppiner
  },
  methods: {
    refreshArtist(country){
      this.loading = true
      const self = this;
      getArtists(country)
      .then(function(artists) {
        self.loading = false
        self.artists = artists
      })
    }
  },
  mounted: function () {
    this.refreshArtist()
  }
}
</script>

<style lang="stylus">
  #app 
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
  h1, h2 
    font-weight normal
  ul 
    list-style-type none
    padding 0
  li 
    display inline-block
    margin 0 10px
  a 
    color #42b983

</style>
