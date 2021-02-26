
// import React from "react"
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// // import "../styles/sidebar.css"

// function SidebarItem({name, items, depthStep=10, depth=0, ...rest}) {
//     return (
//         <div>
//           <ListItem button dense {...rest}>
//             <ListItemText style={{ paddingLeft: depth * depthStep }}>
//               <span>{name}</span>
//             </ListItemText>
//           </ListItem>
//           {Array.isArray(items) ? (
//             <List disablePadding dense>
//               {items.map((i) => (
//                 <SidebarItem
//                   key={i.name}
//                   depth={depth + 1}
//                   depthStep={depthStep}
//                   {...i}
//                 />
//               ))}
//             </List>
//           ) : null}
//           </div>
//       )
// }

// class Sidebar extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         siteTitle: this.props.siteTitle,
//         links: [
//             {name: 'Home'}, 
//             {name: 'Shop', items: [
//                 {name:'Earrings'},
//                 {name: 'Rings'}, 
//                 {name: 'Others'}, 
//             ]}, 
//             {name: 'About'},  
//         ],
//       } 
//     }

//     render() {
//         return (
//             <div>
//                 <List disablePadding dense>
//                 {this.state.links.map(({name, items:subItems, ...rest}) => (
//                     <ListItem button>
//                         <ListItemText>{name}</ListItemText>
                    
//                     { Array.isArray(subItems) ? (
//                         <List disablePadding dense> {subItems.map((i) => (
//                             <ListItem key={i.name} button>
//                                 <ListItemText>
//                                 {i.name}
//                                 </ListItemText>
//                             </ListItem>
//                         ))}
//                         </List>
//                     ) : null }
//                     </ListItem>
//                 ))}
//                 </List>
//             </div>
//         )
//     }
// }
// export default Sidebar