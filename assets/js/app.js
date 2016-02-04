$(function(){
  Vue.filter('imgPrep', function (value, begin, end) {
if(value)
    return 'pages/' + value
  });
  new Vue({
    el: 'body',
    data: {
      pages: [
        { name: 'Page Name', image: 'Image file name in pages folder' },
      ],
      active: {}
    },
    components: {
      thepage : {
        template: '#thepage',
        props: ['page', 'active'],
        methods: {
          openPage: function(){
            this.active = this.page;

            $('img').addClass('fadeInDown');
            setTimeout(function () {
              $('img').removeClass('fadeInDown');
            }, 1000);
          }
        }
      }
    },
  });
});
