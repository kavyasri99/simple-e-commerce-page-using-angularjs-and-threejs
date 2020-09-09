
angular.module('item',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/item',{
        templateUrl: 'public/ItemView/itemview.html',
        Controller: 'ItemVeiwCtrl'
    })
}])

.controller('ItemVeiwCtrl', ['$scope','MainService',function($scope,MainService){

  $scope.MainService=MainService;
$scope.name = $scope.MainService.selecteditem;

//MainService.
}])


.directive('nxGeometry', function () {
    return {

        restrict: 'A',
        scope:{
            internalCount: '@'
        },
        link: function ($scope, element, attrs) {
            let scene, camera, renderer, controls, light, model, hemiLight, SpotLight;

            function init() {
      
                // var innerWidth=800;
                //  var innerHeight=630;
              scene = new THREE.Scene();
              scene.background = new THREE.Color(0xdddddd);
            
                
              camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,5000);
              camera.position.set(0,25,25);
              camera.lookAt(0,0,0);
              controls = new THREE.OrbitControls(camera);
      
             // scene.add( new THREE.AxisHelper(500));
      
              light = new THREE.SpotLight(0xffa95c,4);
              light.position.set(-50,50,50);
              light.castShadow = true;
              light.shadow.bias = -0.0001;
              light.shadow.mapSize.width = 1024*4;
              light.shadow.mapSize.height = 1024*4;
              scene.add( light );
      
              hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
              scene.add(hemiLight);
      
              renderer = new THREE.WebGLRenderer();
              renderer.toneMapping = THREE.ReinhardToneMapping;
              renderer.toneMappingExposure = 2.3;
              renderer.setSize(window.innerWidth,window.innerHeight);
              
              renderer.shadowMap.enabled = true;
              document.body.appendChild(renderer.domElement);
      
      
      
              new THREE.GLTFLoader().load($scope.internalCount, result => { 
                model = result.scene.children[0]; 
                model.scale.set(100,100,100);
                
                model.traverse(n => { if ( n.isMesh ) {
                  n.castShadow = true; 
                  n.receiveShadow = true;
                  if(n.material.map) n.material.map.anisotropy = 1; 
                }});
                
                scene.add(model);
                
      
                animate();
              });
              

            }
            function animate() {
              renderer.render(scene,camera);
              light.position.set( 
                camera.position.x + 10,
                camera.position.y + 10,
                camera.position.z + 10,
              );
              requestAnimationFrame(animate);
            }
            init();
      
        }
    }
});
