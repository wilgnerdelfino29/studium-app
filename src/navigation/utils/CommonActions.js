const NAVIGATION_LOG = '[NAVEGAÇÃO]';

function getRouteNameByNavigation(navigation) {
  const routes = navigation.getState().routes;
  return routes[routes.length - 1].name;
}

export const navigateBack = (navigation) => {
  if (navigation.canGoBack()) {
    const routeName = getRouteNameByNavigation(navigation);
    console.log(NAVIGATION_LOG + ' Retornando a partir de ' + routeName);
    navigation.goBack();
  }
};

export const openMenu = (navigation) => {
  console.log(NAVIGATION_LOG + ' Abrindo Drawer (Menu)');
  navigation.openDrawer();
};
