import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
// import 'antd/dist/antd.css';
// import '../../App.css';

// Import library Components
import { Menu } from 'antd'
import { 
    LayoutOutlined, 
 } from '@ant-design/icons'

//actions
// import { logout } from '../../Services/Actions/authActions'
// import { showAlert } from '../../Services/Actions/commonActions'

const Navbar = ({ user, dispatch, allowedPermission }) => {
    const [ selectedMenu, setSelectedMenu ] = useState(null)
    // const [ isLogoutLoading, setIsLogoutLoading ] = useState(false)
    const location = useLocation()
    const prevLocation = usePrev(location)

    // in useEffect, check if is available and set selectedMenu
    useEffect(() => {
        if(location) {
            const pathname = location?.pathname
            const prevPathname = prevLocation?.pathname

            if(pathname !== prevPathname) {
                // remove '/' from pathname if it exists at the beginning of the string (e.g. '/dashboard')
                const pathnameWithoutSlash = pathname.replace(/^\//, '')
                setSelectedMenu(pathnameWithoutSlash)
            }
        }
    }, [location, prevLocation])

    // Hanlde Menu Change
    const handleMenuChange = (e) => {
        setSelectedMenu(e.key)
    }

    // get navigation Menu and Submenu property
    const getNavProperty = ( menuName ) => {
        const menuList = [
            {
                id: 'home',
                key: 1,
                label: 'Home', 
                icon: <LayoutOutlined />,
                link: '/home'
            },
            {
                id: 'members',
                key: 1,
                label: 'Members', 
                icon: <LayoutOutlined />,
                link: '/members'
            },
            {
                id: 'Login',
                key: 1,
                label: 'Login', 
                icon: <LayoutOutlined />,
                link: '/Login'
            },
            {
                id: 'User-profile',
                key: 1,
                label: 'User Profile', 
                icon: <LayoutOutlined />,
                link: '/userprofile'
            },
        ]

        // return menuList?.[menuName] ?? { id: menuName, label: menuName, icon: <QuestionOutlined />, key: menuName, link: '/' + menuName }
        return menuList
    }
    

    // controliing nav menu access 
    const getAllNavMenu = () => {
        const menuItems = getNavProperty()

        // rendering Menu component
        const menuLinks = menuItems.map(item => ( 
                <Menu.Item key={ item.id } icon={ item.icon }>
                    <Link to={ item.link }>{ item.label }</Link>
                </Menu.Item>
            )
        )
        return menuLinks
    }
   

    // Handle Logout
//     const handleLogout = () => {
//      setIsLogoutLoading(true)

//      setTimeout(() => {
//          setIsLogoutLoading(false)
         
//          // Logout
//         //  dispatch( logout() )
//      }, 1000)        
//  }

 

    return (
        <div>
            <div style={{ height: '100vh' }}>
                <Menu
                    selectedKeys={[ selectedMenu ]}
                    mode={ 'inline' }
                    onClick={ handleMenuChange }
                    theme={'dark'}
                    className={ 'scrollable' }
                    style={{ maxHeight: '80%', overflowY: 'auto' }} 
                >
                    {
                        getAllNavMenu()
                    }
                </Menu>
            </div>
            
       </div>
    )
}

// Use Prev
const usePrev = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
}

// JSS Styles
// const userIconStyle = {
//     backgroundColor: '#292277',
//     cursor: 'pointer'
// }

// const adminOptionStyle = {
//     textAlign: 'center',
//     padding: '10px',
//     margin: '15px auto'
// }

// const logoStyle = {
//     fontFamily: 'Oleo Script Swash Caps, cursive',
//     textAlign: 'center', 
//     padding: '10px', 
//     borderBottom: '1px solid gray',
//     fontWeight: 'bold', 
//     fontSize: '32px',
// }

// const logoutButtonStyles = {
//     display: 'flex', 
//     justifyContent: 'flex-end'
// }

// Prop Types
Navbar.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
    allowedPermission: PropTypes.object
}

Navbar.defaultProps = {
    isAuthenticated: false,
    user: null,
    allowedPermission: null,
}

// const mapStateToProps = state => ({
//     user: state?.auth?.user ?? null,
//     allowedPermission: state?.permission?.allowedPermission ?? null 
// })

// const mapDispatchToProps = dispatch => ({ dispatch })

export default Navbar