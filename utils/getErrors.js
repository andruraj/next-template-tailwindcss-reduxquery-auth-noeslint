export /**
 *
 *
 * @param {unknown} error
 * @return {*}  {string}
 */
const getErrorMessage = (error) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong!";
  }

  return message;
};
