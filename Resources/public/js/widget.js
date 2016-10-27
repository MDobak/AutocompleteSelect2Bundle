jQuery(document).ready(function( $) {
    var $input = $('.mdobak-autocomplete-select2');

    $input.each(function() {
        $input.select2({
            ajax: {
                url: $(this).data('mdobak-autocomplete-api-path'),
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        query: params.term
                    };
                },
                processResults: function (data, params) {
                    var results = [];
                    for (var i in data) {
                        if (data.hasOwnProperty(i)) {
                            results.push({
                                'id':   data[i].key,
                                'text': data[i].label
                            });
                        }
                    }

                    return {
                        results: results
                    }
                },
                cache: true
            },
            minimumInputLength: 1
        });
    });
});