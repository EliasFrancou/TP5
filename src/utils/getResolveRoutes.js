const resolveRoutes = (route) => {
  if (route === '/' || route.length <= 0) {
    return '/';
  } else if (/^[a-z0-9]+$/i.test(route)) {
    return '/:id';
  } else {
    return `/${route}`;
  }
};

export default resolveRoutes;
