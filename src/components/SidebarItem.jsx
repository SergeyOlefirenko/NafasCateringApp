import { useState } from "react"
import logo from '../logo.png';
import menu from '../menu.png';

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)
// Test function for decided question with pictures and how to select item for adding to order
    const options = [
        {
          key: '',
          text: '',
          value: '',
          image: { avatar: true, src: menu, with: '40px', height: '40px' },
        },
        {
          key: '',
          text: '',
          value: '',
          image: { avatar: true, src: logo, with: '40px', height: '40px'  },
        },
      ]
      const dropdownOptions = () => (
        <span>
          {' '}
          <SidebarItem
            inline
            options={options}
            defaultValue={options[0].value}
          />
         
        </span>
      )
// Finish test function 
    if(item.children){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    { item.children.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                { item.image && <i className={item.image}></i> }
                {item.title}
            </a>
        )
    }
}