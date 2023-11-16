export default function HeaderComponent() {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
            src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1698847298~exp=1698847898~hmac=ebff52930b773b3c1179ccb185312252561814731524f2982121d470c96f5d8c" 
            className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
