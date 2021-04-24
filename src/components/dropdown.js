
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import vahit from '../assets/img/vahit.png'
import { Figure} from 'react-bootstrap';
import { Link , BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles_usercard.scss';


class UserCard extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  
    render() {
      return (
              <div>
              
        <Dropdown  isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
          <DropdownToggle  color="transparent" caret>
            <div  style={{ maxHeight: "25px" }} className="grid space-x-1 grid-cols-5">
            <div className="col-span-4">
                <span>Vahit The Mad</span>
            </div>
            <div className="col-span-1">
            <Figure>
            <Figure.Image
                width={25}
                height={25}
                alt="UserLogo"
                src={vahit}
                roundedCircle
            />
            </Figure>
            </div>
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Home</DropdownItem>  
            <Router>
            <DropdownItem target="_blank" href="https://github.com/erkamoral">Github</DropdownItem>
            <DropdownItem target="_blank" href="https://devilinside.me/blogs/vahit-mad">DevilInsideMe</DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/logout">Log Out</DropdownItem>
            </Router>
          </DropdownMenu>
        </Dropdown>
      </div>
          );
    }
  }
  
  export default UserCard