import _ from 'lodash'
import Formsy from 'formsy-react'

import TextInput from './TextInput'
import Textarea from './Textarea'
import Checkbox from './Checkbox'
import RadioGroup from './RadioGroup'
import CheckboxGroup from './CheckboxGroup'
import SliderRadioGroup from './SliderRadioGroup'
import SliderStandard from './SliderStandard'
import TiledRadioGroup from './TiledRadioGroup'
import TiledCheckboxInput from './TiledCheckboxInput'
import TiledCheckboxGroup from './TiledCheckboxGroup'

require('./FormFields.scss')

const RELAXED_URL_REGEX = /^(http(s?):\/\/)?(www\.)?[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,15})+(\:[0-9]{2,5})?(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$/

const VALID_NAME_REGEX = /.*\s+.+/i

// validations
Formsy.addValidationRule('isRequired', (values, value, array) => { // eslint-disable-line no-unused-vars
  if (_.isUndefined(value) || _.isNull(value)) {
    return false
  }

  if (_.isArray(value)) {
    return value.length > 0
  }

  if (_.isObject(value)) {
    return !_.isEmpty(value)
  }

  if (_.isNumber(value)) {
    // actually any numeric value should pass this check
    return value.toString().length > 0
  }

  if (_.isString(value)) {
    return value.trim().length > 0
  }

  // if some unexpected type of `value` has been passed, treat as not provided
  return false
})

Formsy.addValidationRule('isRelaxedUrl', (values, value, array) => { // eslint-disable-line no-unused-vars
  return !value || RELAXED_URL_REGEX.test(value) ? true : false // eslint-disable-line no-unneeded-ternary
})

Formsy.addValidationRule('isValidName', (values, value, array) => { // eslint-disable-line no-unused-vars
  return value && VALID_NAME_REGEX.test(value.trim()) ? true : false // eslint-disable-line no-unneeded-ternary
})
Formsy.addValidationRule('isPositiveNumber', (values, value, array) => { // eslint-disable-line no-unused-vars
  if (_.isNumber(value) && (value === 0 || value > 0)) {
    return true
  }
  return false
})
Formsy.addValidationRule('isNonNegativeNumber', (values, value, array) => { // eslint-disable-line no-unused-vars
  if (_.isNumber(value) && (value === 0 || value > 0)) {
    return true
  }
  return false
})

export default {
  Formsy,
  Fields: {
    TextInput,
    Textarea,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    SliderRadioGroup,
    SliderStandard,
    TiledRadioGroup,
    TiledCheckboxInput,
    TiledCheckboxGroup
  }
}
