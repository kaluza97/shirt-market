import { LinkMenu, NavigationMenuContainer } from './NavigationMenu.styles';

const NavigationMenu = () => {
  return (
    <NavigationMenuContainer>
      <LinkMenu href="/">Home</LinkMenu>
      <LinkMenu href="/about">About</LinkMenu>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
