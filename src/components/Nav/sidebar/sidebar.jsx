import React from "react";
import User from "../../Dialogs/User";


const Sidebar = (props) => {

    let avatar = props.sidebar.sidebar.map(u => <User name={u.name} avatar={u.avatar} />)

    return (
        <div className="sidebar">
            <h2>Мои друзья</h2>;
            <div>{avatar}</div>
        </div>
    )
}

export default Sidebar;