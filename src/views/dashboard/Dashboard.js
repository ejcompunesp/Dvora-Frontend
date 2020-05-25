import React from "react";
import { DashboardContainer } from "./styles/dashboard";
import { connect } from 'react-redux';
import Menu from "../../components/menus/Nav";
import Siderbar from "../../components/menus/Sidebar";
import DashboardRouter from "../../dashboard.routes";

// import { Container } from './styles';

function Dashboard({ je }) {
  return (
    <DashboardContainer>
      <div className="navbar">
        <Menu je={je}/>
      </div>
      <div className="sidebar">
        <Siderbar/> 
      </div>
      <div className="content">
        <DashboardRouter/>
      </div>
    </DashboardContainer>
  );
}

const mapStateToProps = state => ({
  je: state.je
});

export default connect(mapStateToProps)(Dashboard);
