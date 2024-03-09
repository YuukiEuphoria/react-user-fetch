const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
      <div>
        <img src="user.webp" alt="Profile" />
        <h2>Karthi Madhesh</h2>
        <p>Admin</p>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Course</li>
          <li className="active">Students</li>
          <li>Payment</li>
          <li>Report</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>

      </div>
    </div>
  );
};

export default Sidebar;
