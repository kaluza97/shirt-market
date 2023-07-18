import { LinkMenu, NavigationMenuContainer } from '@/components/NavigationMenu/NavigationMenu.styles';

const NavigationMenu = () => {
  return (
    <NavigationMenuContainer>
      <LinkMenu href="/">Home</LinkMenu>
      <LinkMenu href="/about">About</LinkMenu>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
