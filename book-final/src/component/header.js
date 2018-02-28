import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
                 headline: {
                               fontSize: 24,
                               paddingTop: 16,
                               marginBottom: 12,
                               fontWeight: 400,
                            },
               };

function handleActive(tab) {
       alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const Header = () => (
 <div>
    <table>
        <thead>
            <tr>
                <th><Link to="/">BOOK NAME  ||</Link></th>
                <th><Link to="/login">LOGIN ||</Link></th>
                <th><Link to="/register">Author ||</Link></th>
                <th><Link to="/cart">CART</Link></th>
             </tr>
        </thead>
    </table>
  </div>   
);

export default Header;