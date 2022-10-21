import React__default, { createElement, useEffect } from 'react';

var styles = {"test":"_3ybTi","dataTable":"_3_teI","sorting":"_24yNV","sorting_asc":"_1JxTK","sorting_desc":"_SUgTL","sorting_asc_disabled":"_1sQfU","sorting_desc_disabled":"_iq9d5","selected":"_2tiFr","row-border":"_25aF6","display":"_3a60R","cell-border":"_16fgh","stripe":"_1GEBC","odd":"_10sp8","hover":"_5QDK5","order-column":"_S_u54","sorting_1":"_2y_i1","sorting_2":"_148-P","sorting_3":"_2tXom","even":"_DN2qA","no_footer":"_dB5Hv","nowrap":"_lwCWx","compact":"_3kodE","dt-left":"_lqssn","dt-center":"_1onXM","dataTables_empty":"_XEqpC","dt-right":"_2uoE7","dt-justify":"_LgYfs","dt-nowrap":"_2Gf6m","dt-head-left":"_msVhI","dt-head-center":"_jpYp8","dt-head-right":"_LQEbg","dt-head-justify":"_3R0iG","dt-head-nowrap":"_2JuXR","dt-body-left":"_3yz2U","dt-body-center":"_3E-Z_","dt-body-right":"_TeP6d","dt-body-justify":"_1tD05","dt-body-nowrap":"_3xP9V","dataTables_wrapper":"_PD2wK","dataTables_length":"_tBJuG","dataTables_filter":"_1tIgY","dataTables_info":"_12-uV","dataTables_paginate":"_1TFr1","paginate_button":"_1ZThX","current":"_35Ago","disabled":"_2RWmX","ellipsis":"_1_lRW","dataTables_processing":"_2ZH3h","dataTables_scroll":"_PC5x3","dataTables_scrollBody":"_2m-qW","dataTables_sizing":"_14K42","dataTables_scrollHead":"_36ASM"};

function Previous(props) {
  var page = props.page,
    name = props.name,
    setPage = props.setPage;
  var handlePrev = function handlePrev(e) {
    e.preventDefault();
    if (page > 0) setPage(page - 1);
  };
  return /*#__PURE__*/createElement("button", {
    className: styles.paginate_button + ' ' + styles.previous + ' ' + (page === 0 ? styles.disabled : ' '),
    "aria-controls": name,
    "data-dt-idx": "0",
    tabIndex: "-1",
    id: name + '_previous',
    onClick: function onClick(e) {
      return handlePrev(e);
    }
  }, "Previous");
}

function Next(props) {
  var page = props.page,
    name = props.name,
    setPage = props.setPage,
    nbPages = props.nbPages;
  var handleNext = function handleNext(e) {
    e.preventDefault();
    if (page + 1 < nbPages) setPage(page + 1);
  };
  return /*#__PURE__*/createElement("button", {
    className: styles.paginate_button + ' ' + styles.next + ' ' + (page + 1 === nbPages ? styles.disabled : ''),
    "aria-controls": name,
    "data-dt-idx": "6",
    tabIndex: "0",
    id: name + '_next',
    onClick: function onClick(e) {
      return handleNext(e);
    }
  }, "Next");
}

function ButtonPage(props) {
  var handlePageChoice = function handlePageChoice(e, index) {
    e.preventDefault();
    if (index !== page) setPage(index);
  };
  var name = props.name,
    index = props.index,
    page = props.page,
    setPage = props.setPage;
  return /*#__PURE__*/createElement("button", {
    key: 'page_' + index,
    className: styles.paginate_button + ' ' + (page === index ? styles.current : ''),
    "aria-controls": name,
    "data-dt-idx": index + 1,
    tabIndex: "0",
    onClick: function onClick(e) {
      return handlePageChoice(e, index);
    }
  }, index + 1);
}

function Paging(props) {
  var name = props.name,
    nbPages = props.nbPages,
    page = props.page,
    setPage = props.setPage;
  useEffect(function () {}, [page, nbPages]);
  return /*#__PURE__*/createElement("div", {
    className: styles.dataTables_paginate + ' ' + styles.paging_simple_numbers,
    id: name + '_paginate'
  }, /*#__PURE__*/createElement(Previous, {
    page: page,
    name: name,
    setPage: setPage
  }), /*#__PURE__*/createElement("span", null, nbPages < 7 ? Array.from(Array(nbPages), function (el, index) {
    return /*#__PURE__*/createElement(ButtonPage, {
      key: index,
      name: name,
      index: index,
      page: page,
      setPage: setPage
    });
  }) : /*#__PURE__*/createElement("span", null, /*#__PURE__*/createElement(ButtonPage, {
    key: 0,
    name: name,
    index: 0,
    page: page,
    setPage: setPage
  }), page < 4 ? /*#__PURE__*/createElement(ButtonPage, {
    key: 1,
    name: name,
    index: 1,
    page: page,
    setPage: setPage
  }) : /*#__PURE__*/createElement("span", {
    className: styles.paginate + ' ' + styles.ellipsis
  }, "..."), Array.from(Array.from({
    length: 3
  }, function (x, i) {
    return i + Math.max(Math.min(page, nbPages - 4), 3) - 1;
  }), function (el, index) {
    return /*#__PURE__*/createElement(ButtonPage, {
      key: el,
      name: name,
      index: el,
      page: page,
      setPage: setPage
    });
  }), page > nbPages - 4 ? /*#__PURE__*/createElement(ButtonPage, {
    key: nbPages - 2,
    name: name,
    index: nbPages - 2,
    page: page,
    setPage: setPage
  }) : /*#__PURE__*/createElement("span", {
    className: styles.paginate + ' ' + styles.ellipsis
  }, "..."), /*#__PURE__*/createElement(ButtonPage, {
    key: nbPages - 1,
    name: name,
    index: nbPages - 1,
    page: page,
    setPage: setPage
  }))), /*#__PURE__*/createElement(Next, {
    page: page,
    name: name,
    setPage: setPage,
    nbPages: nbPages
  }));
}

var DataTable = function DataTable(props) {
  var columns = props.columns,
    dataList = props.dataList,
    name = props.name,
    rowsPerPage = props.rowsPerPage,
    rowsPossibleUserChoice = props.rowsPossibleUserChoice;
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
  var _React$useState5 = React__default.useState(rowsPerPage),
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
  };

  function getNbPages(length, localPageSize) {
    return ~~(length / localPageSize) + (length % localPageSize ? 1 : 0);
  }
  var getIndexes = React__default.useCallback(function (length, localPageSize) {
    var localNbPages = getNbPages(length, localPageSize);
    var currentPage = page >= localNbPages ? 0 : page;
    var localStartIndex = currentPage * localPageSize;
    var localEndIndex = Math.min(parseInt(localStartIndex) + parseInt(localPageSize), length);
    setPage(currentPage);
    setStartIndex(localStartIndex);
    setEndIndex(localEndIndex);
    setNbPages(localNbPages);
  }, [page]);
  React__default.useEffect(function () {
    getIndexes(viewList.length, pageSize);
  }, [sortChoice, viewList, viewList.length, columns, page, startIndex, endIndex, nbPages, pageSize, getIndexes]);
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
  }, rowsPossibleUserChoice.map(function (num, ind) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: ind,
      value: num
    }, num, ' ');
  })), "entries")), /*#__PURE__*/React__default.createElement("div", {
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

export { DataTable };
//# sourceMappingURL=index.modern.js.map
