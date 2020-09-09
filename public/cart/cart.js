angular
  .module("cart", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/cart", {
        templateUrl: "public/cart/cart.html",
        Controller: "CartCtrl",
      });
    },
  ])

  .controller("CartCtrl", [
    "$scope",
    "$http",
    "MainService",
    function ($scope, $http, MainService) {
      var Addtocartitems = [];
      var AddtoWishlistitems = [];

      $scope.MainService = MainService;
      $scope.usrname = "";
      $scope.outofstock = true;

      $http.get("public/list.json").then(function (response) {
        $scope.shopData = response.data;
      });

      $scope.Range = function (start, end) {
        var result = [];
        for (var i = start; i <= end; i++) {
          result.push(i);
        }
        return result;
      };

      $scope.OpenItemDetails = function (username) {
        $scope.usrname = username;
        $("#myModal").modal("show");
      };

      $scope.selecteditemset = function (items) {
        $scope.MainService.selecteditem = items; //setting up the URL in Service
        // console.log($scope.MainService.selecteditem);
      };

      $scope.AddItemToCart = function (
        ItemName,
        ItemQuantity,
        ItemNetWeight,
        TotalQuantity
      ) {
        var itemdetail = {
          ItemName: "",
          ItemQuantity: "",
          ItemNetWeight: "",
          StockStatus: "",
        };
        itemdetail.ItemName = ItemName;

        itemdetail.ItemQuantity = ItemQuantity;

        itemdetail.ItemNetWeight = ItemNetWeight;

        if (ItemQuantity == TotalQuantity) {
          itemdetail.StockStatus = "Out of Stock";
        } else {
          itemdetail.StockStatus = "Available";
        }

        var i,
          selecteditem = 0;
        for (i = 0; i < Addtocartitems.length; i++) {
          if (Addtocartitems[i].ItemName == ItemName) {
            if (Addtocartitems[i].ItemQuantity != ItemQuantity) {
              Addtocartitems[i].ItemQuantity = ItemQuantity;
            }
            selecteditem = 1;
          }
        }
        if (selecteditem == 0) {
          if (ItemQuantity == null) {
            alert("Please select Quantity...!");
           
          } else {
            Addtocartitems.push(itemdetail);
            
          }
        }

        $scope.MainService.AddToCartItems = Addtocartitems;
      };




      $scope.AddtoWishList = function (
        ItemName,
        ItemQuantity,
        ItemNetWeight,
        TotalQuantity
      ) {
        var itemdetail = {
          ItemName: "",
          ItemQuantity: "",
          ItemNetWeight: "",
          StockStatus: "",
        };
        itemdetail.ItemName = ItemName;

        itemdetail.ItemQuantity = ItemQuantity;

        itemdetail.ItemNetWeight = ItemNetWeight;

        if (ItemQuantity == TotalQuantity) {
          itemdetail.StockStatus = "Out of Stock";
        } else {
          itemdetail.StockStatus = "Available";
        }

        var i,
          selecteditem = 0;
        for (i = 0; i < AddtoWishlistitems.length; i++) {
          if (AddtoWishlistitems[i].ItemName == ItemName) {
            if (AddtoWishlistitems[i].ItemQuantity != ItemQuantity) {
              AddtoWishlistitems[i].ItemQuantity = ItemQuantity;
            }
            selecteditem = 1;
          }
        }
        if (selecteditem == 0) {
          if (ItemQuantity == null) {
            alert("Please select Quantity...!");
           
          } else {
            AddtoWishlistitems.push(itemdetail);
           
            
          }
        }

        $scope.MainService.AddtoWishlistitems = AddtoWishlistitems;
        console.log($scope.MainService.AddtoWishlistitems );
      };


    },
  ]);
