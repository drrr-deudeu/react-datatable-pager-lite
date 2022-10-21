import React__default, { createElement, useEffect } from 'react';

var styles = {"test":"_styles-module__test__3ybTi","dataTable":"_styles-module__dataTable__3_teI","sorting":"_styles-module__sorting__24yNV","sorting_asc":"_styles-module__sorting_asc__1JxTK","sorting_desc":"_styles-module__sorting_desc__SUgTL","sorting_asc_disabled":"_styles-module__sorting_asc_disabled__1sQfU","sorting_desc_disabled":"_styles-module__sorting_desc_disabled__iq9d5","selected":"_styles-module__selected__2tiFr","row-border":"_styles-module__row-border__25aF6","display":"_styles-module__display__3a60R","cell-border":"_styles-module__cell-border__16fgh","stripe":"_styles-module__stripe__1GEBC","odd":"_styles-module__odd__10sp8","hover":"_styles-module__hover__5QDK5","order-column":"_styles-module__order-column__S_u54","sorting_1":"_styles-module__sorting_1__2y_i1","sorting_2":"_styles-module__sorting_2__148-P","sorting_3":"_styles-module__sorting_3__2tXom","even":"_styles-module__even__DN2qA","no_footer":"_styles-module__no_footer__dB5Hv","nowrap":"_styles-module__nowrap__lwCWx","compact":"_styles-module__compact__3kodE","dt-left":"_styles-module__dt-left__lqssn","dt-center":"_styles-module__dt-center__1onXM","dataTables_empty":"_styles-module__dataTables_empty__XEqpC","dt-right":"_styles-module__dt-right__2uoE7","dt-justify":"_styles-module__dt-justify__LgYfs","dt-nowrap":"_styles-module__dt-nowrap__2Gf6m","dt-head-left":"_styles-module__dt-head-left__msVhI","dt-head-center":"_styles-module__dt-head-center__jpYp8","dt-head-right":"_styles-module__dt-head-right__LQEbg","dt-head-justify":"_styles-module__dt-head-justify__3R0iG","dt-head-nowrap":"_styles-module__dt-head-nowrap__2JuXR","dt-body-left":"_styles-module__dt-body-left__3yz2U","dt-body-center":"_styles-module__dt-body-center__3E-Z_","dt-body-right":"_styles-module__dt-body-right__TeP6d","dt-body-justify":"_styles-module__dt-body-justify__1tD05","dt-body-nowrap":"_styles-module__dt-body-nowrap__3xP9V","dataTables_wrapper":"_styles-module__dataTables_wrapper__PD2wK","dataTables_length":"_styles-module__dataTables_length__tBJuG","dataTables_filter":"_styles-module__dataTables_filter__1tIgY","dataTables_info":"_styles-module__dataTables_info__12-uV","dataTables_paginate":"_styles-module__dataTables_paginate__1TFr1","paginate_button":"_styles-module__paginate_button__1ZThX","current":"_styles-module__current__35Ago","disabled":"_styles-module__disabled__2RWmX","ellipsis":"_styles-module__ellipsis__1_lRW","dataTables_processing":"_styles-module__dataTables_processing__2ZH3h","dataTables_scroll":"_styles-module__dataTables_scroll__PC5x3","dataTables_scrollBody":"_styles-module__dataTables_scrollBody__2m-qW","dataTables_sizing":"_styles-module__dataTables_sizing__14K42","dataTables_scrollHead":"_styles-module__dataTables_scrollHead__36ASM"};

function Previous(props) {
  const {
    page,
    name,
    setPage
  } = props;
  const handlePrev = e => {
    e.preventDefault();
    if (page > 0) setPage(page - 1);
  };
  return /*#__PURE__*/createElement("button", {
    className: styles.paginate_button + ' ' + styles.previous + ' ' + (page === 0 ? styles.disabled : ' '),
    "aria-controls": name,
    "data-dt-idx": "0",
    tabIndex: "-1",
    id: name + '_previous',
    onClick: e => handlePrev(e)
  }, "Previous");
}

function Next(props) {
  const {
    page,
    name,
    setPage,
    nbPages
  } = props;
  const handleNext = e => {
    e.preventDefault();
    if (page + 1 < nbPages) setPage(page + 1);
  };
  return /*#__PURE__*/createElement("button", {
    className: styles.paginate_button + ' ' + styles.next + ' ' + (page + 1 === nbPages ? styles.disabled : ''),
    "aria-controls": name,
    "data-dt-idx": "6",
    tabIndex: "0",
    id: name + '_next',
    onClick: e => handleNext(e)
  }, "Next");
}

function ButtonPage(props) {
  const handlePageChoice = (e, index) => {
    e.preventDefault();
    if (index !== page) setPage(index);
  };
  const {
    name,
    index,
    page,
    setPage
  } = props;
  return /*#__PURE__*/createElement("button", {
    key: 'page_' + index,
    className: styles.paginate_button + ' ' + (page === index ? styles.current : ''),
    "aria-controls": name,
    "data-dt-idx": index + 1,
    tabIndex: "0",
    onClick: e => handlePageChoice(e, index)
  }, index + 1);
}

function Paging(props) {
  const {
    name,
    nbPages,
    page,
    setPage
  } = props;
  useEffect(() => {}, [page, nbPages]);
  return /*#__PURE__*/createElement("div", {
    className: styles.dataTables_paginate + ' ' + styles.paging_simple_numbers,
    id: name + '_paginate'
  }, /*#__PURE__*/createElement(Previous, {
    page: page,
    name: name,
    setPage: setPage
  }), /*#__PURE__*/createElement("span", null, nbPages < 7 ? Array.from(Array(nbPages), (el, index) => /*#__PURE__*/createElement(ButtonPage, {
    key: index,
    name: name,
    index: index,
    page: page,
    setPage: setPage
  })) : /*#__PURE__*/createElement("span", null, /*#__PURE__*/createElement(ButtonPage, {
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
  }, (x, i) => i + Math.max(Math.min(page, nbPages - 4), 3) - 1), (el, index) => /*#__PURE__*/createElement(ButtonPage, {
    key: el,
    name: name,
    index: el,
    page: page,
    setPage: setPage
  })), page > nbPages - 4 ? /*#__PURE__*/createElement(ButtonPage, {
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

const DataTable = props => {
  const {
    columns,
    dataList,
    name,
    rowsPerPage,
    rowsPossibleUserChoice
  } = props;
  const listSort = (column, sortDirection, list) => {
    return list.sort((a, b) => {
      const A = normalizeString(a[columns[column].data]);
      const B = normalizeString(b[columns[column].data]);
      return sortDirection ? A > B ? 1 : -1 : A < B ? 1 : -1;
    });
  };
  const firstSort = l => {
    return listSort(0, true, l);
  };
  const [columnChoice, setColumnChoice] = React__default.useState(0);
  const [sortChoice, setSortChoice] = React__default.useState(true);
  const [viewList, setViewList] = React__default.useState(firstSort(dataList));
  const [searchString, setSearchString] = React__default.useState('');
  const [pageSize, setPageSize] = React__default.useState(rowsPerPage);
  const [page, setPage] = React__default.useState(0);
  const [startIndex, setStartIndex] = React__default.useState(0);
  const ee = Math.min(viewList.length, pageSize);
  const [endIndex, setEndIndex] = React__default.useState(ee);
  const nbp = getNbPages(dataList.length, pageSize);
  const [nbPages, setNbPages] = React__default.useState(nbp);
  const getSortClass = index => {
    if (index !== columnChoice) return styles.sorting;
    return sortChoice ? styles.sorting_asc : styles.sorting_desc;
  };
  const listToView = (index, lsortChoice, toSearch) => {
    const list = listSort(index, lsortChoice, dataList.filter(row => {
      if (toSearch === '') return true;
      for (let kval = 0; kval < columnsLength; kval++) {
        if (normalizeString(row[columns[kval].data]).includes(toSearch)) {
          return true;
        }
      }
      return false;
    }));
    setViewList(list);
  };

  const columnsLength = columns.length;
  const changeSort = (e, index) => {
    e.preventDefault();
    let lsortChoice = sortChoice;
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
  const handleSearch = e => {
    e.preventDefault();
    const toSearch = normalizeString(e.target.value);
    setSearchString(toSearch);
    listToView(columnChoice, sortChoice, toSearch);
  };
  const handleSelect = e => {
    e.preventDefault();
    setPageSize(e.target.value);
  };

  function getNbPages(length, localPageSize) {
    return ~~(length / localPageSize) + (length % localPageSize ? 1 : 0);
  }
  const getIndexes = React__default.useCallback((length, localPageSize) => {
    const localNbPages = getNbPages(length, localPageSize);
    const currentPage = page >= localNbPages ? 0 : page;
    const localStartIndex = currentPage * localPageSize;
    const localEndIndex = Math.min(parseInt(localStartIndex) + parseInt(localPageSize), length);
    setPage(currentPage);
    setStartIndex(localStartIndex);
    setEndIndex(localEndIndex);
    setNbPages(localNbPages);
  }, [page]);
  React__default.useEffect(() => {
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
  }, rowsPossibleUserChoice.map((num, ind) => /*#__PURE__*/React__default.createElement("option", {
    key: ind,
    value: num
  }, num, ' '))), "entries")), /*#__PURE__*/React__default.createElement("div", {
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
  }, columns.map((c, index) => /*#__PURE__*/React__default.createElement("th", {
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
    onClick: e => changeSort(e, index)
  }, c.title)))), /*#__PURE__*/React__default.createElement("tbody", null, viewList.map((emp, index) => index >= startIndex && index < endIndex && /*#__PURE__*/React__default.createElement("tr", {
    key: 'emp_' + index,
    role: "row",
    className: index % 2 ? styles.even : styles.odd
  }, columns.map((c, ind) => {
    return /*#__PURE__*/React__default.createElement("td", {
      key: c.data + index,
      className: ind === columnChoice ? styles.sorting_1 : ''
    }, emp[c.data]);
  }))))), /*#__PURE__*/React__default.createElement("div", {
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
