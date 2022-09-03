import React    from "react";
import template from "./router.jsx";

class router extends React.Component {
  render() {
    return template.call(this);
  }
}

export default router;
