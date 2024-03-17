export const colourStyles = {
    control: (provided, state) => ({
        ...provided,
        boxShadow: 'none',
        borderColor: state.isFocused ? '#aaa' : provided.borderColor,
        height: '30px',
        cursor: 'pointer',
        paddingRight: '24px',
        borderRadius: '0',
    }),
    option: (styles) => {
        return {
            ...styles,
            fontSize: "14px",
            transition: "all 0.35s ease",
            cursor: 'pointer',
            textAlign: 'left'
        };
    },
    indicatorsContainer: (provided) => ({
        ...provided,
        display: 'none',
    }),
    placeholder: (styles) => ({
        ...styles,
        color: 'var(--black)',
        fontSize: "14px",
    }),
};