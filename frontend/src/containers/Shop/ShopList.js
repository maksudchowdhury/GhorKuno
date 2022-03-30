import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Figure, Container } from "react-bootstrap";

import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

export default function ShopHasDrugs(props) {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gk/shop/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setShop(resp))
      .catch((error) => console.log(error));
  }, []);
  const { SearchBar, ClearSearchButton } = Search;

  function headerFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
      <div className="p-2" style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="p-2 rounded-3 text-center text-white text-wrap fs-4 fw-bold "
          style={{
            background: "#FFBD2D",
          }}
        >
          {column.text}
        </div>
        <br />
        {filterElement}
      </div>
    );
  }

  const columns = [
    {
      dataField: "shopName",
      text: "Shop Name",
      headerStyle: () => {
        return {
          backgroundColor: "#dc3545",
          textAlign: "center",
          srText: "",
          color: "#ede8e8",
        };
      },
      formatter: (value) => {
        return (
          <Link to={`/shops/${value}`}>
            <div className="fs-3 text-decoration-underline text-white">
              {value}
            </div>
          </Link>
        );
      },
      sort: true,
      filter: textFilter(),
      headerFormatter: headerFormatter,
    },
    {
      dataField: "detailedAddr",
      text: "Address",
      headerStyle: () => {
        return {
          backgroundColor: "#dc3545",
          textAlign: "center",
          srText: "",
          color: "#ede8e8",
        };
      },

      sort: true,
      filter: textFilter(),
      headerFormatter: headerFormatter,
    },
    {
      dataField: "review",
      text: "Ratting",
      headerStyle: () => {
        return {
          backgroundColor: "#dc3545",
          textAlign: "center",
          srText: "",
          color: "#ede8e8",
        };
      },
      sort: true,
      filter: textFilter(),
      headerFormatter: headerFormatter,
    },
  ];

  const rowStyle = (row, rowIndex) => {
    const style = {};
    if (rowIndex % 2 == 0) {
      style.backgroundColor = "#cb4652";
    } else {
      style.backgroundColor = "#dc3545";
    }
    style.textAlign = "center";
    style.color = "white";
    return style;
  };

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: false,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  const defaultSorted = [
    {
      dataField: "review",
      order: "desc",
    },
  ];

  return (
    <Container fluid className="p-3">
      <ToolkitProvider
        keyField="shopName"
        data={shop.filter((sd) => sd.shopName !== "" && !sd.isBanned)}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Row>
                <Col sm={2} />
                <Col sm>
                  <div
                    className="shadow-lg p-4 rounded-3 text-center text-white text-wrap fs-1 fw-bold "
                    style={{
                      background: "#FFBD2D",
                    }}
                  >
                    Search The Shops
                  </div>
                </Col>
                <Col sm={2} />
              </Row>
              <Row>
                <br />
              </Row>
              <Row>
                <Col sm={1} />
                <Col
                  sm
                  className="shadow-lg p-4 rounded-3 text-center text-white "
                  style={{
                    background: "#dc3545",
                  }}
                >
                  <span>
                    <SearchBar
                      srText=""
                      style={{
                        textAlign: "center",
                        margin: "auto",
                        width: "100%",
                      }}
                      placeholder="Search About Shop"
                      {...props.searchProps}
                    />
                    <span> </span>
                    <ClearSearchButton
                      className="btn btn-secondary btn-sm"
                      style={{
                        width: "100%",
                      }}
                      {...props.searchProps}
                    />
                  </span>
                  <br />
                  <br />
                  <br />

                  <BootstrapTable
                    keyField="shopName"
                    pagination={pagination}
                    filter={filterFactory()}
                    defaultSorted={defaultSorted}
                    bordered={false}
                    rowStyle={rowStyle}
                    {...props.baseProps}
                  />
                </Col>
                <Col sm={1} />
              </Row>
            </Row>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
}
