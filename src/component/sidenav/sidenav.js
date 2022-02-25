import { Menu } from 'antd';

import React from 'react';
import parse from 'html-react-parser'


import MenuIcon from '../../assets/icons/CustomIcon/MunuIcon'

import OpenBook from '../../assets/icons/open-book2.png'

import HomeRoutes from '../../util/HomeRoutes'

import './sidenav.scss'

import { withRouter, Link } from "react-router-dom";

const { SubMenu } = Menu;


// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

// eslint-disable-next-line
const SidNav = (props) => {
  const [openKeys, setOpenKeys] = React.useState([]);

  const onOpenChange = keys => {

    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };


  return (
    <> 
    <Menu
      mode="inline" 
      openKeys={openKeys} 
      onOpenChange={onOpenChange}
      inlineIndent={5}
      style={{
        borderRadius: '10px'
      }}
    >
      <SubMenu key="sub1" icon={<MenuIcon width="44" height="42" />} title="คลังเอกสารสินไหม" 
        style={{ 
          width: 256, 
          height: '100%',
          // marginBottom: '20px',
          background: '#FFFFF',
          borderRadius: '10px',
          border: '2px solid red',
          fontFamily: 'DBOzoneX',
          fontSize: '24px',
          marginLeft: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: ''
        }}
      >
        {HomeRoutes.sub1
          .filter(data => data.view_role.includes(localStorage.getItem('user_role')))
          .map(data => {
            return(
              <>
                <Menu.Item key={data.Id}
                  style={{
                    fontSize: '18px',
                    height: '51px',
                    paddingLeft: '40px',
                    lineHeight: '80%',
                  }}
                >
                  {parse(data.wording)}
                  <Link to={data.path} />
                  
                </Menu.Item>
                <Menu.Divider />
              </>
            )
          })
        }
      </SubMenu>

      <Menu.Divider style={{ height: '10px' }}/>
      
      <SubMenu key="sub2" icon={<img className="active" src={OpenBook} alt="yellow star" width="44" height="42" />} title="รายงาน"
        style={{ 
          width: 256, 
          height: '100%',
          background: '#FFFFFF',
          borderRadius: '10px',
          border: '1px solid red',
          fontFamily: 'DBOzoneX',
          fontSize: '24px',
          marginLeft: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {HomeRoutes.sub2
          .filter(data => data.view_role.includes(localStorage.getItem('user_role')))
          .map(data => {
            return(
              <>
                <Menu.Item key={data.Id}
                  style={{
                    fontSize: '18px',
                    height: '51px',
                    paddingLeft: '40px',
                    lineHeight: '80%',
                  }}
                >
                  {parse(data.wording)}
                  <Link to={data.path} />
                  
                </Menu.Item>
                <Menu.Divider />
              </>
            )
          })
        }
      </SubMenu>  
    </Menu>
    </>
  );
};

export default withRouter(SidNav)