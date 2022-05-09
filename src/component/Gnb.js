import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

const colors = [
  'pink'
]

export default function Gnb(){
    const router = useRouter();
    
    let activeItem;

    if(router.pathname === "/"){
      activeItem = "home";
    }else if(router.pathname === "/") {
      activeItem = "about";
    }

    const goLink = (e, data) => {
      if(data.name === 'home'){
        router.push('/')
      }else if (data.name === 'about'){
        router.push('/about')
      }
    }

    return (
        <Menu color={'pink'} inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
      </Menu>
    );
};


