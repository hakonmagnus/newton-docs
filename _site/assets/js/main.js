$(function () {
    function initSearchBox() {
        var pages = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: baseurl + "/search.json"
        });

        $('#search-box').typeahead({
            minLength: 0,
            highlight: true
        }, {
            name: 'pages',
            display: 'title',
            source: pages
        });

        $('#search-box').bind('typeahead:select', function (ev, suggeston) {
            window.location.href = suggestion.url;
        });
    }

    function styleContentToMD() {
        $('#markdown-content-container table').addClass('table');
        $('#markdown-content-container img').addClass('img-responsive');
    }

    initSearchBox();
    styleContentToMD();
});
