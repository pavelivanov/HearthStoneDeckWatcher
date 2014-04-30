HSApp.directive('retina', function () {
	return {
		restrict: 'AE',
		link: function ($scope, $element, $attrs) {

			if (window.matchMedia && window.matchMedia(
				'(min--moz-device-pixel-ratio: 1.3),' +
				'(-o-min-device-pixel-ratio: 2.6/2),' +
				'(-webkit-min-device-pixel-ratio: 1.3),' +
				'(min-device-pixel-ratio: 1.3),' +
				'(min-resolution: 1.3dppx)'
			).matches) {
				$element.removeClass('no-retina').addClass('retina');
			}

		}
	};
});
