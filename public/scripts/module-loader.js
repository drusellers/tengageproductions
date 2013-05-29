jQuery(function ($) {
    $("[data-module]").each(function () {
        var $this = $(this),
        self = this,
        module = $this.data("module")+'/index';

        require({
            baseUrl: "/scripts/modules"
        },
        [module],
        function (module) {
            if (!module.init) { return; }

            //jsonify the data
            params = $this.data("params");
            module.init.call(self, params);
        });


    });
});
