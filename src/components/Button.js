import React from 'react'

const Button = ({ data }) => {
    return (
        <button

            // General attributes:
            autofocus={data?.autofocus || false}
            disabled={data?.disabled || false}
            id={data?.id || undefined}
            className={data?.className || undefined}
            style={data?.style || {}}
            title={data?.title || undefined}
            type={data?.type || undefined}

            // Form-related attributes (for submit buttons):
            form={data?.form || undefined}
            formaction={data?.formaction || undefined}
            formenctype={data?.formenctype || undefined}
            formmethod={data?.formmethod || undefined}
            formnovalidate={data?.formnovalidate || false}
            formtarget={data?.formtarget || undefined}

            // Additional attributes:
            name={data?.name || undefined}
            onClick={data?.onClick || undefined}
            data={data?.data || undefined}

        >
            {data?.icon || undefined}
            {data?.value || undefined}
        </button>
    )
}

export default Button
