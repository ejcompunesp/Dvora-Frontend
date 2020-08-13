import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as MemberActions from '../../store/actions/member'

import DashboardRouter from "../../dashboard.routes";

import Menu from "../../components/menus/Nav";
import Siderbar from "../../components/menus/Sidebar";

import { Navbar, DashboardContainer, Content } from "./styles/dashboard";

function Dashboard({ je, logout, member }) {
  return (
    <>
      <Navbar>
        <Menu je={je} logout={logout} member={member}/>
      </Navbar>
      <DashboardContainer>
        <div className="sidebar">
          <Siderbar/> 
        </div>
        <Content>
          <DashboardRouter/>
        </Content>
      </DashboardContainer>
    </>
  );
}

const mapStateToProps = state => ({
  je: state.je,
  member: state.member,
});
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(MemberActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
