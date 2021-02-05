import React from 'react'
import style from "./SideMenu.module.css";
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from "@ant-design/icons"

export  const  SideMenu= ()=> {
  return (
    <Menu mode="vertical" className={style["side-menu"]}>
      {
        sideMenuList.map((m, idx) => (
          <Menu.SubMenu
            key={`side-menu-${idx}`}
            title={<span><GifOutlined />{m.title}</span>}
          >
            {
              m.subMenu.map((sm, idxx) => (
                <Menu.SubMenu
                  key={`sub-menu-${idxx}`}
                  title={<span><GifOutlined />{sm.title}</span>}
                >
                  {
                    sm.subMenu.map((sms, smsindex) => (
                      <Menu.Item
                        key={`sub-sub-menu-${smsindex}`}
                      >
                        <span><GifOutlined />{sms}</span>
                      </Menu.Item>
                    ))
                  }
                </Menu.SubMenu>
              ))
            }
          </Menu.SubMenu>
        ))
      }
    </Menu>
  )
}
