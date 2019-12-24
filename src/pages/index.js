import React, { Component } from "react";
import AppHeader from "../components/navigation/header/header";
import "../styles/table.css";

export default class index extends Component {
  state = {
    users: [],
    totalusers: null,
    sortBy: 5,
    minsortby: 0,
    maxsortby: 5,
    totalpagi: null,
    pagination: [],
    activePagi: 1,
    startDate: null,
    EndDate: null,
    filteredUsers: []
  };
  componentDidMount() {
    // Generate random data
    let name = [
      "Leanne Graham",
      "Ervin Howell",
      "Clementine Bauch",
      "Patricia Lebsack",
      "Chelsey Dietrich",
      "Mrs. Dennis Schulist",
      "Kurtis Weissnat",
      "Nicholas Runolfsdottir",
      "Glenna Reichert",
      "Clementina DuBuque"
    ];

    let email = [
      "Sincere@april.biz",
      "Shanna@melissa.tv",
      "Nathan@yesenia.net",
      "Julianne.OConner@kory.org",
      "Lucio_Hettinger@annie.ca",
      "Karley_Dach@jasper.info",
      "Telly.Hoeger@billy.biz",
      "Sherwood@rosamond.me",
      "Chaim_McDermott@dana.io",
      "Rey.Padberg@karina.biz"
    ];

    let company = [
      "Romaguera-Crona	",
      "Deckow-Crist",
      "Romaguera-Jacobson",
      "Robel-Corkery",
      "Keebler LLC",
      "Considine-Lockman",
      "Johns Group",
      "Abernathy Group",
      "Yost and Sons",
      "Hoeger LLC"
    ];

    let phone = [
      "1770736803142",
      "14631234447	",
      "010692659309125	",
      "493170623156	",
      "2549541289	",
      "147793584786430	",
      "2100676132",
      "5864936943140	",
      "775976679441206	",
      "0266483804	"
    ];

    let cities = [
      "Chicago",
      "Tampico",
      "San Francisco",
      "Mexico City",
      "Boston",
      "New York",
      "Roscoeview",
      "South Christ",
      "Howemouth",
      "Aliyaview"
    ];

    let date = [
      "18/03/2018",
      "14/04/2017",
      "29/05/2016",
      "23/06/2015",
      "12/07/2014",
      "13/08/2013",
      "01/09/2012",
      "05/10/2011",
      "08/11/2019",
      "11/12/2019"
    ];

    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({
        id: i,
        name: name[~~(Math.random() * name.length)],
        email: email[~~(Math.random() * email.length)],
        company: company[~~(Math.random() * company.length)],
        phone: phone[~~(Math.random() * phone.length)],
        city: cities[~~(Math.random() * cities.length)],
        date: date[~~(Math.random() * date.length)]
      });
    }
    let totalpang = Math.floor(data.length / 5);

    let arraydata = [];
    for (let i = 1; i <= totalpang; i++) {
      arraydata.push({
        number: i
      });
    }

    this.setState({
      users: data,
      totalpagi: totalpang,
      totalusers: data.length,
      pagination: arraydata,
      filteredUsers: data
    });

    /* this.setState({
      startDate: new Date()
    }); */
    /* var columns = [
      { title: "Name", prop: "name" },
      { title: "City", prop: "city" },
      { title: "Address", prop: "address" },
      { title: "State", prop: "state" }
    ]; */

    /* Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        users: res.data
      });
    }); */
  }

  changeSortBy = e => {
    // Count total no of pagination
    let Sort = e.target.options[e.target.selectedIndex].value;
    let totalpagination = Math.floor(this.state.totalusers / Sort);
    let arraydata = [];
    for (let i = 1; i <= totalpagination; i++) {
      arraydata.push({
        number: i
      });
    }

    this.setState({
      sortBy: Sort,
      totalpagi: totalpagination,
      pagination: arraydata,
      maxsortby: Sort,
      minsortby: 0,
      activePagi: 1
    });
  };

  changePagi = e => {
    let minsortby = e * this.state.sortBy - this.state.sortBy;
    let maxsortby = e * this.state.sortBy;
    this.setState({
      activePagi: e,
      minsortby: minsortby,
      maxsortby: maxsortby
    });
  };

  changeStartDate = e => {
    const pickedDate = new Date(e.target.value);
    this.setState({
      startDate: pickedDate.getTime()
    });
  };
  changeEndDate = e => {
    const pickedDate = new Date(e.target.value);
    this.setState({
      EndDate: pickedDate.getTime()
    });
  };

  filterArray = () => {
    const filteredUsers = this.state.users.filter(user => {
      let udate = user.date.split(/\//);
      let fdate = [udate[1], udate[0], udate[2]].join("/");
      let ndate = new Date(fdate);
      return (
        ndate.getTime() >= this.state.startDate &&
        ndate.getTime() <= this.state.EndDate
      );
    });
    let totalpagination = Math.floor(
      filteredUsers.length / this.state.maxsortby
    );
    let arraydata = [];
    for (let i = 1; i <= totalpagination; i++) {
      arraydata.push({
        number: i
      });
    }

    this.setState({
      filteredUsers: filteredUsers,
      pagination: arraydata
    });
  };

  searchfilter = e => {
    let searchterm = e.target.value;
    const filteredUsers = this.state.users.filter(user => {
      //return searchterm == user.name;
      const search = searchterm.toLowerCase();
      const username = user.name.toLowerCase();
      const useremail = user.email.toLowerCase();
      const usercompany = user.company.toLowerCase();
      const userphone = user.phone.toLowerCase();
      const usercity = user.city.toLowerCase();
      return (
        username.includes(search) ||
        useremail.includes(search) ||
        usercompany.includes(search) ||
        userphone.includes(search) ||
        usercity.includes(search)
      );
      /* if (username.includes(search)) {
        return true;
      }*/
    });
    let totalpagination = Math.floor(
      filteredUsers.length / this.state.maxsortby
    );
    let arraydata = [];
    for (let i = 1; i <= totalpagination; i++) {
      arraydata.push({
        number: i
      });
    }

    this.setState({
      filteredUsers: filteredUsers,
      pagination: arraydata
    });
  };

  render() {
    return (
      <div>
        <AppHeader />
        <div id="maincnt" className="mainCont transition-small ">
          <div className="flex justify-center items-center">
            <div className="mt-10 w-11/12">
              <div>
                <div>
                  <span className="mr-5 text-lg font-semibold">Search</span>
                  <input
                    onChange={this.searchfilter}
                    className="px-3 py-2 bg-gray-200 focus:outline-none"
                    type="text"
                  />
                </div>
                <div className="my-5 flex items-center">
                  <div>
                    <span>Sort By</span>
                    <select
                      onChange={this.changeSortBy}
                      className="px-2 ml-5 py-2 bg-gray-200"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                  </div>

                  <div className="flex ml-auto">
                    <div>
                      <div className="mr-3 font-semibold ">Start Date</div>
                      <input
                        onChange={this.changeStartDate}
                        className="border-gray-400 border py-2 pl-5 focus:outline-none"
                        type="date"
                        name="date"
                      />
                    </div>
                    <div>
                      <div className="mr-3 font-semibold ">End Date</div>
                      <input
                        onChange={this.changeEndDate}
                        className="border-gray-400 border py-2 pl-5 focus:outline-none"
                        type="date"
                        name="date"
                      />
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={this.filterArray}
                        className="px-3 py-3 ml-3 bg-gray-400 focus:outline-none"
                      >
                        {" "}
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Id</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Company</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">City</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filteredUsers
                    .slice(this.state.minsortby, this.state.maxsortby)
                    .map(user => {
                      return (
                        <tr key={user.id}>
                          <td data-title="Id" className="border px-4 py-2">
                            {user.id + 1}
                          </td>
                          <td data-title="Name" className="border px-4 py-2">
                            {user.name}
                          </td>
                          <td
                            data-title="Company Name"
                            className="border px-4 py-2"
                          >
                            {user.company}
                          </td>
                          <td data-title="Email" className="border px-4 py-2">
                            {user.email}
                          </td>
                          <td data-title="Phone" className="border px-4 py-2">
                            {user.phone}
                          </td>
                          <td data-title="City" className="border px-4 py-2">
                            {user.city}
                          </td>
                          <td data-title="Date" className="border px-4 py-2">
                            {user.date}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="mt-5 flex">
                <div>
                  {this.state.pagination.map(pagi => {
                    return (
                      <button
                        key={pagi.number}
                        onClick={() => {
                          this.changePagi(pagi.number);
                        }}
                        className={
                          this.state.activePagi === pagi.number
                            ? "bg-gray-300 px-3 py-2 focus:outline-none"
                            : "px-3 py-2 focus:outline-none"
                        }
                      >
                        {pagi.number}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="my-5">
                <div className="font-semibold text-md text-gray-600">
                  Tota users:{" "}
                  <span className="text-black">
                    {this.state.filteredUsers.length}
                  </span>
                </div>
                <div className="font-semibold text-md text-gray-600">
                  showing{" "}
                  <span className="text-black">{this.state.minsortby + 1}</span>{" "}
                  to <span className="text-black">{this.state.maxsortby}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
