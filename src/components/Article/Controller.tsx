import React from "react";
import View from "./View";

interface Props {}

interface State {}

class ArticleController extends React.Component<Props> {
  state: State = {};

  render() {
    return (
      <View
        content={
          "Tui thì nghe nhạc không nhiều, và thường có thói quen nghe bài nào chết bài nấy suốt một thời gian dài. Bến Thượng Hải là một trong những bài tui hay nghe, nghe từ thời còn học cấp 2. Thời ..."
        }
        userName={"Cà Phê Sữa"}
        badge={"Phá làng"}
      />
    );
  }
}

export default ArticleController;
