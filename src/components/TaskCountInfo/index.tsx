import * as S from "./styles";

import { ITaskCountInfoProps } from "./types";

const TaskCountInfo = ({
  children,
  badge,
  variant = "created"
}: ITaskCountInfoProps) => {
  return (
    <S.Wrapper variant={variant} role="info" aria-label="count info">
      <p>{children}</p>
      {badge}
    </S.Wrapper>
  );
};

export default TaskCountInfo;
