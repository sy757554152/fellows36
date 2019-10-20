import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie'
import Music from'./views/Music'
import Book from './views/Book'
import Picture from './views/Picture'
import Moviedetails from './views/Moviedetails'
import Musicdetails from './views/Musicdetails'
import Picturedetails from './views/Picturedetails'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },{
      path:'/music',
      name:'music',
      component:Music
    },{
      path:'/book',
      name:'book',
      component:Book
    },{
      path:'/picture',
      name:'picture',
      component:Picture
    },{
      path:'/details',
      name:'details',
      component:Moviedetails
    },{
      path:'/musicdetails',
      name:'musicdetails',
      component:Musicdetails
    },{
      path:'/picturedetails',
      name:'picturedetails',
      component:Picturedetails
    }
  ]
})
