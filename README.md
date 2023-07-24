# React table

A simple, customizable and easy to use table build with React

![Static Badge](https://img.shields.io/badge/react-white?style=for-the-badge&logo=react&logoColor=61DAFB&color=181717)


## Features

- Display has much column and rows as you want
- Sort data
- Pagination
- Search bar
- Select page length

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install react-table-mc
    $ yarn add react-table-mc

### Usage

The component needs two props: 

|   Props                       |  Types                            | Required             | Default        | Description                               |
|   --------------------------  |  -------------------------------  | --------------------:| -------------: | -----------------------------------------:|
| intialData                     |  Array                   | ✅                   |                | An array of object, each object will be a row and its values will be columns |
| columns                         | Array []        |                      |                |An array of object corresponding with the value in initial data |

```jsx
import { Table } from "react-table-mc"
import "react-table-mc/dist/style.css"

function App() {

  return (
    <div className="App">
      <Table initialData={data} columns={[
                { title: "First Name", data: "firstName" },
                { title: "Last Name", data: "lastName" },
                { title: "Start Date", data: "startDate" },
                { title: "Department", data: "department" },
                { title: "Date of Birth", data: "dateOfBirth" },
                { title: "Street", data: "street" },
                { title: "City", data: "city" },
                { title: "State", data: "state" },
                { title: "Zip Code", data: "zipCode" }
            ]} />
    </div>
  )
}

export default App

```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-maxencecalifano.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxence-califano/)


