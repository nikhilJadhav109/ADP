

import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormOption {
    value: string;
    label: string;
}

interface BaseField {
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    className?: string;
    [key: string]: any;
}

interface TextField extends BaseField {
    type: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url';
}

interface SelectField extends BaseField {
    type: 'select';
    options: FormOption[];
}

interface TextareaField extends BaseField {
    type: 'textarea';
    rows?: number;
}

type FormField = TextField | SelectField | TextareaField;

interface GroupedField {
    group: FormField[];
}

type FieldConfiguration = FormField | GroupedField;

interface GenericFormProps {
    title?: string;
    description?: string;
    action?: string;
    method?: 'GET' | 'POST';
    template?: string;
    fields: FieldConfiguration[];
    submitButtonText?: string;
    submitButtonIcon?: React.ComponentType<{ className?: string }>;
    className?: string;
    hiddenFields?: Record<string, string>;
    onSubmit?: (data: Record<string, string>, event: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (fieldName: string, value: string, allData: Record<string, string>) => void;
}

const ContactForm: React.FC<GenericFormProps> = ({
    title = "Contact Form",
    description = "Fill out the form below and we'll get back to you soon.",
    action = "https://formsubmit.co/38711a72e270fdb5e66efa77c70d7089",
    method = "POST",
    template = "table",
    fields = [],
    submitButtonText = "Send Message",
    submitButtonIcon: SubmitIcon = Send,
    className = "",
    hiddenFields = {},
    onSubmit,
    onChange
}) => {
    const [formData, setFormData] = useState<Record<string, string>>(() => {
        const initialData: Record<string, string> = {};
        fields.forEach(fieldConfig => {
            if ('group' in fieldConfig) {
                fieldConfig.group.forEach(field => {
                    initialData[field.name] = field.defaultValue || '';
                });
            } else {
                initialData[fieldConfig.name] = fieldConfig.defaultValue || '';
            }
        });
        return initialData;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (onChange) {
            onChange(name, value, { ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (onSubmit) {
            e.preventDefault();
            onSubmit(formData, e);
        }
        // If no onSubmit handler, let the form submit naturally to the action URL
    };

    const renderField = (field: FormField) => {
        const {
            type,
            name,
            label,
            placeholder,
            required = false,
            className: fieldClassName = "",
            ...fieldProps
        } = field;

        const baseInputClasses = `w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${fieldClassName}`;

        const labelElement = label ? (
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
                {label} {required && '*'}
            </label>
        ) : null;

        switch (type) {
            case 'select': {
                const selectField = field as SelectField;
                return (
                    <div key={name}>
                        {labelElement}
                        <select
                            id={name}
                            name={name}
                            value={formData[name] || ''}
                            onChange={handleChange}
                            required={required}
                            className={baseInputClasses}
                            {...fieldProps}
                        >
                            {selectField.options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            }

            case 'textarea': {
                const textareaField = field as TextareaField;
                return (
                    <div key={name}>
                        {labelElement}
                        <textarea
                            id={name}
                            name={name}
                            value={formData[name] || ''}
                            onChange={handleChange}
                            required={required}
                            rows={textareaField.rows || 4}
                            className={`${baseInputClasses} resize-none`}
                            placeholder={placeholder}
                            {...fieldProps}
                        />
                    </div>
                );
            }

            default: {
                return (
                    <div key={name}>
                        {labelElement}
                        <input
                            type={type}
                            id={name}
                            name={name}
                            value={formData[name] || ''}
                            onChange={handleChange}
                            required={required}
                            className={baseInputClasses}
                            placeholder={placeholder}
                            {...fieldProps}
                        />
                    </div>
                );
            }
        }
    };

    return (
        <div className={`max-w-4xl mx-auto p-8 ${className}`}>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>

            <form
                className="space-y-6"
                action={action}
                method={method}
                onSubmit={handleSubmit}
            >
                {/* Hidden fields */}
                <input type="hidden" name="_template" value={template} />
                {Object.entries(hiddenFields).map(([key, value]) => (
                    <input key={key} type="hidden" name={key} value={value} />
                ))}

                {fields.map((fieldConfig, index) => {
                    if ('group' in fieldConfig) {
                        // Handle grouped fields (side by side)
                        return (
                            <div key={index} className={`grid sm:grid-cols-${fieldConfig.group.length} gap-4`}>
                                {fieldConfig.group.map(groupField => renderField(groupField))}
                            </div>
                        );
                    }
                    return renderField(fieldConfig);
                })}

                <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                    <SubmitIcon className="w-5 h-5 mr-2" />
                    {submitButtonText}
                </button>
            </form>
        </div>
    );
};

export default ContactForm