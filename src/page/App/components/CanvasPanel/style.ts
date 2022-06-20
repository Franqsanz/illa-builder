import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyScaleContainerStyle(
  scale: number,
  verticalResize: boolean,
): SerializedStyles {
  return css`
    transform: scale(${scale / 100});
    transform-origin: 50% 0;
    overflow-y: auto;
    overflow-x: ${verticalResize ? "auto" : "hidden"};
    background: ${globalColor(`--${illaPrefix}-white-01`)};
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  `
}
