// @ts-check

/* The code is defining a React component called `Form`. This component is used to render a form with
customizable properties and behavior. */
/**
 * @param {{action?: string, children: React.ReactNode, onSubmit: (e: React.FormEvent, data: any) => void} & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>} parameters
 *
 * @returns {React.ReactNode} Result
 */
export const Form = ({ action, onSubmit, children, ...props }) => {
  /**
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElement = /** @type {HTMLFormElement} */ (e.target);
    const isValid = formElement.checkValidity();

    // formElement.classList.add(className.submitted);

    // focussing the first invalid field
    /** @type {HTMLInputElement} */
    const firstInvalidField = formElement.querySelector(":invalid");
    firstInvalidField?.focus();

    // submit the dataobject if isValid===true
    if (isValid) {
      const dataObject = new FormData(formElement);

      if (!!onSubmit)
        onSubmit(
          e,
          Object.keys(dataObject).length > 0
            ? Object.fromEntries(JSON.parse(JSON.stringify(dataObject)))
            : null
        );
    }
  };

  return (
    <form
      action={action}
      onSubmit={handleSubmit}
      //   onKeyDown={(e) => {
      //     if (e.key === submitButtonKeyBinding) {
      //       e.preventDefault();
      //       e.currentTarget.requestSubmit();
      //       // !!onSubmit
      //       //   ? onSubmit(Object.fromEntries(new FormData(e.currentTarget)))
      //       //   : null;
      //     }
      //     if (e.key === cancelButtonKeyBinding) {
      //       e.preventDefault();
      //       e.currentTarget.reset();
      //       !!onCancel ? onCancel() : null;
      //     }
      //     if (e.key === "Enter") e.preventDefault();
      //   }}
      noValidate
      {...props}
    >
      {/* <header className="p-2 bg-transparent/5 border border-transparent border-b-transparent/5 flex items-center justify-between">
        <span className="text-[#256fa3] text-[17.5px] font-semibold">
          {name}
        </span>
        <div>
          <Button type="submit" {...submitButtonProps}>
            {submitButtonText}
          </Button>
          <Button
            type="reset"
            onClick={onCancel}
            variant="secondary"
            {...cancelButtonProps}
          >
            {cancelButtonText}
          </Button>
        </div>
      </header> */}
      {children}
    </form>
  );
};
