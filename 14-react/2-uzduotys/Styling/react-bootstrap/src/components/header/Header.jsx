import './Header.css';

const Header = () => {
     return (
         <div>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" id="navbarNav">
    <a class="navbar-brand" href="#">Company name</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Enterprise</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li>
        <button class="btn btn-outline-success" type="submit">Sign up</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
         </div>
     )
 }
 
 export default Header;