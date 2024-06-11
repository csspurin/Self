<div class="loading">

<div class="inner" ng-view>
</div>

<script src="assets/js/jquery.min.js" charset="utf-8"></script>
<script type="text/javascript" src="assets/pluging/loading/please-wait.min.js"></script>
  <script type="text/javascript">
    window.loading_screen = window.pleaseWait({
      logo: "images/logo.png",
      backgroundColor: ' #2a2a2a',
      loadingHtml: "<p class='loading-message'></p><div class='sk-circle'><div class='sk-circle1 sk-child'></div><div class='sk-circle2 sk-child'></div><div class='sk-circle3 sk-child'></div><div class='sk-circle4 sk-child'></div><div class='sk-circle5 sk-child'></div><div class='sk-circle6 sk-child'></div><div class='sk-circle7 sk-child'></div><div class='sk-circle8 sk-child'></div><div class='sk-circle9 sk-child'></div><div class='sk-circle10 sk-child'></div><div class='sk-circle11 sk-child'></div><div class='sk-circle12 sk-child'></div></div>"
    });
  </script>
  <script src="assets/js/angular.min.js"></script>

  <script type="text/javascript">

      $(window).load(function() {

          $("body").removeClass("pg-loading");
          $(".pg-loading-screen").addClass("loading-hide");
            // alert("window load occurred!");
            setTimeout(function(){
                  $(".pg-loading-screen").remove();
                  $(".loading").remove();
            },1000);

      });
  </script>
</div>
