function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"test":"_3ybTi","dataTable":"_3_teI","sorting":"_24yNV","sorting_asc":"_1JxTK","sorting_desc":"_SUgTL","sorting_asc_disabled":"_1sQfU","sorting_desc_disabled":"_iq9d5","selected":"_2tiFr","row-border":"_25aF6","display":"_3a60R","cell-border":"_16fgh","stripe":"_1GEBC","odd":"_10sp8","hover":"_5QDK5","order-column":"_S_u54","sorting_1":"_2y_i1","sorting_2":"_148-P","sorting_3":"_2tXom","even":"_DN2qA","no_footer":"_dB5Hv","nowrap":"_lwCWx","compact":"_3kodE","dt-left":"_lqssn","dt-center":"_1onXM","dataTables_empty":"_XEqpC","dt-right":"_2uoE7","dt-justify":"_LgYfs","dt-nowrap":"_2Gf6m","dt-head-left":"_msVhI","dt-head-center":"_jpYp8","dt-head-right":"_LQEbg","dt-head-justify":"_3R0iG","dt-head-nowrap":"_2JuXR","dt-body-left":"_3yz2U","dt-body-center":"_3E-Z_","dt-body-right":"_TeP6d","dt-body-justify":"_1tD05","dt-body-nowrap":"_3xP9V","dataTables_wrapper":"_PD2wK","dataTables_length":"_tBJuG","dataTables_filter":"_1tIgY","dataTables_info":"_12-uV","dataTables_paginate":"_1TFr1","paginate_button":"_1ZThX","current":"_35Ago","disabled":"_2RWmX","ellipsis":"_1_lRW","dataTables_processing":"_2ZH3h","dataTables_scroll":"_PC5x3","dataTables_scrollBody":"_2m-qW","dataTables_sizing":"_14K42","dataTables_scrollHead":"_36ASM"};

function Paging(props) {
  var name = props.name,
    nbPages = props.nbPages,
    page = props.page,
    setPage = props.setPage;
  var handlePageChoice = function handlePageChoice(e, i) {
    e.preventDefault();
    if (i !== page) setPage(i);
  };
  var handleNext = function handleNext(e) {
    e.preventDefault();
    if (page + 1 < nbPages) setPage(page + 1);
  };
  var handlePrev = function handlePrev(e) {
    e.preventDefault();
    if (page > 0) setPage(page - 1);
  };
  React.useEffect(function () {}, [page]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.dataTables_paginate + ' ' + styles.paging_simple_numbers,
    id: name + '_paginate'
  }, /*#__PURE__*/React.createElement("button", {
    className: styles.paginate_button + ' ' + styles.previous + ' ' + (page === 0 ? styles.disabled : ' '),
    "aria-controls": name,
    "data-dt-idx": "0",
    tabIndex: "-1",
    id: name + '_previous',
    onClick: function onClick(e) {
      return handlePrev(e);
    }
  }, "Previous"), /*#__PURE__*/React.createElement("span", null, Array.from(Array(nbPages), function (el, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: 'page_' + i,
      className: styles.paginate_button + ' ' + (page === i ? styles.current : ''),
      "aria-controls": name,
      "data-dt-idx": i + 1,
      tabIndex: "0",
      onClick: function onClick(e) {
        return handlePageChoice(e, i);
      }
    }, i + 1);
  })), /*#__PURE__*/React.createElement("button", {
    className: styles.paginate_button + ' ' + styles.next + ' ' + (page + 1 === nbPages ? styles.disabled : ''),
    "aria-controls": name,
    "data-dt-idx": "6",
    tabIndex: "0",
    id: name + '_next',
    onClick: function onClick(e) {
      return handleNext(e);
    }
  }, "Next"));
}

var DataTable = function DataTable(props) {
  var columns = props.columns,
    dataList = props.dataList,
    name = props.name;
  var listSort = function listSort(column, sortDirection, list) {
    return list.sort(function (a, b) {
      var A = normalizeString(a[columns[column].data]);
      var B = normalizeString(b[columns[column].data]);
      return sortDirection ? A > B ? 1 : -1 : A < B ? 1 : -1;
    });
  };
  var firstSort = function firstSort(l) {
    return listSort(0, true, l);
  };
  var _React$useState = React__default.useState(0),
    columnChoice = _React$useState[0],
    setColumnChoice = _React$useState[1];
  var _React$useState2 = React__default.useState(true),
    sortChoice = _React$useState2[0],
    setSortChoice = _React$useState2[1];
  var _React$useState3 = React__default.useState(firstSort(dataList)),
    viewList = _React$useState3[0],
    setViewList = _React$useState3[1];
  var _React$useState4 = React__default.useState(''),
    searchString = _React$useState4[0],
    setSearchString = _React$useState4[1];
  var _React$useState5 = React__default.useState(10),
    pageSize = _React$useState5[0],
    setPageSize = _React$useState5[1];
  var _React$useState6 = React__default.useState(0),
    page = _React$useState6[0],
    setPage = _React$useState6[1];
  var _React$useState7 = React__default.useState(0),
    startIndex = _React$useState7[0],
    setStartIndex = _React$useState7[1];
  var ee = Math.min(viewList.length, pageSize);
  var _React$useState8 = React__default.useState(ee),
    endIndex = _React$useState8[0],
    setEndIndex = _React$useState8[1];
  var nbp = getNbPages(dataList.length, pageSize);
  var _React$useState9 = React__default.useState(nbp),
    nbPages = _React$useState9[0],
    setNbPages = _React$useState9[1];
  var getSortClass = function getSortClass(index) {
    if (index !== columnChoice) return styles.sorting;
    return sortChoice ? styles.sorting_asc : styles.sorting_desc;
  };
  var listToView = function listToView(index, lsortChoice, toSearch) {
    var list = listSort(index, lsortChoice, dataList.filter(function (row) {
      if (toSearch === '') return true;
      for (var kval = 0; kval < columnsLength; kval++) {
        if (normalizeString(row[columns[kval].data]).includes(toSearch)) {
          return true;
        }
      }
      return false;
    }));
    setViewList(list);
    getIndexes(list.length, pageSize);
  };
  var columnsLength = columns.length;
  var changeSort = function changeSort(e, index) {
    e.preventDefault();
    var lsortChoice = sortChoice;
    if (index === columnChoice) {
      lsortChoice = !sortChoice;
    } else {
      lsortChoice = true;
    }
    setSortChoice(lsortChoice);
    setColumnChoice(index);
    listToView(index, lsortChoice, searchString);
  };
  function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  }
  var handleSearch = function handleSearch(e) {
    e.preventDefault();
    var toSearch = normalizeString(e.target.value);
    setSearchString(toSearch);
    listToView(columnChoice, sortChoice, toSearch);
  };
  var handleSelect = function handleSelect(e) {
    e.preventDefault();
    setPageSize(e.target.value);
    getIndexes(viewList.length, e.target.value);
  };
  function getNbPages(length, localPageSize) {
    return ~~(length / localPageSize) + (length % localPageSize ? 1 : 0);
  }
  var getIndexes = React__default.useCallback(function (length, localPageSize) {
    var localNbPages = getNbPages(length, localPageSize);
    var currentPage = page >= localNbPages ? 0 : page;
    var localStartIndex = currentPage * localPageSize;
    var localEndIndex = Math.min(localStartIndex + localPageSize, length);
    setPage(currentPage);
    setStartIndex(localStartIndex);
    setEndIndex(localEndIndex);
    setNbPages(localNbPages);
  }, [page]);
  React__default.useEffect(function () {
    getIndexes(viewList.length, pageSize);
  }, [sortChoice, viewList, columns, page, startIndex, endIndex, nbPages, pageSize, getIndexes]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.dataTables_wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.dataTables_length,
    id: name + '_length'
  }, /*#__PURE__*/React__default.createElement("label", null, "Show", /*#__PURE__*/React__default.createElement("select", {
    name: name + '_length',
    "aria-controls": name,
    className: "",
    onChange: handleSelect
  }, /*#__PURE__*/React__default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React__default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/React__default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React__default.createElement("option", {
    value: "100"
  }, "100")), "entries")), /*#__PURE__*/React__default.createElement("div", {
    id: name + '_filter',
    className: styles.dataTables_filter
  }, /*#__PURE__*/React__default.createElement("label", null, "Search:", /*#__PURE__*/React__default.createElement("input", {
    type: "search",
    className: "",
    placeholder: "",
    "aria-controls": name,
    onChange: handleSearch
  }))), /*#__PURE__*/React__default.createElement("table", {
    id: name,
    className: styles.display + ' ' + styles.dataTable + ' ' + styles.no_footer,
    role: "grid",
    "aria-describedby": name + '_info'
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", {
    role: "row"
  }, columns.map(function (c, index) {
    return /*#__PURE__*/React__default.createElement("th", {
      key: 'head_' + c.data,
      className: getSortClass(index),
      tabIndex: "0",
      "aria-controls": name,
      rowSpan: "1",
      colSpan: "1",
      "aria-sort": "ascending",
      "aria-label": c.title + ': activate to sort column descending',
      style: {
        width: 'auto'
      },
      onClick: function onClick(e) {
        return changeSort(e, index);
      }
    }, c.title);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, viewList.map(function (emp, index) {
    return index >= startIndex && index < endIndex && /*#__PURE__*/React__default.createElement("tr", {
      key: 'emp_' + index,
      role: "row",
      className: index % 2 ? styles.even : styles.odd
    }, columns.map(function (c, ind) {
      return /*#__PURE__*/React__default.createElement("td", {
        key: c.data + index,
        className: ind === columnChoice ? styles.sorting_1 : ''
      }, emp[c.data]);
    }));
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "dataTables_info",
    id: name + '_info',
    role: "status",
    "aria-live": "polite"
  }, "Showing ", viewList.length ? startIndex + 1 : 0, " to", ' ', Math.min(viewList.length, endIndex), " of ", viewList.length, " entries (filtered from ", dataList.length, " total entries)"), /*#__PURE__*/React__default.createElement(Paging, {
    name: name,
    nbPages: nbPages,
    page: page,
    setPage: setPage
  }));
};

exports.DataTable = DataTable;
//# sourceMappingURL=index.js.map
