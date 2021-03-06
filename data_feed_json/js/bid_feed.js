/**
 * Handling JSON response for Data Grid
 *
 * @features:
 *	Object Oriented Approach,
 *	Used MVC Pattern
 *
 * @author: Venkatesan Mahendran
 *
 */


// Model :: the JSON data
var GridModel = function () {
    var model = {};

    var setData = function (data) {
        model = data;
    }

    var getData = function () {
        return model;
    }

    return {
        setModel: setData,
        getModel: getData
    };

};


// View :: For data grid in the table format
var GridView = function () {

    var container = document.getElementById('data_grid'),
        feedHeads = ['name', 'code', 'value', 'bid', 'offer'];

    var setGrid = function () {

        var gridTitles = ['Name', 'Code', 'Value', 'Bid', 'Offer'],
            grid = document.createElement('table'),
            gridHead = document.createElement('thead'),
            gridBody = document.createElement('tbody'),
            gridHeadRow = document.createElement('tr'),
            len = gridTitles.length;

        for (var i = 0; i < len; i++) {
            var gridHeadCell = document.createElement('th');
            gridHeadCell.innerHTML = gridTitles[i];
            gridHeadRow.appendChild(gridHeadCell);
        }

        gridHead.appendChild(gridHeadRow);
        grid.appendChild(gridHead);
        grid.appendChild(gridBody);
        container.appendChild(grid);

    };

    var getFeedHeads = function () {
        return feedHeads;
    };

    var getGrid = function () {
        return ($.browser.msie) ? container.childNodes[0].childNodes[1] : container.childNodes[1].childNodes[1];
    };

    var createRow = function (feeds) {
        var feedRow = document.createElement('tr');

        for (var i = 0; i < 5; i++) {
            var feedCell = document.createElement('td');

            feedCell.innerHTML = feeds[feedHeads[i]] || '-';
            feedRow.appendChild(feedCell);
        }

        return feedRow;
    };

    return {
        getGrid: getGrid,
        setGrid: setGrid,
        createFeed: createRow,
        getFeedHeads: getFeedHeads
    };

};


// Controller :: Takes care of presentational logics
GridController = {

    initialFeed: {},

    currentFeed: {},

    _init: function (model, view) {
        view.setGrid();
        this.loadJSON("json/bid-init.json", this.createGrid);
    },

    loadJSON: function (jsonFile, callback) {

        var that = this;
        callback = callback || this.updateGrid;

        $.getJSON(jsonFile, function (data) {
            if (typeof data === 'object') {
                model.setModel(data);
                callback(that);
            }
        });

    },

    createGrid: function (obj) {

        var parentEle = view.getGrid();

        obj.initialFeed = model.getModel();

        var rowLength = obj.initialFeed.length;

        for (var i = 0; i < rowLength; i++) {
            var row = view.createFeed(obj.initialFeed[i]);
            parentEle.appendChild(row);
            if (i % 2 !== 0) {
                row.style.backgroundColor = "#efefef";
            }
        }

    },

    updateGrid: function (obj) {

        var gridHeads = view.getFeedHeads(),
            dataGrid = document.getElementById("data_grid"),
            parentEle = view.getGrid();

        obj.currentFeed = model.getModel();

        var rowLength = obj.currentFeed.length;

        for (var i = 0; i < rowLength; i++) {
            for (var j = 0; j < 5; j++) {
                if (obj.initialFeed[i][gridHeads[j]] !== obj.currentFeed[i][gridHeads[j]]) {

                    if (obj.initialFeed[i][gridHeads[j]] < obj.currentFeed[i][gridHeads[j]]) {
                        parentEle.rows[i].cells[j].style.color = "#0f0";
                    }
                    else {
                        parentEle.rows[i].cells[j].style.color = "#f00";
                    }
                    parentEle.rows[i].cells[j].innerHTML = obj.currentFeed[i][gridHeads[j]];
                    obj.initialFeed[i][gridHeads[j]] = obj.currentFeed[i][gridHeads[j]];

                }
            }
        }
    }
};

var model = new GridModel();
var view = new GridView();

GridController._init(model, view);

// JSON feeds, Should be replaced by setInterval in the real time application
setTimeout(function () {
    GridController.loadJSON("json/bid-one.json");

    setTimeout(function () {
        GridController.loadJSON("json/bid-two.json");
    }, 3000);

}, 3000);
