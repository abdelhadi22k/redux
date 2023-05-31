import React, { useEffect, useState } from "react";
import { buyCek } from "../redux/cacke/cakeaction";
import { connect } from "react-redux";
import { buykrem } from "./../redux/krem/actionkrim";
import { fetchUser } from "../redux/user/actinUser";

const UserContener = ({ usersdata, fetchUser }: any) => {
  useEffect(() => {
    fetchUser()
  }, []);

  return usersdata.loading ? (
    <h2>LOADING...</h2>
  ) : usersdata.error ? (
    <h2>error...</h2>
  ) : (
    <div>
      <h1>user List </h1>
      <div>
        {usersdata &&
          usersdata.users &&
          usersdata.users.map((p: any) => <p>{p.name}</p>)}
      </div>
    </div>
  );
};
const mapstate = (state: any) => {
  return {
    usersdata: state.user,
  };
};

const mapActction = (dispatch: any) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapstate, mapActction)(UserContener);
