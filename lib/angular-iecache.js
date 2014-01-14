App.config(['$httpProvider', function($httpProvider) {
	var isIE = /msie/.test(navigator.userAgent.toLowerCase());

	if (isIE) {
		//initialize get if not there
		if (!$httpProvider.defaults.headers.get) {
			$httpProvider.defaults.headers.get = {};
		}
		//disable IE ajax request caching
		$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
	}
}]);
