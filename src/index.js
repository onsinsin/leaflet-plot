/**
 * Created by onsinsin on 2018/8/4.
 */
import Alogrithms from './algorithm/index'
import DrawHandlers from './draw/index'
if(!window.L){
  throw new Error('Leaflet is not imported !');
}
window.L.Plot={
  alogs:Alogrithms,
  draw:DrawHandlers
}