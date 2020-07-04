import React from "react";
import { DashboardContainer } from "./styles/dashboard";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as MemberActions from '../../store/actions/member'
import Menu from "../../components/menus/Nav";
import Siderbar from "../../components/menus/Sidebar";
import DashboardRouter from "../../dashboard.routes";

// import { Container } from './styles';

function Dashboard({ je, logout }) {
  return (
    <DashboardContainer>
      <div className="navbar">
        <Menu je={je} logout={logout}/>
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
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(MemberActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
