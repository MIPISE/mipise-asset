export enum Icons {
  WARNING = "triangle-warning",
  DEFAULT = "default-icon",
  DOCUMENT = "file",
  ADD = "add",
  DELETE = "trash",
  LOGOUT = "log-out",
  HEADSET = "user-headset",
  GEAR = "user-gear",
  GEARS = "gears",
  OVERVIEW = "overview",
  ARROW_CIRCLE_LEFT = "arrow-circle-left",
  ARROW_CIRCLE_UP = "arrow-circle-up",
  ARROW_CIRCLE_DOWN = "arrow-circle-down",
  ARROW_CIRCLE_RIGHT = "arrow-circle-right",
  MENU = "bars-sort",
  CREDIT_CARD = "credit-card",
  DASHBOARD = "dashboard-monitor",
  USER = "user",
  ARROW_COMPARISON = "arrow-comparison",
  BENEFIT_HAND = "benefit-hand",
  DUPLICATE = "duplicate",
  CIRCLE_STAR = "circle-star",
  SETTINGS = "workflow-setting-alt",
  SHOW_PASSWORD = "eye",
  HIDE_PASSWORD = "crossed-eye",
  COPY = "copy",
  DOWNLOAD = "download",
  DROPDOWN = "menu-dots-vertical",
  SORT = "sort",
  SEARCH = "search",
  SETTINGS_SLIDERS = "settings-sliders",
  INVALID = "cross",
  VALID = "check",
  HELP = "interrogation"
}

const iconMapping = (name: string): string | undefined => {
  const key = (name.toUpperCase()) as keyof Icons;
  if (Icons[key])
    return Icons[key];

  return name;
};
export default iconMapping;
