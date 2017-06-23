App.controller("NodeController", ['$scope', function($scope) {
	var PARENT_CLOSED_EVENT = 'parent-closed';
	$scope.isShowChildren = false;

	$scope.toggleCollapse = function() {
		if($scope.isShowChildren) {
			//Children are shown
			
			//Close all open node children, 
				//so next time the user opens this node, only the direct children are shown
			$scope.$broadcast(PARENT_CLOSED_EVENT);
		} 
		else {
			$scope.isShowChildren = true;
		}
	};

	var parentClosedListener = $scope.$on(PARENT_CLOSED_EVENT, function() {
		//Remove the show-children classes from all node's children
		$scope.isShowChildren = false; 	    
	});

	$scope.$on('$destroy', function() {
		//Remove listener on scope destroy
		parentClosedListener();
	});
}]);