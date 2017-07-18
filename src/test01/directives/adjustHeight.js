export default adjustHeightDirective;

function adjustHeightDirective($timeout, $log, $document) {
    function link($scope, $element, $attrs) {
        $timeout(setHeight);

        function setHeight() {
            var $children = $element.children();
            var currentMaxHeight = 0;
            angular.forEach($children, function(child) {
                var childHeight = child.children[0].offsetHeight;

                if (childHeight > currentMaxHeight) {
                    currentMaxHeight = childHeight;
                }
            });
            $log.log(currentMaxHeight);
            var t = $document[0].querySelectorAll('.green-btn');
            t.forEach(function() {
                angular.element(t).attr('style', "min-height:" + currentMaxHeight + "px");
            });
        }
        angular.element(window).bind('resize', setHeight);
    }

    return {
        restrict: 'A',
        scope: {},
        link: link
    };
}