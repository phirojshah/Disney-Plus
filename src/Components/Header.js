import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.png "/> 
      <NavMenu> 
           <a>
           <span>HOME</span>
            </a>     
            <a>
           <span>SEARCH</span>
            </a>  
            <a>
           <span>WATCHLIST</span>
            </a> 
            <a>
           <span>ORIGINALS</span>
            </a> 
            <a>
              <span>MOVIES</span>  
            </a>    
            <a>
           <span>SERIES</span>
            </a>  
                        
      </NavMenu>
      
      <UserIMG src='/images/profile.jpg' />

    


    </Nav>
  )
}

export default Header

const Nav=styled.nav`
//width:100%;
height:70px;
// position:fixed; 
// top:0;
//  left:0;
//   right:0;
display:flex;
align-items:center;
background-color:#090b13;
padding:0 36px;
cursor:pointer;
`
const Logo=styled.img`
width:70px;
height:70px;
`

const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 10px;
    height:20px;

   
    span{
        font-size:13px;
        letter-spacing:1.42px;
        padding:0 12px;
        position:relative;

        //&:after => work as a div
        &:after{  
            content:"";
             height:2px;
             background-color:white;
             position:absolute;
             left:0;
             right:0;
             bottom:-6px;
             opacity:0;
             transform-origin:left center;
             transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
             transform:scaleX(0);
             


        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
}
`

const UserIMG=styled.img`
height:48px;
width:48px;
border-radius:50%;
`
