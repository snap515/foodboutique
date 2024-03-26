export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="/">Food Boutique</a>
        <ul>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">Youtube</a></li>
        </ul> 
      </div>
      <div>
        <h2>Discover the Variety of Flavors and Quality</h2>
        <p>An online store where you will find fresh, natural and delicious products for a healthy life and unforgettable gastronomic adventures.</p>
      </div>
      <div>
        <form action="">
          <label htmlFor="subscription">Subscribe and learn about new products!</label>
          <input type="text" id="subscription" placeholder="Email" />
          <button type="Submit">Send</button>
        </form>
      </div>
      <ul>
        <li>
          <p>Food Boutique. All rights reserved.</p>
        </li>
        <li>
          <p>
            <a href="/">Privacy Policy</a>
            <span> / </span>
            <a href="/">Terms of Service</a>
          </p>
        </li>
      </ul>
    </footer>
  )
}