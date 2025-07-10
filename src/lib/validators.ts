export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationSchema {
  [key: string]: ValidationRule;
}

export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Common validation rules
export const validationRules = {
  required: (): ValidationRule => ({
    required: true,
  }),

  email: (): ValidationRule => ({
    required: true,
    pattern: EMAIL_REGEX,
    custom: (value: string) => {
      if (!EMAIL_REGEX.test(value)) {
        return 'Please enter a valid email address';
      }
      return null;
    },
  }),

  minLength: (min: number): ValidationRule => ({
    minLength: min,
    custom: (value: string) => {
      if (value.trim().length < min) {
        return `Must be at least ${min} characters long`;
      }
      return null;
    },
  }),

  maxLength: (max: number): ValidationRule => ({
    maxLength: max,
    custom: (value: string) => {
      if (value.trim().length > max) {
        return `Must be no more than ${max} characters long`;
      }
      return null;
    },
  }),
};

// Main validator function
export function validateField(
  value: string,
  rule: ValidationRule,
  fieldName: string
): string | null {
  const trimmedValue = value.trim();

  // Check required
  if (rule.required && !trimmedValue) {
    return `${fieldName} is required`;
  }

  // If field is empty and not required, skip other validations
  if (!trimmedValue && !rule.required) {
    return null;
  }

  // Check minimum length
  if (rule.minLength && trimmedValue.length < rule.minLength) {
    return `${fieldName} must be at least ${rule.minLength} characters long`;
  }

  // Check maximum length
  if (rule.maxLength && trimmedValue.length > rule.maxLength) {
    return `${fieldName} must be no more than ${rule.maxLength} characters long`;
  }

  // Check pattern
  if (rule.pattern && !rule.pattern.test(trimmedValue)) {
    return `${fieldName} format is invalid`;
  }

  // Run custom validation
  if (rule.custom) {
    return rule.custom(trimmedValue);
  }

  return null;
}

// Validate entire form
export function validateForm(
  data: { [key: string]: string },
  schema: ValidationSchema
): ValidationResult {
  const errors: { [key: string]: string } = {};

  for (const [fieldName, value] of Object.entries(data)) {
    const rule = schema[fieldName];
    if (rule) {
      const error = validateField(value, rule, fieldName);
      if (error) {
        errors[fieldName] = error;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Contact form specific schema
export const contactFormSchema: ValidationSchema = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: validationRules.email(),
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
};
