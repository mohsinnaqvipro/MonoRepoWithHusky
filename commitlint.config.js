module.exports = {
  rules: {
    // Disable all conventional commit rules
    'type-enum': [0],
    'type-case': [0],
    'type-empty': [0],
    'subject-case': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'header-max-length': [0],
    'header-min-length': [0],

    // Custom validation
    'custom-pattern': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'custom-pattern': ({ header }) => {
          const pattern = /^\[VOYAG-\d+\] .+$/;
          if (!pattern.test(header)) {
            return [
              false,
              `Commit message must follow format: "[VOYAG-123] description"\n` +
                `Example: "[VOYAG-100] Fix authentication bug"`,
            ];
          }
          return [true];
        },
      },
    },
  ],
};
