function getRouteNameByNavigation(navigation) {
  const routes = navigation.getState().routes;
  return routes[routes.length - 1].name;
}

export const navigateBack = (navigation) => {
  if (navigation.canGoBack()) {
    console.log(
      '[NAVEGAÇÃO] Retornando a partir de ' +
        getRouteNameByNavigation(navigation)
    );
    navigation.goBack();
  }
};
