# react-datatable-pager-lite

> react Datatable component with pager, sortable columns and a search field filter

[![NPM](https://img.shields.io/npm/v/react-datatable-pager-lite.svg)](https://www.npmjs.com/package/react-datatable-pager-lite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Compatibility

Build with Node version 16.17.0
Compatible with Node version 14.xx.x

## Install

```bash
npm install --save react-datatable-pager-lite
```

## Usage

```jsx

import DataTable from 'react-datatable-pager-lite'
import 'react-datatable-pager-lite/dist/index.css'
const App = () => {
  const columns = {
    { title: 'Col 1', data: 'col1' },
    { title: 'Col 2', data: 'col2' },
  }
  const list = [
    {col1:'dog', col2:'female'},
    {col1:'cat', col2:'male'},
  ]
  return(<>
      <DataTable
        columns={columns}
        dataList={list}
        name='my-table'
      /></>)
}
```

## License

MIT © [drrr-deudeu](https://github.com/drrr-deudeu)
