import 'bootstrap';
import './../index.scss';
declare let $: any;
$(window).on('load', function () {
  setTimeout(() => {
    $(".se-pre-con").fadeOut("slow");
  }, 200);

});

