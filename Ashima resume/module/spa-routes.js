// Routing of SPA
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"home.html"
    }).when("/projects",{
        templateUrl:"portofolio.html"
    }).when("/about",{
        templateUrl:"about.html"
    }).when("/contact",{
        templateUrl:"contact.html"
    }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});