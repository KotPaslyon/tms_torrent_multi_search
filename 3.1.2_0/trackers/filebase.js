// ==UserScript==
// @name FileBase
// @trackerURL http://www.filebase.ws
// @icon data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAUAAAAAAAAAAAAAAAEAAAABAABZW1sAWllbAFtcWgBbWlwAXlxbAFtbWwBdWlwAXVtbAFpcXAD///4A3+HhAP7+/gD///8A4+DiAP3//gDi4OAA/f//AODf4QAAMP4AAy7/AAAr4ADe4d8A///8ANzg4QD//v8A3uDgAFlbXAAAMP8AAC7/AAEp4AD7//8A4uDfAFhbWQABMP4AAiveAAAy/gADL/4A//79AOHf3wD6//4A4eHhAAAx/QAAMf8A4OHfAPz+/wDe4OEA4+HhAFpaWgAAKOIAAjD/APz//QAEL/8AASrdAAIv/wDf398AXFxcAAEp3wAAL/8A3t/jAOLf4QAALN4AAjH/AAAq3wAALv4A4ODgAFlcWgAAKuEA//3/AAEx/wDd398AXVleAFhdXAD9/v8AAirgAAAp4ABdW1oA3d7iAFxbXQBYWloAXF1bAFxYXQBbXFgAV1tcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAgMEBQUFAwAGBwgABgIJCQoLDA0MDg8JCQ8MEAUHERITFBAQFQkWFxgMGQwHGhgUGxwdCRgRGB4fGAwPIAcQISIjJBEMDBUlDCYnGAgHKBIpHSoYKxAsLQwJLhgvAhgwMRIdMjM0NQw2DAstNxoJKjgcKhU5GzgSDDoMFgAFOxIqHTkMPD0bPhIMFQwDAwkUPyMdDAwZCRBADAwPQQUWG0IpMR05OSI9OUBDDgIGDRIqPikjHRshPjlERRhGR0hJHCpCPyo+IT1CEjFAAgUJOUkSGxQSMUoSOUIqDktBDwlIDRYJOwwWTBAlQAwaTUEFRwYFAwUFTk9QUVIHBQAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8=
// @description Filebase.ws - скачать фильмы, игры, музыку, программы, бесплатно!
// @downloadURL https://github.com/Feverqwe/tSearch/raw/master/src/trackers/filebase.js
// @connect *://*.filebase.ws/*
// @require exKit
// @version 1.0.2
// ==/UserScript==

API_exKit({
    id: 'filebase',
    title: 'FileBase',
    icon: 'data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAUAAAAAAAAAAAAAAAEAAAABAABZW1sAWllbAFtcWgBbWlwAXlxbAFtbWwBdWlwAXVtbAFpcXAD///4A3+HhAP7+/gD///8A4+DiAP3//gDi4OAA/f//AODf4QAAMP4AAy7/AAAr4ADe4d8A///8ANzg4QD//v8A3uDgAFlbXAAAMP8AAC7/AAEp4AD7//8A4uDfAFhbWQABMP4AAiveAAAy/gADL/4A//79AOHf3wD6//4A4eHhAAAx/QAAMf8A4OHfAPz+/wDe4OEA4+HhAFpaWgAAKOIAAjD/APz//QAEL/8AASrdAAIv/wDf398AXFxcAAEp3wAAL/8A3t/jAOLf4QAALN4AAjH/AAAq3wAALv4A4ODgAFlcWgAAKuEA//3/AAEx/wDd398AXVleAFhdXAD9/v8AAirgAAAp4ABdW1oA3d7iAFxbXQBYWloAXF1bAFxYXQBbXFgAV1tcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAgMEBQUFAwAGBwgABgIJCQoLDA0MDg8JCQ8MEAUHERITFBAQFQkWFxgMGQwHGhgUGxwdCRgRGB4fGAwPIAcQISIjJBEMDBUlDCYnGAgHKBIpHSoYKxAsLQwJLhgvAhgwMRIdMjM0NQw2DAstNxoJKjgcKhU5GzgSDDoMFgAFOxIqHTkMPD0bPhIMFQwDAwkUPyMdDAwZCRBADAwPQQUWG0IpMR05OSI9OUBDDgIGDRIqPikjHRshPjlERRhGR0hJHCpCPyo+IT1CEjFAAgUJOUkSGxQSMUoSOUIqDktBDwlIDRYJOwwWTBAlQAwaTUEFRwYFAwUFTk9QUVIHBQAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8=',
    desc: 'Filebase.ws - скачать фильмы, игры, музыку, программы, бесплатно!',
    flags: {
        auth: 1,
        language: 'ru',
        cyrillic: 1
    },
    categoryList: {
        serials: ['serials'],
        music: ['videoclips', 'eng-music', 'rus-music'],
        games: ['games'],
        films: ['dvd5', 'tv', 'action', 'comedy', 'thriller', 'classic', 'history', 'mystic', 'sci-fi', 'horror', 'drama', 'adventure', 'detective', 'concert', 'epic', 'dvd9', 'fantasy', 'hdtv', 'war', 'family', 'tales', 'catastroph'],
        cartoon: ['cartoons'],
        books: ['books'],
        soft: ['software'],
        anime: ['anime'],
        doc: ['documental'],
        sport: ['sport'],
        xxx: [],
        humor: []
    },
    search: {
        searchUrl: 'http://www.filebase.ws/torrents/search/',
        nextPageSelector: {selector: 'table.def_block p>a:eq(-1)', attr: 'href'},
        baseUrl: 'http://www.filebase.ws',
        requestType: 'GET',
        requestData: 'search=%search%&c=0&t=liveonly',
        listItemSelector: '#torrents_list>tbody>tr',
        listItemSplice: [1, 0],
        torrentSelector: {
            categoryTitle: {selector: 'td:eq(0)>a>img', attr: 'alt'},
            categoryUrl: {selector: 'td:eq(0)>a', attr: 'href'},
            categoryId: {selector: 'td:eq(0)>a', attr: 'href'},
            title: 'td:eq(1)>a',
            url: {selector: 'td:eq(1)>a', attr: 'href'},
            size: 'td:eq(4)',
            seed: 'td:eq(6)',
            peer: 'td:eq(7)',
            date: 'td:eq(3)'
        },
        onGetValue: {
            categoryId: function (details, url) {
                return exKit.funcList.idInCategoryListStr(details.tracker, url, /\/([^\/]+)\/$/);
            },
            size: function (details, value) {
                return exKit.funcList.sizeFormat(value)
            },
            date: function (details, value) {
                return exKit.funcList.dateFormat(1, value)
            }
        }
    }
});