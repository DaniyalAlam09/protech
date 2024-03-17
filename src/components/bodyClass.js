import  { Component } from 'react';

class BodyClass extends Component {

    componentDidMount() {

        if (window.location.pathname === '/dashboard') {
            this.setBodyClass('dashboard-page-wrap');
        } else if (window.location.pathname === '/checkout') {
            this.setBodyClass('checkout-page-wrap');
        } else if (window.location.pathname === '/earlyrenew') {
            this.setBodyClass('earlyrenew-page-wrap');
        } else if (window.location.pathname === '/login') {
            this.setBodyClass('login-page-wrap');
        } else if (window.location.pathname === '/logout') {
            this.setBodyClass('logout-page-wrap');
        } else if (window.location.pathname === '/reset-password') {
            this.setBodyClass('reset-password-page-wrap');
        } else if (window.location.pathname === '/') {
            this.setBodyClass('home-page-wrap');
        } else if (window.location.pathname === '/updatebilling') {
            this.setBodyClass('updatebilling-page-wrap');
        } else if (window.location.pathname === '/updatebilling-success') {
            this.setBodyClass('updatebilling-success-page-wrap');
        }
    }

    setBodyClass(className) {
        // remove other classes
        document.body.className ='';

        // assign new class
        document.body.classList.add(className);
    }

    render() { 
        return null;
    }

}
 
export default BodyClass;