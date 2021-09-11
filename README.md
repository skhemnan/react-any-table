# React Any Table
## Customizable Table component for React! 
### Takes in an array of objects (each object equal in length) and converts it to a table with the option of pagination.

#### Install
```npm i -s react-any-table```

#### Usage
Being customizable, the table will accept a number of props to change the look and function of your table

| Prop | Type | Description | Default |
| ---- | ---- | -----------------------------| --------|
| data | array of objects | (Required) Array of objects with each object being of equal length and depth. Every object must also have the same keys which will act as headers for the table.
| headerColor | string (color) | The color of the header for the table | white 
| headerBorderColor | string (color) | border color of the header of the table | #454545
| headerBorderWidth | number | border width of the table header | 1px
| headerTextColor | string (color) | text color for the header | #454545
| headerFontSize | number | font size of the text in the header | 12px
| rowColor | string (color) | background color of the table's rows | white
| rowBorderColor | string (color) | border color of the table's rows | #D9D9D9
| rowBorderWidth | number | border width of the table's rows | 1px
| rowTextColor | string (color) | text color of the table's row items| #454545
| rowFontSize | number | font size of each item in the table's rows | 12px
| maxViewableWidth | number | maximum number of pixels for the viewable width of the table (overflow will be scrollable) | 700px
| maxViewableHeight | number | maximum number of pixels for the viewable height of the table (overflow will be scrollable) | 530px
| maxRows | number | maximum number of rows available in each page of the table (if default, then pagination will not be displayed and table's data will be scrollable) | 0
| activePageColor | string (color) | (for pagination) text color of the active page in the table | #454545
| inactivePageColor | string (color) | (for pagination) text color of the inactive page in the table | #D9D9D9
| arrowLeftColor | string (color) | (for pagination) color of the left arrow (if not disabled) in the pagination row | #1890FF
| arrowRightColor | string (color) | (for pagination) color of the right arrow (if not disabled) in the pagination row | #1890FF

##### Example
```
import React from 'react'
import Table from './Table'

const App = () => {
  return (
		<div style={{paddingTop: 20, paddingLeft: 20}}>
      <Table
       data={[
          {
            id: 1,
            item: 'eggs',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 2,
            item: 'milk',
            price: "$1.99",
            available: 'yes'
          },
          {
            id: 3,
            item: 'bread',
            price: "$3.99",
            available: 'no'
          },
          {
            id: 4,
            item: 'cheese',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 5,
            item: 'chicken',
            price: "$6.99",
            available: 'no'
          },
          {
            id: 6,
            item: 'eggs',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 7,
            item: 'milk',
            price: "$1.99",
            available: 'yes'
          },
          {
            id: 8,
            item: 'bread',
            price: "$3.99",
            available: 'no'
          },
          {
            id: 9,
            item: 'cheese',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 10,
            item: 'chicken',
            price: "$6.99",
            available: 'no'
          },
          {
            id: 11,
            item: 'eggs',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 12,
            item: 'milk',
            price: "$1.99",
            available: 'yes'
          },
          {
            id: 14,
            item: 'bread',
            price: "$3.99",
            available: 'no'
          },
          {
            id: 15,
            item: 'cheese',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 16,
            item: 'chicken',
            price: "$6.99",
            available: 'no'
          },
          {
            id: 17,
            item: 'eggs',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 18,
            item: 'milk',
            price: "$1.99",
            available: 'yes'
          },
          {
            id: 19,
            item: 'bread',
            price: "$3.99",
            available: 'no'
          },
          {
            id: 20,
            item: 'cheese',
            price: "$2.99",
            available: 'yes'
          },
          {
            id: 21,
            item: 'chicken',
            price: "$6.99",
            available: 'no'
          }          
        ]}
      />
		</div>  );
}

export default App;
```