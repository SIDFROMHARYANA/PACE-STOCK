import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => 
{
    return (
        <div><nav className="navbar navbar-expand-lg white">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/D">

            


           <h5> D </h5>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-grey" aria-current="page" to="/LEARN">

                LEARN
                </Link>
                </li>
                <li className="nav-item">
                < Link className="nav-link active text-grey" aria-current="page" to="/BLOG">
                
                BLOG
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-grey" aria-current="page" to="/BOOKMARKS">
                
                BOOKMARKS
                </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link active text-grey" aria-current="page" to="/UI KIT">
                
                UI KIT
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active text-grey" aria-current="page" to="/LAIN NYA">
                
                LAIN NYA
                </Link>
                </li>  
                <li className="nav-item">
                <Link className="nav-link active text-grey" aria-current="page" to="/LAIN NYA">
                
                </Link>
              </li>           
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )       
};

