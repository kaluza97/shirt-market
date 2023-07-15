import { LinkMenu, NavigationMenuWrapper } from './NavigationMenu.styles';

const NavigationMenu = () => {
  return (
    <NavigationMenuWrapper>
      <LinkMenu href="/">Home</LinkMenu>
      <LinkMenu href="/about">About</LinkMenu>
    </NavigationMenuWrapper>
  );
};

export default NavigationMenu;
