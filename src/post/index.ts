import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../index.scss';
import './index.scss';
import * as moment from 'jalali-moment';

declare let $: any;
$(window).on('load', function () {
  setTimeout(() => {
  
  }, 200);
});
$(document).ready(function () {
  $.urlParam = function (name:string) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}
  function getTimeSpan(value: number) {
    if (value) {
      const pureData=new Date(value);
      const date = new Date(value).getTime();
      let now = new Date().getTime();
      let delta = ((now - date) / 1000);

      if (delta < 10) {
        return 'همین الان';
      }
      if (delta < 60) { // sent in last minute
        return Math.floor(delta) + '  ثانیه قبل';
      }
      if (delta < 3600) { // sent in last hour
        return Math.floor(delta / 60) + '  دقیقه قبل';
      }
      if (delta < 86400) { // sent on last day
        return Math.floor(delta / 3600) + '  ساعت قبل';
      }
      const day = Math.floor(delta / 86400) 
      if(day > 10) {
          return moment(pureData).locale('fa').format('D MMMM YY')
      }
      return day + ' روز قبل';
    }
  }

    $.ajax({
        url: `http://talktome.yashoid.com/api/v1/post?id=${$.urlParam('id')}`,
        headers: {
            "token": "web",
            'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
            'Access-Control-Allow-Origin': '*'
        },
        type: 'Get',
        success: function (data: any) {
          $(".se-pre-con").fadeOut("slow");
            console.log(data)
            document.getElementById('comment.content').innerHTML = data.content;
            document.getElementById('comment.view_count').innerHTML = data.view_count;
            document.getElementById('comment.comments.length').innerHTML = data.comments.length
            document.getElementById('timeSpan').innerHTML = getTimeSpan(data.created_time)

            data.comments.forEach(function(element:any) {
                document.getElementById('comments').innerHTML+=`<div class="response-comment-card mt-lg-5 mt-sm-2">
                        <i class="fa fa-comment ml-1"></i>
                       ${element.content}
                       </div>`
            });
        }
    });

});