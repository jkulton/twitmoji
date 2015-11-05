// Content Script

    var emoji = "";

    function includeCSSfile(href) {

        var head_node = document.getElementsByTagName('head')[0];
        var link_tag = document.createElement('link');
        link_tag.setAttribute('rel', 'stylesheet');
        link_tag.setAttribute('type', 'text/css');
        link_tag.setAttribute('href', href);
        head_node.appendChild(link_tag);

    }

    chrome.storage.sync.get('favoriteColor', function(result){
        
        emoji = result.favoriteColor;

        if (emoji == undefined || emoji == null || emoji == ""){
            includeCSSfile(chrome.extension.getURL("/emoji/" + "0.css"));
        }

        else{
            includeCSSfile(chrome.extension.getURL("/emoji/" + emoji + ".css"));
        }
        
    });