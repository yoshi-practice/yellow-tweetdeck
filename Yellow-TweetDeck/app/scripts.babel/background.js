'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});


 
$('html.dark .other-replies-link, html.dark .other-replies-link:hover').css('color', '#ffff00');
$('html.dark .tweet-stat').css('color', '#ffff00');
$('html.dark .stat-word').css('color', '#ffff00');
$('html.dark .chirp-container .stream-item:not(:hover):not(.is-selected-tweet) .dm-action, html.dark .chirp-container .stream-item:not(:hover):not(.is-selected-tweet) .tweet-action, html.dark .chirp-container .stream-item:not(:hover):not(.is-selected-tweet) .tweet-detail-action').css('color', '#ffff00');
$('html.dark a').css('color', '#ffff00');  
$('html.dark .column-header-link').css('color', '#ffff00');
$('html.dark .is-new .column-type-icon').css('color','#ffff00');
$('html.dark .column-header .column-type-icon').css('color', '#ffff00');
$('html.dark .Button.btn-fav.s-favorited, html.dark .Button.btn-fav.s-favorited:visited, html.dark .Button.Button--primary, html.dark .Button.Button--primary:visited, html.dark .ButtonGroup--primary>.Button, html.dark .ButtonGroup--primary>.Button:visited, html.dark .ButtonGroup--primary>.ButtonGroup>.Button, html.dark .ButtonGroup--primary>.ButtonGroup>.Button:visited, html.dark .ButtonGroup--primary>.ButtonGroup>button, html.dark .ButtonGroup--primary>.ButtonGroup>button:visited, html.dark .ButtonGroup--primary>.ButtonGroup>input[type=button], html.dark .ButtonGroup--primary>.ButtonGroup>input[type=button]:visited, html.dark .ButtonGroup--primary>button, html.dark .ButtonGroup--primary>button:visited, html.dark .ButtonGroup--primary>input[type=button], html.dark .ButtonGroup--primary>input[type=button]:visited, html.dark .s-following .follow-btn:hover .Button.following-text, html.dark .s-following .follow-btn:hover .Button.following-text:visited, html.dark .s-following .follow-btn:hover button.following-text, html.dark .s-following .follow-btn:hover button.following-text:visited, html.dark .s-following .follow-btn:hover input[type=button].following-text, html.dark .s-following .follow-btn:hover input[type=button].following-text:visited, html.dark button.btn-fav.s-favorited, html.dark button.btn-fav.s-favorited:visited, html.dark button.Button--primary, html.dark button.Button--primary:visited, html.dark input.Button--primary[type=button], html.dark input.Button--primary[type=button]:visited, html.dark input[type=button].btn-fav.s-favorited, html.dark input[type=button].btn-fav.s-favorited:visited').css({'background-color': 'yellow', 'border': 'yellow,color: black'});
$('html.dark .app-search-fake').css({'color': 'yellow','border': '1px solid yellow'});
$('html.dark .app-nav-link').css('color', '#ffff00');
$('html.dark .app-nav-tab').css('color', '#ffff00');
$('a').css('color', '#ffff00');
$('html.dark .txt-link:hover').css('color', '#ffff00');


console.log('\'Allo \'Allo! Event Page');
