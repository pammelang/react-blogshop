import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import HomeIcon from "@material-ui/icons/Home";


class Sidebar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        siteTitle: this.props.siteTitle,
        links: [
            {name: 'Home', icon: HomeIcon}, 
            "divider",
            {name: 'Shop', items: [
                {name:'Earrings'},
                {name: 'Rings'}, 
                {name: 'Others'}, 
            ]}, 
            "divider",
            {name: 'About'},  
        ],
      } 
    }

    render() {
        return (
            <div>
                <List disablePadding dense>
                {this.state.links.map((i, index) => (
                    <React.Fragment key={`${i.name}${index}`}>
                        {i === "divider" ? (
                            <Divider style={{margin: "4vh 0"}} />
                        ) : (
                            <SidebarItem 
                                
                                item={i}
                                />
                        )}
                    </React.Fragment>
                ))}
                </List>
            </div>
        )
    }
}
export default Sidebar;



function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { name, items, icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <div>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep}}
          className="sidebar-item-content"
        >
          {icon && <div className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">{name}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null }
      </Collapse>
    </div>
  );
}



// function Sidebar({ items, depthStep, depth, expanded }) {
//   return (
//     <div className="sidebar">
//       <List disablePadding dense>
//         {items.map((sidebarItem, index) => (
//           <React.Fragment key={`${sidebarItem.name}${index}`}>
//             {sidebarItem === "divider" ? (
//               <Divider style={{ margin: "6px 0" }} />
//             ) : (
//               <SidebarItem
//                 depthStep={depthStep}
//                 depth={depth}
//                 expanded={expanded}
//                 item={sidebarItem}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default Sidebar;



