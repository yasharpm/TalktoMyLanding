import 'bootstrap';
import '../index.scss';
import './index.scss';
declare let $: any;
$(window).on('load', function () {
  setTimeout(() => {
    $(".se-pre-con").fadeOut("slow");
  }, 200);

});

$("#download").click(()=>{
  window.open('https://tracker.metrix.ir/go3gos', '_blank'); 

})