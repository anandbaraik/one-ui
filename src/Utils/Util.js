export const generateUniqueId = () => {
    //timestamp to base36 string
    const timestamp = Date.now().toString(36);

    const randomString = Math.random().toString(36).substr(2, 5);

    return timestamp + '-' + randomString;
}

export const MENUS = [
    {
      id: generateUniqueId(),
      name: "Avatar",
      path: "/docs/avatar",
    },
    {
      id: generateUniqueId(),
      name: "Alert",
      path: "/docs/alert",
    },
    {
      id: generateUniqueId(),
      name: "Badge",
      path: "/docs/badge",
    },
    {
      id: generateUniqueId(),
      name: "Button",
      path: "/docs/button",
    },
    {
      id: generateUniqueId(),
      name: "Card",
      path: "/docs/card",
    },
    {
      id: generateUniqueId(),
      name: "Image",
      path: "/docs/image",
    },
    {
      id: generateUniqueId(),
      name: "Input",
      path: "/docs/input",
    },
    {
      id: generateUniqueId(),
      name: "Typography",
      path: "/docs/typography",
    },
    {
      id: generateUniqueId(),
      name: "List",
      path: "/docs/list",
    },
    {
      id: generateUniqueId(),
      name: "Navigation",
      path: "/docs/navigation",
    },
    {
      id: generateUniqueId(),
      name: "Grid",
      path: "/docs/grid",
    },
    {
      id: generateUniqueId(),
      name: "Modal",
      path: "/docs/modal",
    },
];
