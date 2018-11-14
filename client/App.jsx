import React from 'react';
import Header from './components/Header';
// import { Header, Footer, SideBar } from './components';
import './App.scss';

// export class AppSite extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="App">
//           {/* <SideBar /> */}
//           <Header />
//           {/* <Footer /> */}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default AppSite;

const app = () => (
  <div className="app">
    <SideBar />
    <Header />
    <Footer />
  </div>
);

export default app;
