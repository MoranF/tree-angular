App.controller("TreeController", ['$scope', 'treeSvc', function($scope, treeSvc) {

	console.clear();

	function getTree(text) {
	  $scope.treeObject = {title: null, isRoot: true, children: []};
	  var currentSpaces = 0;
	  var pagesArray = text.split('\n');
	  var currentNode;
	  var spacesCounter = 0;
	  var parentsArray = [$scope.treeObject];
	  var childSpaces = 2;
	  pagesArray.forEach(function(item) {
	    for(var i = 0; i < item.length; i++) {
	      if(item[i] !== ' ') {
	        break;
	      }
	    }
	      
	    if(i === 0) {
	      parentsArray = [$scope.treeObject];
	      spacesCounter = 0;
	    }
	    else if(i > spacesCounter){
	      spacesCounter = i;
	      parentsArray.push(currentNode);
	    }
	    else if(i < spacesCounter) {
	      while(i < spacesCounter) {
	        spacesCounter -= childSpaces;
	        parentsArray.pop();
	      }
	    }
	    
	    currentNode = {title: item.slice(i, item.length), children: []};
	    parentsArray[parentsArray.length - 1].children.push(currentNode);
	  });
	  
	  // console.log(JSON.stringify($scope.treeObject, null, 2));
	}

	getTree(treeSvc.text);
}]);