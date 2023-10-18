/**
 * The SolidSvg function returns a div element with a background color and a mask applied to it.
 * @param {{size: number, path: string, color: string, fit: boolean}
 * & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>}
 * @returns a JSX element wrapped in a div. The JSX element contains inline CSS styles and a mask
 * property that uses the provided path as the mask URL. The width and height of the div are set based
 * on the provided width and height props. The background color is set to the provided color prop, with
 * "black" as the default value. The mask-repeat property is set to "no
 */
export const SolidSvg = ({
  size = 1,
  path,
  color = "black",
  fit = false,
  ...props
}) => (
  <div
    {...props}
    style={{
      width: size + "rem",
      height: size + "rem",
      backgroundColor: color,
      mask: `url(${path}) center/${fit ? "contain" : "auto"} no-repeat`,
      WebkitMask: `url(${path}) center/${fit ? "contain" : "auto"} no-repeat`,
    }}
  ></div>
);
